export function createParagraphs(el) {
  el.innerHTML = `
      <input>
      <button hidden style="width: 70px; height: 24px;">Click me</button>
      <div class="parent">
          <p class="text">Hello</p>
          <p class="text">my</p>
          <p class="text">world</p>
      </div>
      `;
  const input = el.querySelector("input");
  const button = el.querySelector("button");

  input.addEventListener("input", () => {
    button.hidden = !input.value;
  });
  button.addEventListener("click", buttonClick);
}

function buttonClick() {
  addParagraph();
  clearInput();
  deleteParagraph();
}

function addParagraph() {
  const input = document.querySelector("input");
  const parent = document.querySelector(".parent");
  const newParagraph = document.createElement("p");
  newParagraph.innerHTML = input.value;
  parent.append(newParagraph);
}
function clearInput() {
  const input = document.querySelector("input");
  const button = document.querySelector("button");
  input.value = "";
  button.hidden = true;
}
function deleteParagraph() {
  const paragraphs = document.querySelectorAll("p");
  if (paragraphs.length > 5) {
    paragraphs[0].remove();
  }
}
