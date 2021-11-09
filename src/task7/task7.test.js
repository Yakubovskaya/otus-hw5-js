import { createParagraphs } from "./task7";

describe("createParagraphs", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
    createParagraphs(el);
  });
  it("create basic markup", () => {
    expect(el.querySelector("input")).toBeTruthy();
    expect(el.querySelector("button")).toBeTruthy();
    expect(el.querySelector(".parent")).toBeTruthy();
    expect(el.querySelector(".parent").childElementCount).toEqual(3);
  });
  it("button is hidden when input is empty", () => {
    const input = el.querySelector("input");
    const button = el.querySelector("button");
    input.value = "";
    expect(button.hidden).toBeTruthy();
  });
  it("button appears after entering the input", () => {
    const button = el.querySelector("button");
    const input = el.querySelector("input");
    input.value = "123";
    expect(button.hidden).toBeFalsy();
  });
  it("paragraph is added when button are clicked", () => {
    const input = el.querySelector("input");
    const button = el.querySelector("button");
    input.value = "1234";
    button.click();
    expect(el.querySelector(".parent").childElementCount).toEqual(4);
  });
});
