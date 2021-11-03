import { getArithm } from "./task3.3";

describe("getArithm", () => {
  it("returns the arithmetic mean of odd numbers from 1 to 265", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "265");
    expect(getArithm()).toBe(133);
  });
});
