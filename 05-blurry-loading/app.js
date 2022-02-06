const container = document.querySelector(".container");
const bg = document.querySelector(".blurry-bg");
const loadingText = document.querySelector(".loading-text");

let load = 0;
const int = setInterval(blurry, 40);

function blurry() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadingText.textContent = `${load}%`;
  loadingText.style.opacity = (100 - load) / 100;
  bg.style.filter = `blur(${100 - load}px)`;
}
