import { isValidData, isValidEmail, isValidPhone } from "./task10";

describe("isValidData", () => {
  [
    ["31/09/2020", true],
    ["12.05.1999", true],
    ["01.02.70", false],
    ["05.07", false],
  ].forEach(([str, expectedResult]) => {
    it("is it valid data?", () => {
      expect(isValidData(str)).toBe(expectedResult);
    });
  });
});

describe("isValidEmail", () => {
  [
    ["jhdf12_h@gmail.com", true],
    ["feA5dsur111@yandex.ru", true],
    ["verv32", false],
    ["fe293_38@mail.r", false],
    ["fe293_38.mail.ru", false],
    ["34fi3p49_432JNKI@gmail", false],
  ].forEach(([str, expectedResult]) => {
    it("is it valid email?", () => {
      expect(isValidEmail(str)).toBe(expectedResult);
    });
  });
});

describe("isValidPhone", () => {
  [
    ["+7 921 675-49-49", true],
    ["+7 (921) 675-49-49", false],
    ["8 921 749-93-03", false],
    ["+79317484899", false],
    ["rrufrh", false],
  ].forEach(([str, expectedResult]) => {
    it("is it valid phone?", () => {
      expect(isValidPhone(str)).toBe(expectedResult);
    });
  });
});
