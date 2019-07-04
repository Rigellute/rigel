const fs = require('fs');
const termcolors = require('termcolors');

const xresources = fs.readFileSync('./Xresources.txt', 'utf8');
const colors = termcolors.xresources.import(xresources);

const iterm = termcolors.iterm.export(colors);
fs.writeFile('rigel.itermcolors', iterm);

const alacritty = termcolors.alacritty.export(colors);
fs.writeFile('alacritty.yml', alacritty);
