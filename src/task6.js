export function circleInSquare(circle, square) {
  const SqrtRadius = circle / 3.14;

  if (Math.sqrt(square) >= Math.sqrt(SqrtRadius) * 2) {
    return "Круг поместится в квадрате";
  }
  return "Круг не поместится в квадрате";
}
