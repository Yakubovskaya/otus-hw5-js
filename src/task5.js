export function createArrays() {
  const arr = [25, 44, 65, 27, 97, 4, 7, 3, 86, 54];
  let max = arr[0];
  let min = max;

  const sum = arr.reduce((pre, curr) => pre + curr);
  console.log(sum);

  const newArr = arr.map((el) => el * 2);
  console.log(newArr);

  for (let i = 0; i < arr.length; i += 1) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  console.log(min, max);
}
