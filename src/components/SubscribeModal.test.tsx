import { render, screen } from "@testing-library/react";
import SubscribeModal from "./SubscribeModal";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { subscribe } from "../api";

vi.mock("../api", () => ({
  subscribe: vi.fn(),
}));

describe("SubscribeModal component", () => {
  test("renders form", () => {
    render(<SubscribeModal isOpen={true} onClose={() => {}} />);
    const emailLabel = screen.getByLabelText(/email/i);
    expect(emailLabel).toBeInTheDocument();

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    expect(emailInput).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: /subscribe/i });
    expect(submitButton).toBeInTheDocument();
  });

  test("calls subscribe API on form submission", async () => {
    const { getByRole } = render(
      <SubscribeModal isOpen={true} onClose={() => {}} />,
    );
    const emailInput = getByRole("textbox", { name: /email/i });
    const submitButton = getByRole("button", { name: /subscribe/i });

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.click(submitButton);

    expect(subscribe).toHaveBeenCalledWith("test@example.com");
  });
});
