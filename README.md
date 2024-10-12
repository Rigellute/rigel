# Rigel ✨

<img alt="vim" src="https://user-images.githubusercontent.com/12150276/62868142-d9a16100-bd0c-11e9-8d25-9e28afa6df37.png">

A 24bit colorscheme based on the star [Rigel](https://en.wikipedia.org/wiki/Rigel) - the bright blue star in the constellation of Orion

<img alt="vim" src="https://user-images.githubusercontent.com/12150276/62640613-e0f5f280-b939-11e9-8d34-f9b61cbdc842.png">

## Installation

- [Vim](#vim)
- [Terminal](#terminal)
- [VS Code](#vs-code)
- [Slack](#slack)

## Troubleshooting

- [Colours don't look right](#colours-dont-look-right)

# Install

### Vim

```vim
"""" install
" install with vim-plug
Plug 'Rigellute/rigel'

" or with NeoBundle
" NeoBundle 'Rigellute/rigel'
" or with Vundle
" Plugin 'Rigellute/rigel'

"""" enable 24bit true color
set termguicolors

"""" enable the theme
syntax enable
colorscheme rigel
```

##### JavaScript and TypeScript

If you are using JavaScript, I recommend adding [vim-javascript](https://github.com/pangloss/vim-javascript) for improved syntax highlighting.

```vim
Plug 'pangloss/vim-javascript'
```

This theme has good support for flow syntax, which you can enable with

```vim
" Once vim-javascript is installed you enable flow highlighting
let g:javascript_plugin_flow = 1

```

If you are using React, I recommend adding [vim-jsx](https://github.com/mxw/vim-jsx) for better jsx highlighting

```vim
Plug 'mxw/vim-jsx'
```

This theme also has good support for Typescript, which is enabled by default. You might just need to add a plugin for Typescript syntax.

I recommend [leafgarland/typescript-vim](https://github.com/leafgarland/typescript-vim).

#### [Airline](https://github.com/vim-airline/vim-airline)

<img alt="airline" src="https://user-images.githubusercontent.com/12150276/62639300-28c74a80-b937-11e9-8376-06bbefceaf10.png">

```vim
let g:rigel_airline = 1
let g:airline_theme = 'rigel'
```

#### [Lightline](https://github.com/itchyny/lightline.vim)

<img alt="lightline" src="https://user-images.githubusercontent.com/12150276/62639141-cd955800-b936-11e9-8536-ef77698981cd.png">

```vim
let g:rigel_lightline = 1
let g:lightline = { 'colorscheme': 'rigel' }
```

### Terminal

<img alt="terminal" src="https://user-images.githubusercontent.com/12150276/60734655-8cc9ae00-9f48-11e9-994e-70f055945cfb.png">

The terminal screenshot above is using [Pure](https://github.com/sindresorhus/pure) prompt and [Fira Code](https://github.com/tonsky/FiraCode) font (size 16) in Alacritty.

#### Alacritty

If you are using Alacritty version 0.13.0 or newer:
1. Copy [alacritty.toml](./alacritty.toml) and paste into `~/.config/alacritty/alacritty.toml`

otherwise:
1. Copy [alacritty.yml](./alacritty.yml) and paste into `~/.config/alacritty/alacritty.yml`

#### Kitty

1. Copy [kitty.conf](./kitty.config) and paste into `~/.config/kitty/kitty.conf`

#### iTerm2

1. Download [`rigel.itermcolors`](./rigel.itermcolors)
1. In iTerm2 access the _Preferences_ pane on the _Profiles_ tab.
1. Under the _Colors_ tab import the [`rigel.itermcolors`](./rigel.itermcolors) file via the _Load Presets_ drop-down at the bottom right.

#### macOS Terminal.app

1. Download [`rigel.terminal`](./rigel.terminal)
1. Terminal > Preferences > Profiles > [+] button to select file and use theme

Note Terminal.app doesn't support [truecolor](https://gist.github.com/XVilka/8346728), so colors might look slightly faded.


#### Warp

1. Copy [warp.yml](./warp.yml) and paste into `~/.warp/themes`

### VS Code

Thanks to [mrmartineau](https://github.com/mrmartineau), the Rigel theme is ported to VS Code, which can be found [here](https://marketplace.visualstudio.com/items?itemName=mrmartineau.rigel-vscode). The theme can be installed via "extensions" from the Visual Studio Marketplace.

[VS Code port repo](https://github.com/mrmartineau/rigel-vscode).

### Slack

1. Go to Slack's `Preferences` → `Themes`
2. Click on custom themes.
3. Scroll to the bottom and paste these colors:

```
#002635,#00384D,#F08E48,#E6E6DC,#00384D,#B7CFF9,#00FFFF,#FF5A67
```

# Troubleshooting

### True color

Make sure you are using a terminal emulator that supports `truecolor`. Read more about this [here](https://gist.github.com/XVilka/8346728).

### Colours don't look right

If you are running `vim` within `tmux`, you may run into some `truecolor` issues.

To fix, add this to you `tmux.conf`

```tmux
set -g terminal-overrides ',xterm-256color:Tc'
set -g default-terminal "tmux-256color"
set -as terminal-overrides ',xterm*:sitm=\E[3m'
```

And in your `.bash_profile || .zshrc`

```bash
export TERM="xterm-256color"
```

Ensure you `tmux kill-server`, quit your emulator of choice and startup it all back up again. It should then look 👌.
