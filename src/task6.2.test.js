import { isWord } from "./task6.2";

describe("isWord", () => {
  it("returns true for 'Hello World'", () => {
    expect(isWord("Hello World")).toBeTruthy();
  });
  it("returns false for 'Hello'", () => {
    expect(isWord("Hello")).toBeFalsy();
  });
});
