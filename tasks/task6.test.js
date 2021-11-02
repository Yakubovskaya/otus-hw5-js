import { circleInSquare } from "./task6";

describe("circleInSquare", () => {
  it("returns true for 34 & 50", () => {
    expect(circleInSquare(34, 50)).toBe("Круг поместится в квадрате");
  });
  it("returns false for 38 & 25", () => {
    expect(circleInSquare(38, 25)).toBe("Круг не поместится в квадрате");
  });
});
