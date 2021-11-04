export function getMin(date) {
  const hours = date.getHours();
  const min = date.getMinutes();
  return hours * 60 + min;
}
