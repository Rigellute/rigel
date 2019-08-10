const palette = {
  Primary: ["#e6e6dc", "#002635"],
  Black: ["#00384d", "#517f8d"],
  Red: ["#c43060", "#ff5a67"],
  Green: ["#7fc06e", "#9cf087"],
  Yellow: ["#f08e48", "#ffcc1b"],
  Blue: ["#1c8db2", "#7eb2dd"],
  Magenta: ["#c694ff", "#fb94ff"],
  Cyan: ["#00cccc", "#00ffff"],
  White: ["#77929e", "#b7cff9"]
};

const getWindowWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const getWindowHeight = () =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

function createPaletteItems() {
  const paletteContainer = document.getElementById("palette-container");

  const coloursToHide = ["Primary", "Black", "White"];

  const height = 3;
  // Golden ratio
  const phi = (1 + Math.sqrt(5)) / 2;
  const width = height / phi;

  for (const key in palette) {
    if (coloursToHide.includes(key)) {
      continue;
    }
    for (const colour of palette[key]) {
      const colourItem = document.createElement("div");

      const styles = `
        background-color: ${colour};
        height: ${height}rem;
        margin: 0 0.3rem;
        width: ${width}rem;
      `;

      colourItem.setAttribute("style", styles);
      paletteContainer.appendChild(colourItem);
    }
  }
}

/**
 * Creating a large number of stars as individual html elements was slow.
 * Tried creating the stars in a `canvas`, but this looked pixelated.
 * This solution creates the starfield based on a single element using the
 * `box-shadow` trick.
 */
function buildStarField() {
  const width = getWindowWidth();
  const height = getWindowHeight();

  const numberOfStars = Math.floor(width / 3);

  const colours = ["#e6e6dc", "#77929e", "#b7cff9"];

  function buildStars(starElement) {
    const boxShadow = Array(numberOfStars)
      .fill(0)
      .map(() => {
        const x = randomIntFromInterval(0, width) - width / 2;
        const y = randomIntFromInterval(0, height) - height / 2;
        const colour = colours[randomIntFromInterval(0, colours.length - 1)];
        return `${x}px ${y}px ${colour}`;
      })
      .join(", ");

    starElement.style.boxShadow = boxShadow;
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const starfieldSmall = document.getElementById("starfield");
  const starfieldLarge = document.getElementById("starfield-large");

  buildStars(starfieldSmall);
  buildStars(starfieldLarge);
}

let windowWidth = 0;
function onLoad() {
  buildStarField();
  createPaletteItems();
  windowWidth = getWindowWidth();
}

function onResize() {
  const maybeNewWidth = getWindowWidth();
  if (windowWidth !== maybeNewWidth) {
    windowWidth = maybeNewWidth;
    buildStarField();
  }
}

window.addEventListener("load", onLoad);
window.addEventListener("resize", onResize);
