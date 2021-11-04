import { getMin } from "./task8.2";

describe("getMin", () => {
  it("returns mins that have passed since the beginning of the day", () => {
    const date = new Date("2021-11-04T23:45:58");
    expect(getMin(date)).toBe(1425);
  });
});
