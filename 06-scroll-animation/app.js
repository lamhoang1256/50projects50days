const imgs = document.querySelectorAll(".box-img");
checkBoxes();
window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  imgs.forEach((img) => {
    const imgTop = img.getBoundingClientRect().top;
    if (triggerBottom > imgTop) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
}
