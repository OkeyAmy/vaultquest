import { ConnectButton } from '@rainbow-me/rainbowkit';
export const AvaxConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted;
        const connected =
          ready &&
          account &&
          chain;
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button" className="bg-red-600/90 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full backdrop-blur-sm text-sm shadow-lg">
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button" className="bg-red-600/90 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full backdrop-blur-sm shadow-lg">
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={openAccountModal} type="button" className="bg-red-600/90 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full backdrop-blur-sm shadow-lg">
                    {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
