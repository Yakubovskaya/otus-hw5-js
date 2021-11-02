import { getMonth } from "./task5";

describe("getMonth", () => {
  it("returns 'May' if User enter 5", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "5");
    expect(getMonth()).toBe("May");
  });
  it("returns 'Not valid' if User enter 13", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "13");
    expect(getMonth()).toBe("Not valid");
  });
});
