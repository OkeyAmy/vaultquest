function noop() {}

export function Button({ text, disabled, onClick = noop }) {
  return (
    <button
      onClick={onClick}
      className="rounded-full bg-red-600 text-white px-4 py-1.5"
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export const ButtonConnect = ({ text = "Connect Wallet", onClick = noop }) => (
  <Button text={text} onClick={onClick} />
);

export const ButtonConnected = ({ text = "My Wallet", onClick = noop }) => (
  <Button text={text} onClick={onClick} />
);

export const ButtonDisconnected = ({
  text = "Connect Wallet",
  onClick = noop,
}) => <Button text={text} onClick={onClick} />;

export const ButtonConnecting = ({
  text = "Connecting ...",
  loading = true,
}) => <Button text={text} />;

export const ButtonRejected = ({ text = "Reconnect", onClick = noop }) => (
  <Button text={text} onClick={onClick} />
);

export const ButtonError = ({ text = "Change Wallet", onClick = noop }) => (
  <Button text={text} onClick={onClick} />
);

export const ButtonNotExist = ({ text = "Install Wallet", onClick = noop }) => (
  <Button text={text} onClick={onClick} />
);
