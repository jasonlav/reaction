import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Button component", () => {
  test("renders label", () => {
    const props = {
      label: "Click me",
      onClick: vi.fn(),
    };

    render(<Button {...props} />);

    expect(
      screen.getByRole("button", { name: /Click me/i }),
    ).toBeInTheDocument();
  });

  test("handles click", async () => {
    const props = {
      label: "Click me",
      onClick: vi.fn(),
    };

    render(<Button {...props} />);

    await userEvent.click(screen.getByRole("button", { name: /Click me/i }));
    expect(props.onClick).toHaveBeenCalled();
  });

  test("handles disabled state", async () => {
    const props = {
      label: "Click me",
      onClick: vi.fn(),
      disabled: true,
    };

    render(<Button {...props} />);

    const button = screen.getByRole("button", { name: /Click me/i });
    expect(button).toBeDisabled();
    await userEvent.click(button);
    expect(props.onClick).not.toHaveBeenCalled();
  });

  test("renders with classname", () => {
    const props = {
      label: "Click me",
      onClick: vi.fn(),
      className: "custom-class",
    };

    render(<Button {...props} />);

    const button = screen.getByRole("button", { name: /Click me/i });
    expect(button).toHaveClass("custom-class");
  });
});
