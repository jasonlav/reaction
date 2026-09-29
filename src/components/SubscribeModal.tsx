import Modal from "./Modal";
import type { Props as ModalProps } from "./Modal";
import { subscribe } from "../api";

type Props = Pick<ModalProps, "isOpen" | "onClose" | "className">;

export default function SubscribeModal({ isOpen, onClose, className }: Props) {
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    subscribe(email);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={className}>
      <h2>Subscribe</h2>
      <p>Get weekly updates and exclusive content.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Email*
          <input type="email" name="email" required />
        </label>
        <button type="submit">Subscribe</button>
      </form>
    </Modal>
  );
}
