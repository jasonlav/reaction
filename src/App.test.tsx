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
});