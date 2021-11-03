import { getSum } from "./task7";

describe("Sum of numbers from a to b", () => {
  it("returns 3825 for 50 & 100", () => {
    expect(getSum()).toBe(3825);
  });
});
