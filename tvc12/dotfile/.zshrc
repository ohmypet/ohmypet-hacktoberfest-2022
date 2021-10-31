
export ZSH="$HOME/.oh-my-zsh"

plugins=(
    git
    vscode
    timer
)

fpath+=("$HOME/.zsh/pure")

ZSH_THEME=""

source $ZSH/oh-my-zsh.sh
autoload -U promptinit
promptinit
PURE_PROMPT_SYMBOL="➜ "
PURE_GIT_DOWN_ARROW='↓'
PURE_GIT_UP_ARROW='↑'
zstyle ':prompt:pure:prompt:*' color '#fc6c85'
prompt pure

source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
source ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source ~/.bash_profile