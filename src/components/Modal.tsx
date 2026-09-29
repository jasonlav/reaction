import { useRef, useEffect } from "react";

export type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
};

export default function Modal({ isOpen, children, className }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialog.current?.showModal();
    } else if (dialog.current) {
      dialog.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialog} className={className}>
      {children}
    </dialog>
  );
}
