const formLabels = document.querySelectorAll(".form-label");

formLabels.forEach((formLabel) => {
  formLabel.innerHTML = formLabel.innerText
    .split("")
    .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
    .join("");
});
