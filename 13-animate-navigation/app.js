const navigation = document.querySelector(".navigation");
const btn = document.querySelector(".navigation-btn");

btn.addEventListener("click", function () {
  navigation.classList.toggle("active");
});
