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

// Golden ratio
const phi = (1 + Math.sqrt(5)) / 2;

function createPaletteItems() {
  const paletteContainer = document.getElementById("palette-container");

  const coloursToHide = ["Primary", "Black", "White"];

  const height = 5;
  const width = height / phi;

  // Don't show all the colours from the palette
  for (const key in palette) {
    if (coloursToHide.includes(key)) {
      continue;
    }
    for (const colour of palette[key]) {
      const colourItem = document.createElement("div");

      const styles = `
        background-color: ${colour};
        height: ${height}rem;
        margin: 0 0.2rem;
        width: ${width}rem;
        border-radius: 0.3rem;
      `;

      colourItem.setAttribute("style", styles);
      paletteContainer.appendChild(colourItem);
    }
  }
}

function generateWeightedList(jsMap) {
  const weightedList = [];

  for (var [color, weight] of jsMap.entries()) {
    const multiples = weight * 100;

    // Loop over the list of items
    for (let j = 0; j < multiples; j++) {
      weightedList.push(color);
    }
  }

  return weightedList;
}

const colourWeightMap = new Map([
  [palette.Primary[0], 0.4],
  [palette.White[1], 0.2],
  [palette.Blue[0], 0.2],
  [palette.Magenta[1], 0.1],
  [palette.Red[1], 0.1]
]);

const colours = generateWeightedList(colourWeightMap);

/**
 * Creating a large number of stars as individual html elements was slow.
 * Tried creating the stars in a `canvas`, but this looked pixelated.
 * This solution creates the starfield based on a single element using the
 * `box-shadow` trick.
 */
function buildStarField() {
  const width = getWindowWidth();
  const height = getWindowHeight();

  function buildStars(starElement, numberOfStars) {
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
  const starfieldMedium = document.getElementById("starfield-medium");
  const starfieldLarge = document.getElementById("starfield-large");

  buildStars(starfieldSmall, Math.floor(width / 2));
  buildStars(starfieldMedium, Math.floor(width / 3));
  buildStars(starfieldLarge, Math.floor(width / 10));
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
