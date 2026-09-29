import { render, screen } from "@testing-library/react";
import Features from "./Features";

describe("Features component", () => {
  test("renders features", () => {
    const props = {
      features: [
        {
          title: "Feature 1",
          description: "This is a test feature.",
        },
        {
          title: "Feature 2",
          description: "This is a test feature.",
        },
        {
          title: "Feature 3",
          description: "This is a test feature.",
        },
      ],
    };

    render(<Features {...props} />);

    expect(screen.getAllByRole("article")).toHaveLength(3);
  });

  test("renders no features message", () => {
    const props = {
      features: [],
    };

    render(<Features {...props} />);

    expect(screen.getByText(/No features/i)).toBeInTheDocument();
  });
});
