export function isRightTriangle(a, b, c) {
  const arr = [a, b, c].sort((m, n) => m - n).map((el) => el ** 2);
  const [firstCathSqrd, secondCathSqrd, hypotSqrd] = arr;
  return hypotSqrd === firstCathSqrd + secondCathSqrd
    ? "Этот треугольник прямоугольный"
    : "Этот треугольник не прямоугольный";
}
