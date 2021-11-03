import { getDiff } from "./task6.1";

describe("diff", () => {
  it("returns diff between 10 and 23", () => {
    expect(getDiff(10, 15)).toBe(5);
  });
  it("returns diff between 136 and 36", () => {
    expect(getDiff(136, 36)).toBe(100);
  });
});
