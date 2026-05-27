import { render, screen } from "@testing-library/react";

import { Hero } from "../Hero";

describe("Hero", () => {
  it("renders Anna Yarossi and the tagline", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { level: 1, name: /anna yarossi/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Self-taught builder. Visual thinker."),
    ).toBeInTheDocument();
  });

  it("does not render a profile photo", () => {
    render(<Hero />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
