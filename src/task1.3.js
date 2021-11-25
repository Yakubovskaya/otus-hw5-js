export function sumOfNum() {
  const num = prompt("Enter the number: ");
  const sum = num
    .split("")
    .map((el) => Number(el))
    .reduce((pre, curr) => pre + curr);
  return sum;
}
