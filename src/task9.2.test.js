import { circleMeasures } from "./task9.2";

describe("circleMeasures", () => {
  it("returns [31.4, 78.5] for radius = 5", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "5");
    expect(circleMeasures()).toStrictEqual(["31.4", "78.5"]);
  });
  it("returns 'Not Valid' for radius = 'hello'", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "Hello");
    expect(circleMeasures()).toBe("Not Valid");
  });
  it("returns 'Not Valid' for radius = 0", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "0");
    expect(circleMeasures()).toBe("Not Valid");
  });
  it("returns 'Not Valid' for radius = -14", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "-14");
    expect(circleMeasures()).toBe("Not Valid");
  });
});
