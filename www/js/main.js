const header = document.getElementById("starfield");
const height = header.clientHeight;
const width = header.clientWidth;

const numberOfStars = 0;

const starTypes = ["star-small", "star-medium", "star-large"];

for (let i = 0; i < numberOfStars; i++) {
  const div = document.createElement("span");
  div.setAttribute(
    "class",
    starTypes[randomIntFromInterval(0, starTypes.length)]
  );
  div.setAttribute("id", i);
  div.style.transform = `translate3d(${randomIntFromInterval(
    0,
    width
  )}px, ${randomIntFromInterval(0, height)}px, 0)`;
  header.appendChild(div);
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
