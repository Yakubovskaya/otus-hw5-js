import { getRoots } from "./task9.3";

describe("getRoots", () => {
  it("returns 'Квадратное уравнение не имеет корней' for '1, -5, 9'", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "1, -5, 9");
    expect(getRoots()).toBe("Квадратное уравнение не имеет корней");
  });
  it("returns x = 2 for '1, -4, 4'", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "1, -4, 4");
    expect(getRoots()).toBe("Квадратное уравнение имеет один корень: x = 2");
  });
  it("returns x1 = 2, x2 = -0.25 for '4,-7,-2'(without spaces)", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "4,-7,-2");
    expect(getRoots()).toBe(
      "Квадратное уравнение имеет два корня: x1 = 2, x2 = -0.25"
    );
  });
  it("returns 'Not Valid' for '567'", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "567");
    expect(getRoots()).toBe("Not Valid");
  });
  it("returns 'Not Valid' for '2 9 0'", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "2 9 0");
    expect(getRoots()).toBe("Not Valid");
  });
  it("returns 'Not Valid' for '0, 2, 7'", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "0, 2, 7");
    expect(getRoots()).toBe("Not Valid");
  });
});
