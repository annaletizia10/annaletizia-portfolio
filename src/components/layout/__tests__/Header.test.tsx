import { render, screen } from "@testing-library/react";

import { Header } from "../Header";

describe("Header", () => {
  it("renders site name and navigation links", () => {
    render(<Header />);

    expect(
      screen.getByRole("link", { name: "Anna Yarossi" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Main" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "#about",
    );
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "#contact",
    );
  });
});
