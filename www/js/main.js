const palette = {
  Primary: ["--foreground", "--background"],
  Black: ["--color0", "--color8"],
  Red: ["--color1", "--color9"],
  Green: ["--color2", "--color10"],
  Yellow: ["--color3", "--color11"],
  Blue: ["--color4", "--color12"],
  Magenta: ["--color5", "--color13"],
  Cyan: ["--color6", "--color14"],
  White: ["--color7", "--color15"]
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

  for (const key in palette) {
    for (const colour of palette[key]) {
      const colourItem = document.createElement("div");
      colourItem.className = "colour";
      colourItem.style.backgroundColor = `var(${colour})`;
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
