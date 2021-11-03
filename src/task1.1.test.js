import { sumAndProd } from "./task1.1";

describe("sum & prod", () => {
  it("returns 13 for 5 + 8 and 40 for 5 * 8", () => {
    expect(sumAndProd(5, 8)).toBe("13,40");
  });
});
