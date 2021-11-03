export function getMultiTable() {
  const num = 7;
  let str = "";
  for (let i = 1; i <= 9; i += 1) {
    const res = num * i;
    str += `${num}*${i}=${res} `;
  }
  return str;
}
