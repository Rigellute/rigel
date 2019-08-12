# Rigel ✨

<img alt="vim" src="https://user-images.githubusercontent.com/12150276/62868142-d9a16100-bd0c-11e9-8d25-9e28afa6df37.png">

A 24bit colorscheme based on the star [Rigel](https://en.wikipedia.org/wiki/Rigel) - the bright blue star in the constellation of Orion

<img alt="vim" src="https://user-images.githubusercontent.com/12150276/62640613-e0f5f280-b939-11e9-8d34-f9b61cbdc842.png">

## Installation

- [Vim](#vim)
- [Terminal](#terminal)
- [Slack](#slack)

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

1. Copy [alacritty.yml](./alacritty.yml) and paste into `~/.config/alacritty/alacritty.yml`

#### Kitty

1. Copy [kitty.conf](./kitty.config) and paste into `~/.config/kitty/kitty.conf`

#### iTerm2

1. Download [`rigel.itermcolors`](./rigel.itermcolors)
1. In iTerm2 access the _Preferences_ pane on the _Profiles_ tab.
1. Under the _Colors_ tab import the [`rigel.itermcolors`](./rigel.itermcolors) file via the _Load Presets_ drop-down at the bottom right.

### Slack

1. Go to Slack's `Preferences` → `Sidebar Theme`
1. Scroll to the bottom and paste these colors:

```
#002635,#00384D,#F08E48,#E6E6DC,#00384D,#B7CFF9,#00FFFF,#FF5A67
```
