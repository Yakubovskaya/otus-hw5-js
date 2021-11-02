export function getMonth() {
  const number = +prompt("Enter the number: ");
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (number <= 12) {
    return month[number - 1];
  }
  return "Not valid";
}
