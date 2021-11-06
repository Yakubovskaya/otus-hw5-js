export function getRoots() {
  let coeff = prompt("Введите коэффициенты a, b, c через запятую: ");
  const regExp = /^-?[1-9],\s?-?\d,\s?-?\d/;
  if (regExp.test(coeff)) {
    coeff = coeff.split(",").map(parseFloat);
    const [a, b, c] = coeff;
    const disсr = b ** 2 - 4 * a * c;
    const x1 = (-b + Math.sqrt(disсr)) / (2 * a);
    const x2 = (-b - Math.sqrt(disсr)) / (2 * a);
    if (disсr < 0) {
      return "Квадратное уравнение не имеет корней";
    }
    if (disсr === 0) {
      return `Квадратное уравнение имеет один корень: x = ${x1}`;
    }
    return `Квадратное уравнение имеет два корня: x1 = ${x1}, x2 = ${x2}`;
  }
  return "Not Valid";
}
