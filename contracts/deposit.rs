use cosmwasm_std::{
    entry_point, to_binary, Addr, BankMsg, Binary, Coin, Deps, DepsMut, Env, MessageInfo, Response,
    StdResult, Storage, Uint128,
};
use cw_storage_plus::Map;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq)]
pub struct InstantiateMsg {}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    Deposit {},
    Withdraw { amount: Uint128 },
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
    GetBalance { address: String },
}

// Storage for user balances
const BALANCES: Map<&Addr, Uint128> = Map::new("balances");

#[entry_point]
pub fn instantiate(
    deps: DepsMut,
    _env: Env,
    _info: MessageInfo,
    _msg: InstantiateMsg,
) -> StdResult<Response> {
    Ok(Response::new()
        .add_attribute("action", "instantiate")
        .add_attribute("status", "success"))
}

#[entry_point]
pub fn execute(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: ExecuteMsg,
) -> StdResult<Response> {
    match msg {
        ExecuteMsg::Deposit {} => deposit(deps, info),
        ExecuteMsg::Withdraw { amount } => withdraw(deps, env, info, amount),
    }
}

fn deposit(deps: DepsMut, info: MessageInfo) -> StdResult<Response> {
    let sender = info.sender;

    // Ensure user sent exactly one token (e.g., ATOM)
    let funds = info.funds;
    if funds.len() != 1 {
        return Err(cosmwasm_std::StdError::generic_err("Must send exactly one token"));
    }

    let coin = &funds[0];
    let mut balance = BALANCES.may_load(deps.storage, &sender)?.unwrap_or_default();

    balance += coin.amount;
    BALANCES.save(deps.storage, &sender, &balance)?;

    Ok(Response::new()
        .add_attribute("action", "deposit")
        .add_attribute("sender", sender)
        .add_attribute("amount", coin.amount))
}

fn withdraw(deps: DepsMut, env: Env, info: MessageInfo, amount: Uint128) -> StdResult<Response> {
    let sender = info.sender;
    let mut balance = BALANCES.may_load(deps.storage, &sender)?.unwrap_or_default();

    if balance < amount {
        return Err(cosmwasm_std::StdError::generic_err("Insufficient balance"));
    }

    balance -= amount;
    BALANCES.save(deps.storage, &sender, &balance)?;

    let send_msg = BankMsg::Send {
        to_address: sender.to_string(),
        amount: vec![Coin {
            denom: "uatom".to_string(),
            amount,
        }],
    };

    Ok(Response::new()
        .add_message(send_msg)
        .add_attribute("action", "withdraw")
        .add_attribute("sender", sender)
        .add_attribute("amount", amount))
}

#[entry_point]
pub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {
    match msg {
        QueryMsg::GetBalance { address } => query_balance(deps, address),
    }
}

fn query_balance(deps: Deps, address: String) -> StdResult<Binary> {
    let addr = deps.api.addr_validate(&address)?;
    let balance = BALANCES.may_load(deps.storage, &addr)?.unwrap_or_default();
    to_binary(&balance)
}
