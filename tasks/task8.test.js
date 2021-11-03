import { getMultiTable } from "./task8";

describe("getMultiTable", () => {
  it("get multiplication table by 7", () => {
    expect(getMultiTable()).toBe(
      "7*1=7 7*2=14 7*3=21 7*4=28 7*5=35 7*6=42 7*7=49 7*8=56 7*9=63 "
    );
  });
});
