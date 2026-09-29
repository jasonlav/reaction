import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  test("renders features", () => {
    const props = {
      legalCopy: "© 2024 Test Company",
      legalLinks: [
        { title: "Privacy Policy", url: "/privacy" },
        { title: "Terms of Service", url: "/terms" },
      ],
    };

    render(<Footer {...props} />);

    expect(screen.getByText(props.legalCopy)).toBeInTheDocument();

    props.legalLinks.forEach((link) => {
      const element = screen.getByText(link.title);
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute("href", link.url);
    });
  });
});
