# Colorscheme based on the star Rigel ✨

<img width="1103" alt="vim" src="https://user-images.githubusercontent.com/12150276/60734656-8cc9ae00-9f48-11e9-9bbb-7020d8f9130f.png">
## Install for vim

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

### Airline

![Airline](https://user-images.githubusercontent.com/12150276/60734661-8e937180-9f48-11e9-9aca-90c7a5d40dbf.png)

```vim
let g:rigel_airline = 1
let g:airline_theme = 'rigel'
```

### Lightline

TODO: create lightline theme

## Terminal

<img width="1064" alt="terminal" src="https://user-images.githubusercontent.com/12150276/60734655-8cc9ae00-9f48-11e9-994e-70f055945cfb.png">
- [Alacritty](./alacritty.yml)
- [iTerm2](./rigel.itermcolors)
