const btnPrev = document.querySelector(".progress-prev");
const btnNext = document.querySelector(".progress-next");
const progressItems = document.querySelectorAll(".progress-item");
const progressBar = document.querySelector(".progress-bar");
console.log(progressBar);
let currentActive = 0;

update();

btnNext.addEventListener("click", function () {
  currentActive++;
  update();
});
btnPrev.addEventListener("click", function () {
  currentActive--;
  update();
});

function update() {
  //remove class active before
  progressItems.forEach((progressItem) => {
    progressItem.classList.remove("active");
  });
  //add class active new
  for (let i = 0; i < progressItems.length; i++) {
    if (i <= currentActive) {
      progressItems[i].classList.add("active");
    }
  }
  btnNext.disabled = false;
  btnPrev.disabled = false;
  progressBar.style.width = `${(currentActive / (progressItems.length - 1)) * 100}%`;
  //handle button next, prev when currentActive larger or smaller progressItems length
  if (currentActive == progressItems.length - 1) {
    btnNext.disabled = true;
  }
  if (currentActive == 0) {
    btnPrev.disabled = true;
  }
}
