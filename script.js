// These are the constants containing all important HTML elements for further modification...
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const bodyElement = document.body;


// This is the event listener for that search button
btn.addEventListener("click", () => {
  search.classList.toggle("active");
  bodyElement.classList.toggle("act");
  input.focus();
});
