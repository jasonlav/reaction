import { render, screen } from "@testing-library/react";
import SubscribeModal from "./SubscribeModal";
import { beforeAll, beforeEach, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { subscribe } from "../api";

beforeAll(() => {
  HTMLDialogElement.prototype.show = function () {
    this.setAttribute("open", "");
  };

  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };

  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
  };
});

beforeEach(() => {
  vi.clearAllMocks();
});

vi.mock("../api", () => ({
  subscribe: vi.fn(),
}));

describe("SubscribeModal component", () => {
  test("renders form", () => {
    render(<SubscribeModal isOpen={true} />);
    const emailLabel = screen.getByLabelText(/email/i);
    expect(emailLabel).toBeInTheDocument();

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    expect(emailInput).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: /subscribe/i });
    expect(submitButton).toBeInTheDocument();
  });

  test("calls subscribe API on form submission", async () => {
    const { getByRole } = render(<SubscribeModal isOpen={true} />);
    const emailInput = getByRole("textbox", { name: /email/i });
    const submitButton = getByRole("button", { name: /subscribe/i });

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.click(submitButton);

    expect(subscribe).toHaveBeenCalledWith("test@example.com");
  });
});
