import { useRef, useEffect } from "react";
import Styles from "./Modal.module.css";

export type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Modal({ isOpen, onClose, children, className }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const currentDialog = dialog.current;
    currentDialog?.addEventListener("close", onClose);

    return () => {
      currentDialog?.removeEventListener("close", onClose);
    };
  }, [onClose]);

  return (
    <>
      <dialog ref={dialog} className={`${Styles.modal} ${className ?? ""}`}>
        {children}
        <button
          className={Styles.close}
          onClick={() => dialog.current?.close()}
        >
          close
        </button>
      </dialog>
    </>
  );
}
