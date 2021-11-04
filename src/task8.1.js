export function getDayWeek() {
  const input = prompt("Введите дату в формате: ДД.ММ.ГГГГ");
  const [day, month, year] = input.split(".");
  const inputDate = new Date(`${year}-${month}-${day}`);
  const getDay = inputDate.getDay();
  const DayWeekArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednes­day",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  for (let i = 0; i < DayWeekArr.length; i += 1) {
    if (getDay === i) {
      return DayWeekArr[i];
    }
  }
  return "Not Valid Date";
}
