type Props = {
  message: string;
};

export default function App({ message }: Props) {
  return <div>{message}</div>;
}
