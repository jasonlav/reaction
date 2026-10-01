import { render, screen } from "@testing-library/react";
import SubscribeModal from "./SubscribeModal";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("SubscribeModal component", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("renders form", () => {
    render(<SubscribeModal isOpen={true} onClose={() => {}} />);
    const emailLabel = screen.getByLabelText(/email/i);
    expect(emailLabel).toBeInTheDocument();

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    expect(emailInput).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: /subscribe/i });
    expect(submitButton).toBeInTheDocument();
  });

  test("successfully submits", async () => {
    const mockSubscribe = vi
      .spyOn(global, "fetch")
      .mockResolvedValueOnce(new Response(null, { status: 204 }));

    const { getByRole } = render(
      <SubscribeModal isOpen={true} onClose={() => {}} />,
    );
    const emailInput = getByRole("textbox", { name: /email/i });
    const submitButton = getByRole("button", { name: /subscribe/i });

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.click(submitButton);

    expect(mockSubscribe).toHaveBeenCalledWith(
      "/api/subscribe",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ data: { email: "test@example.com" } }),
      }),
    );

    const successMessage = await screen.findByText(/successfully subscribed/i);
    expect(successMessage).toBeInTheDocument();
  });

  test("requires client-side email validation", async () => {
    render(<SubscribeModal isOpen={true} onClose={() => {}} />);
    const submitButton = screen.getByRole("button", { name: /subscribe/i });

    await userEvent.click(submitButton);

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    expect(emailInput).toBeInvalid();
  });

  test("displays default server error message", async () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce(
      new Response(null, { status: 500 }),
    );

    render(<SubscribeModal isOpen={true} onClose={() => {}} />);
    const submitButton = screen.getByRole("button", { name: /subscribe/i });

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    await userEvent.type(emailInput, "test@example.com");
    await userEvent.click(submitButton);

    const errorMessage = await screen.findByText(/failed to subscribe/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays returned server error message", async () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce(
      Response.json(
        { error: "__throw error__" },
        {
          status: 500,
        },
      ),
    );

    render(<SubscribeModal isOpen={true} onClose={() => {}} />);
    const submitButton = screen.getByRole("button", { name: /subscribe/i });

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    await userEvent.type(emailInput, "test@example.com");
    await userEvent.click(submitButton);

    const errorMessage = await screen.findByText(/__throw error__/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
