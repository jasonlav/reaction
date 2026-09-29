type Props = {
  message: string;
};

export default function App({ message }: Props) {
  return <h1>{message}</h1>;
}
