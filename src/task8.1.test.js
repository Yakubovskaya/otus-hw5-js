import { getDayWeek } from "./task8.1";

describe("getDayWeek", () => {
  it("returns 'Thursday' for '04.11.2021'", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "04.11.2021");
    expect(getDayWeek()).toBe("Thursday");
  });
  it("returns 'Not Valid Date' for '6584937'", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "6584937");
    expect(getDayWeek()).toBe("Not Valid Date");
  });
  it("returns 'Not Valid Date' for 'shbe834th'", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "shbe834th");
    expect(getDayWeek()).toBe("Not Valid Date");
  });
});
