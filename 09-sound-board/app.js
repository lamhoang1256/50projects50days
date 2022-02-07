const btns = document.querySelectorAll(".sound-item");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const label = btn.textContent;
    const audioSelect = document.querySelector(`[data-sound=${label}]`);
    stopSong();
    audioSelect.play();
  });
});

function stopSong() {
  btns.forEach((btn) => {
    const label = btn.textContent;
    let audio = document.querySelector(`[data-sound=${label}]`);
    audio.pause();
    audio.currentTime = 0;
  });
}
