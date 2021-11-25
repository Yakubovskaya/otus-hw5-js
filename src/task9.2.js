export function circleMeasures() {
  const radius = +prompt("Введите число R: ");
  const circleLength = 2 * Math.PI * radius;
  const circleSquare = Math.PI * radius ** 2;
  if (Number.isNaN(radius) || radius <= 0) {
    return "Not Valid";
  }
  return [circleLength.toFixed(1), circleSquare.toFixed(1)];
}
