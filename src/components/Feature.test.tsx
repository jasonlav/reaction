import { render, screen } from "@testing-library/react";
import Feature from "./Feature";

describe("Feature component", () => {
  test("renders title and description", () => {
    const props = {
      title: "Test Feature",
      description: "This is a test feature.",
    };

    render(<Feature {...props} />);

    expect(
      screen.getByRole("heading", {
        name: /Test Feature/i,
        level: 3,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: props.title, level: 3 }),
    ).toBeInTheDocument();

    expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  test("renders title, description, and tags", () => {
    const props = {
      title: "Test Feature",
      description: "This is a test feature.",
      tags: ["tag1", "tag2"],
    };

    render(<Feature {...props} />);

    expect(
      screen.getByRole("heading", {
        name: /Test Feature/i,
        level: 3,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: props.title, level: 3 }),
    ).toBeInTheDocument();

    props.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });

    expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  test("renders with className", () => {
    const props = {
      title: "Test Feature",
      description: "This is a test feature.",
      className: "test-class",
    };

    render(<Feature {...props} />);

    const articleElement = screen.getByRole("article");
    expect(articleElement).toHaveClass("test-class");
  });
});
