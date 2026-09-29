import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders message", () => {
    render(<App message="Hello, world!" />);
    const linkElement = screen.getByRole("heading", {
      name: /Hello, world!/i,
      level: 1,
    });
    expect(linkElement).toBeInTheDocument();
  });

  test("renders footer legal copy and links", () => {
    render(<App message="Hello, world!" />);

    const date = new Date();

    const legalCopyElement = screen.getByText(
      `© ${date.getFullYear()} Test Company`,
    );
    expect(legalCopyElement).toBeInTheDocument();

    const privacyLink = screen.getByText(/Privacy Policy/i);
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute("href", "/privacy");

    const termsLink = screen.getByText(/Terms of Service/i);
    expect(termsLink).toBeInTheDocument();
    expect(termsLink).toHaveAttribute("href", "/terms");
  });
});