export function isRightTriangle(firstCath, secondCath, hypot) {
  const arr = [firstCath, secondCath, hypot].map((el) => el ** 2);
  const [firstCathSqrd, secondCathSqrd, hypotSqrd] = arr;
  return hypotSqrd === firstCathSqrd + secondCathSqrd
    ? "Этот треугольник прямоугольный"
    : "Этот треугольник не прямоугольный";
}
