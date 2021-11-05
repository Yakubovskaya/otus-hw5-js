import { isRightTriangle } from "./task9.1";

describe("isRightTriangle", () => {
  it("returns 'Этот треугольник прямоугольный'", () => {
    expect(isRightTriangle(3, 4, 5)).toBe("Этот треугольник прямоугольный");
  });
  it("returns 'Этот треугольник не прямоугольный'' ", () => {
    expect(isRightTriangle(2, 6, 10)).toBe("Этот треугольник не прямоугольный");
  });
});
