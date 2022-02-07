const textarea = document.querySelector(".random-textarea");
const tagsEl = document.querySelector(".tags");

textarea.addEventListener("keyup", function (e) {
  let value = e.target.value;
  createTag(value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

function createTag(string) {
  let tags = string.split(" ");
  console.log(tags);
  tags = tags.filter((tag) => tag.trim() !== "");
  tags = tags.map((tag) => tag.trim());
  console.log(tags);

  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("div");
    tagEl.classList.add("tag");
    tagEl.innerHTML = tag;
    tagsEl.append(tagEl);
  });
}

function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
