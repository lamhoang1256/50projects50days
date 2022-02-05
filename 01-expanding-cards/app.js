window.addEventListener("load", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      removeCardActive();
      card.classList.add("active");
    });
  });

  function removeCardActive() {
    cards.forEach((card) => {
      card.classList.remove("active");
    });
  }
});
