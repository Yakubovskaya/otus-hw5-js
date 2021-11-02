export function sumOfNum() {
  const num = prompt("Enter the number: ");
  const sum = num
    .split("")
    .map((el) => Number(el))
    .reduce((curr, pre) => curr + pre);
  return sum;
}
