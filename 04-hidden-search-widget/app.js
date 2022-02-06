const search = document.querySelector(".search");
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

console.log(search, searchInput, searchBtn);

searchBtn.addEventListener("click", function () {
  search.classList.toggle("active");
});
