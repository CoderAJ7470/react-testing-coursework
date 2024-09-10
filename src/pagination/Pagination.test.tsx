import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, it } from "vitest";
import Pagination from "./Pagination";
// import * as utilFunctions from "../utils";

vi.mock("../utils", () => {
 return {
  range: () => [1, 2, 3, 4, 5],
 };
});

describe("The Pagination component", () => {
 it("should render the correct pagination", () => {
  render(<Pagination total={50} limit={10} currentPage={1} />);

  const pageContainers = screen.getAllByTestId("page-container");

  expect(pageContainers).toHaveLength(5);
  expect(pageContainers[0]).toHaveTextContent("1");
 });

 it("should render the selected page", async () => {
  const user = userEvent.setup();
  const testFunction = vi.fn();
  render(<Pagination total={50} limit={10} currentPage={1} selectPage={testFunction} />);

  const pageContainers = screen.getAllByTestId("page-container");
  await user.click(pageContainers[0]);

  expect(testFunction).toHaveBeenCalledWith(1);
 });

 // Not really necessary to use a spy for this particular cmponent since the mock above the describe is sufficient to test the higher-level operations of the component

 // it("spies on the utils functions", () => {
 //  vi.spyOn(utilFunctions, "range");
 //  render(<Pagination total={50} limit={10} currentPage={1} />);

 //  expect(utilFunctions.range).toHaveBeenCalledWith(1, 6);
 // });
});
