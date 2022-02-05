const btnOpen = document.querySelector(".circle-open ion-icon");
const btnClose = document.querySelector(".circle-close ion-icon");
const wrapper = document.querySelector(".wrapper");

btnOpen.addEventListener("click", function () {
  wrapper.classList.add("show");
});
btnClose.addEventListener("click", function () {
  wrapper.classList.remove("show");
});
