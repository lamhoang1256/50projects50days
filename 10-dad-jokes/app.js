const boxContent = document.querySelector(".box-content");
const boxAuthor = document.querySelector(".box-author");
const boxBtn = document.querySelector(".box-btn");

async function getJoke() {
  try {
    const result = await axios.get("https://api.quotable.io/random");
    boxContent.textContent = result.data.content;
    boxAuthor.textContent = result.data.author;
  } catch (err) {
    console.log(err);
  }
}
getJoke();

boxBtn.addEventListener("click", function () {
  getJoke();
});
