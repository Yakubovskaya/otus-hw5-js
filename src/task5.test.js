import { createArrays } from "./task5";

describe("createArrays", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
    createArrays();
  });
  it("returns 412 for sum of arr's elements", () => {
    expect(console.log).toHaveBeenCalledWith(412);
  });
  it("returns NewArr - arr's elements (x2)", () => {
    expect(console.log).toHaveBeenCalledWith([
      50, 88, 130, 54, 194, 8, 14, 6, 172, 108,
    ]);
  });
  it("returns min = 3, max = 97 from arr", () => {
    expect(console.log).toHaveBeenCalledWith(3, 97);
  });
});
