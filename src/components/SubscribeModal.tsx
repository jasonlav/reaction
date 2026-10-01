import Modal from "./Modal";
import type { Props as ModalProps } from "./Modal";
import { subscribe } from "../api";

type Props = Pick<ModalProps, "isOpen" | "onClose" | "className">;
import { useState } from "react";
export default function SubscribeModal({ isOpen, onClose, className }: Props) {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    setError(null);

    try {
      await subscribe(email);
      setSuccess(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={className}>
      <h2>Subscribe</h2>
      <p>Get weekly updates and exclusive content.</p>
      {error && <p>{error}</p>}
      {success && <p>Successfully subscribed!</p>}
      {!success && (
        <form onSubmit={handleSubmit}>
          <label>
            Email*
            <input type="email" name="email" required />
          </label>
          <button type="submit">Subscribe</button>
        </form>
      )}
    </Modal>
  );
}
