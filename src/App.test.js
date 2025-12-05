import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the correct header", () => {
  render(<App />);
  const headerElement = screen.getByText(
    /Alex Silkin \* Full Stack Developer \* QA Tester/i,
  );
  expect(headerElement).toBeInTheDocument();
});
