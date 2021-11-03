export function getSum() {
  let sum = 0;
  let num = 50;
  while (num <= 100) {
    sum += num;
    num += 1;
  }
  return sum;
}
