import { sumLength } from "./task2";

describe("sumLength", () => {
  it("returns sum of the symbols of two strings", () => {
    expect(sumLength("Hello", "World")).toBe(10);
  });
});
