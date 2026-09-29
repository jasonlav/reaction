import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal component", () => {
  test("renders hidden when closed", () => {
    render(<Modal isOpen={false}>Test Content</Modal>);
    const dialog = screen.queryByRole("dialog");
    expect(dialog).not.toBeInTheDocument();
  });

  test("renders visible when open", () => {
    render(<Modal isOpen={true}>Test Content</Modal>);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
  });

  test("renders children correctly", () => {
    render(<Modal isOpen={true}>Test Content</Modal>);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveTextContent("Test Content");
  });

  test("renders with custom className", () => {
    render(
      <Modal isOpen={true} className="custom-class">
        Test Content
      </Modal>,
    );
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveClass("custom-class");
  });
});
