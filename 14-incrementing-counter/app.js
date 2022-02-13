const counterNums = document.querySelectorAll(".counter-num");
window.addEventListener("load", function () {
  counterNums.forEach((counterNum) => {
    counterNum.innerHTML = "0";

    function updateCounter() {
      let num = +counterNum.innerHTML;
      const dataNum = counterNum.dataset.num;
      const step = Math.ceil(dataNum / 100);
      if (num < dataNum) {
        num += step;
        counterNum.innerHTML = num;
        setTimeout(updateCounter, 20);
      }
    }

    updateCounter();
  });
});
