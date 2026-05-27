import { render, screen } from "@testing-library/react";

import Home from "../page";

describe("Home page", () => {
  it("renders the hero", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /anna yarossi/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Self-taught builder. Visual thinker."),
    ).toBeInTheDocument();
  });
});
