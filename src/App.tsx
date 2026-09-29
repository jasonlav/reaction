import Features from "./components/Features";

type Props = {
  message: string;
};

export default function App({ message }: Props) {
  return (
    <>
      <h1>{message}</h1>
      <section>
        <h2>Features</h2>
        <Features
          features={[
            {
              title: "Sample Feature 1",
              description:
                "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            },
            {
              title: "Sample Feature 2",
              description:
                "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
            },
            {
              title: "Sample Feature 3",
              description:
                "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
            },
          ]}
        />
      </section>
    </>
  );
}
