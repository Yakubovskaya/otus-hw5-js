import { pow } from "./task6.3";

describe("pow", () => {
  it("returns 125 for 5 ** 3", () => {
    expect(pow(5, 3)).toBe(125);
  });
});
