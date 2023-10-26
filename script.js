const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const bodyElement = document.body;

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  bodyElement.classList.toggle("act");
  input.focus();
});
