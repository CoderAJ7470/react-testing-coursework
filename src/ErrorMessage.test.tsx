import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ErrorMessage from "./ErrorMessage";

describe("The ErrorMessage component", () => {
 it("displays the default error message", () => {
  render(<ErrorMessage />);

  expect(screen.getByTestId("error-message")).toHaveTextContent("Something went wrong");
 });

 it("displays a custom error message", () => {
  render(<ErrorMessage message='Could not retrieve the pizza' />);

  expect(screen.getByTestId("error-message")).toHaveTextContent("Could not retrieve the pizza");
 });
});
