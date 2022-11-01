import { render, screen } from "@testing-library/react";
import Index from "../../pages/index";

describe("Index", () => {
  it("renders without crashing", () => {
    render(<Index />);
    expect(
      screen.getByRole("heading", { name: "Welcome to my page" })
    ).toBeInTheDocument();
  });
});