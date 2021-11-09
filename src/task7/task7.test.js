import { createParagraphs } from "./task7";

describe("createParagraphs", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
    createParagraphs(el);
  });
  afterEach(() => {
    document.querySelector("html").innerHTML = null;
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
    input.dispatchEvent(new Event("input"));
    expect(button.hidden).toBeFalsy();
  });
  it("paragraph is added when button are clicked", () => {
    const input = el.querySelector("input");
    const button = el.querySelector("button");
    input.value = "1234";
    button.click();
    expect(el.querySelector(".parent").childElementCount).toEqual(4);
    expect(el.querySelectorAll("p")[3].textContent).toBe("1234");
  });
  it("input is cleared after adding a paragraph", () => {
    const input = el.querySelector("input");
    const button = el.querySelector("button");
    input.value = "1234";
    button.click();
    expect(input.value).toBe("");
  });
  it("first paragraph is deleted if there are more than five paragraphs", () => {
    const input = el.querySelector("input");
    const button = el.querySelector("button");
    input.value = "1234";
    button.click();
    input.value = "12345";
    button.click();
    input.value = "123456";
    button.click();
    input.value = "1234567";
    button.click();
    expect(el.querySelector(".parent").childElementCount).toEqual(5);
    expect(el.querySelectorAll("p")[4].textContent).toBe("1234567");
  });
});
