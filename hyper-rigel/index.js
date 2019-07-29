console.log("My theme is loaded");
const backgroundDark = "#001a25";
//special
const foreground = "#e6e6dc";
const background = "#002635";
const cursorColor = "#e6e6dc";

//black
const color0 = "#00384d";
const color8 = "#517f8d";

//red
const color1 = "#c43060";
const color9 = "#ff5a67";

//green
const color2 = "#7fc06e";
const color10 = "#9cf087";

//yellow
const color3 = "#f08e48";
const color11 = "#ffcc1b";

//blue
const color4 = "#1c8db2";
const color12 = "#7eb2dd";

//magenta
const color5 = "#c694ff";
const color13 = "#fb94ff";

//cyan
const color6 = "#00cccc";
const color14 = "#00ffff";

//white
const color7 = "#77929e";
const color15 = "#b7cff9";

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    fontFamily:
      '"Fira Code","SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',
    fontSize: 16,
    backgroundColor: background,
    foregroundColor: foreground,
    borderColor: color0,
    cursorColor,
    colors: {
      black: color0,
      red: color1,
      green: color2,
      yellow: color3,
      blue: color3,
      magenta: color5,
      cyan: color6,
      gray: color7,

      // bright
      brightBlack: color8,
      red: color9,
      green: color10,
      yellow: color11,
      blue: color12,
      magenta: color13,
      cyan: color14,
      brightWhite: color15
    }
  });
};
