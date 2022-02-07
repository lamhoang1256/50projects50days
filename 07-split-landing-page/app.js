const container = document.querySelector(".container");
const splitLeft = document.querySelector(".split-left");
const splitRight = document.querySelector(".split-right");

splitLeft.addEventListener("mouseenter", function () {
  container.classList.remove("hover-right");
  container.classList.add("hover-left");
});
splitRight.addEventListener("mouseenter", function () {
  container.classList.remove("hover-left");
  container.classList.add("hover-right");
});
