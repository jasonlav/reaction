import { render, screen, waitFor } from "@testing-library/react";
import Modal from "./Modal";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("Modal component", () => {
  test("renders hidden when closed", () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        Test Content
      </Modal>,
    );
    const dialog = screen.queryByRole("dialog");
    expect(dialog).not.toBeInTheDocument();
  });

  test("renders visible when open", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        Test Content
      </Modal>,
    );
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
  });

  test("renders children correctly", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        Test Content
      </Modal>,
    );
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveTextContent("Test Content");
  });

  test("renders with custom className", () => {
    render(
      <Modal isOpen={true} onClose={() => {}} className="custom-class">
        Test Content
      </Modal>,
    );
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveClass("custom-class");
  });

  test("closes when close button is clicked", async () => {
    const onClose = vi.fn();

    render(
      <Modal isOpen={true} onClose={onClose}>
        Test Content
      </Modal>,
    );

    const closeButton = screen.getByRole("button", { name: /close/i });
    await userEvent.click(closeButton);
    await waitFor(() => {
      expect(onClose).toHaveBeenCalled();
    });
  });
});
