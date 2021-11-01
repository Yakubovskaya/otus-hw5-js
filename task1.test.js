import { sum, prod } from "./task1";

describe("sum & prod", () => {
  it("returns 13 for 5 + 8", () => {
    expect(sum).toBe(13);
  });
  it("returns 40 for 5 * 8", () => {
    expect(prod).toBe(40);
  });
});
