export function getArithm() {
  const num = +prompt("Введите любое число: ");
  let count = 0;
  let sum = 0;
  for (let i = 1; i <= num; i += 1) {
    if (i % 2 !== 0) {
      sum += i;
      count += 1;
    }
  }
  return sum / count;
}
