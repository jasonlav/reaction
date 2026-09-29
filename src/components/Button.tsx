type Props = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

export default function Button({ label, onClick, disabled, className }: Props) {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {label}
    </button>
  );
}
