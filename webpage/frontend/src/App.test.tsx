import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App counter", () => {
  it("should render 0 by default", () => {
    render(<App />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("should render 1 when clicked", async () => {
    render(<App />);
    expect(screen.getByText("0")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
