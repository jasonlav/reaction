import { useState } from "react";
import Button from "./components/Button";
import SubscribeModal from "./components/SubscribeModal";
import Features from "./components/Features";
import Footer from "./components/Footer";

type Props = {
  message: string;
};

const date = new Date();

export default function App({ message }: Props) {
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  return (
    <>
      <main>
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
        <section>
          <h2>Subscribe</h2>
          <SubscribeModal
            isOpen={isSubscribeModalOpen}
            onClose={() => setIsSubscribeModalOpen(false)}
          />
          <Button
            label="Subscribe"
            onClick={() => setIsSubscribeModalOpen(true)}
          />
        </section>
      </main>
      <Footer
        legalCopy={`© ${date.getFullYear()} Test Company`}
        legalLinks={[
          { title: "Privacy Policy", url: "/privacy" },
          { title: "Terms of Service", url: "/terms" },
        ]}
      />
    </>
  );
}
