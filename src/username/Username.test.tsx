import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Username from "./Username";
import userEvent from "@testing-library/user-event";

describe("The username component", () => {
 it("renders the default empty string for username", () => {
  render(<Username />);

  const userName = screen.getByTestId("username");

  expect(userName).toHaveTextContent("");
 });

 it("renders a username when the button is clicked", async () => {
  const user = userEvent.setup();
  render(<Username />);

  const button = screen.getByTestId("button");
  const userName = screen.getByTestId("username");

  await user.click(button);

  expect(userName).toHaveTextContent("bar");
 });

 it("renders the username when the user types it in the input", async () => {
  const user = userEvent.setup();
  render(<Username />);

  const input = screen.getByTestId("usernameInput");
  const userName = screen.getByTestId("username");

  await user.type(input, "AJoshi");

  expect(userName).toHaveTextContent("AJoshi");
 });
});
