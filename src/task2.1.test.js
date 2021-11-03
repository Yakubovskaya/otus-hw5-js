import { largestVal } from "./task2.1";

describe("largestVal", () => {
  it("returns largest value if a = 3 and b = 8", () => {
    expect(largestVal(3, 8)).toBe(8);
  });
  it("returns largest value if a = 20 and b = 8", () => {
    expect(largestVal(20, 8)).toBe(20);
  });
});
