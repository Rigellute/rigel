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

/**
 * I now wish I was using jsx
 *
 * This will create markup that looks like this
 *
 * <div class="palette-item">
 *   <p>Title</p>
 *   <div class="colour red"></div>
 *   <div class="colour red-bright"></div>
 * </div>
 */
function createPaletteItems() {
  const paletteContainer = document.getElementById("palette-container");

  for (const key in palette) {
    const paletteItem = document.createElement("div");
    paletteItem.className = "palette-item";
    const pTag = document.createElement("p");
    pTag.className = "colour-title";
    const title = document.createTextNode(key);
    pTag.appendChild(title);
    paletteItem.appendChild(pTag);

    const colourGroup = document.createElement("div");

    for (const colour of palette[key]) {
      const colourItem = document.createElement("div");
      colourItem.className = "colour";
      colourItem.style.backgroundColor = `var(${colour})`;
      colourGroup.appendChild(colourItem);
    }

    paletteItem.appendChild(colourGroup);
    paletteContainer.appendChild(paletteItem);
  }
}

/**
 * Creating a large number of stars as individual html elements was slow.
 * Tried creating the stars in a `canvas`, but this looked pixelated.
 * This solution creates the starfield based on a single element using the
 * `box-shadow` trick.
 */
function buildStarField() {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

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

function main() {
  buildStarField();
  createPaletteItems();
}

window.addEventListener("load", main);
window.addEventListener("resize", buildStarField);
