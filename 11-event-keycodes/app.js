const eventKey = document.querySelector(".event-key");
const eventKeycode = document.querySelector(".event-keyCode");
const eventCode = document.querySelector(".event-code");

window.addEventListener("keyup", function (e) {
  eventKey.textContent = e.key;
  eventKeycode.textContent = e.keyCode;
  eventCode.textContent = e.code;
});
