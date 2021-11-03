import { sumOfNum } from "./task1.3";

describe("sum of the numbers", () => {
  it("returns sum of the numbers entered by user", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "123");
    expect(sumOfNum()).toBe(6);
  });
});
