"use client";
import { Wallet } from "./Wallet";
import { wallets } from "cosmos-kit";
import { ChainProvider } from "@cosmos-kit/react";
import { assets, chains } from "chain-registry";
import "@interchain-ui/react/styles";

const CosmosConnectWallet = () => {
  
  const signerOptions = {
    // signingStargate: () => {
    //   return getSigningCosmosClientOptions();
    // }
  };
  return (
    <ChainProvider
      chains={chains}
      assetLists={assets}
      wallets={wallets}
      walletConnectOptions={{
        signClient: {
          projectId: "a8510432ebb71e6948cfd6cde54b70f7",
          relayUrl: "wss://relay.walletconnect.org",
          metadata: {
            name: "Vault Quest",
            description: "Vault Quest",
            url: "https://docs.hyperweb.io/cosmos-kit/",
            icons: [],
          },
        },
      }}
      // @ts-ignore
      signerOptions={signerOptions}
    >
      <Wallet />
    </ChainProvider>
  );
};

export default CosmosConnectWallet;
