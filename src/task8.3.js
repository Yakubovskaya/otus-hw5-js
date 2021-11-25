export function identifyYoungUser(firstUserBirth, secondUserBirth) {
  const [firstDay, firstMonth, firstYear] = firstUserBirth.split(".");
  const [secondDay, secondMonth, secondYear] = secondUserBirth.split(".");
  const firstDate = new Date(`${firstYear}-${firstMonth}-${firstDay}`);
  const secondDate = new Date(`${secondYear}-${secondMonth}-${secondDay}`);

  return firstDate > secondDate
    ? "The First User is Younger"
    : "The Second User is Younger";
}
