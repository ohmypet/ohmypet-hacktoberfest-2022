export ZSH="${HOME}/.oh-my-zsh"

ZSH_THEME="spaceship"

plugins=(
    git
    node
    yarn
    golang
    docker
    kubectl
    helm
    zsh-autosuggestions
    zsh-syntax-highlighting
)

source ~/.bash_profile
source $ZSH/oh-my-zsh.sh

source ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE='fg=46'

autoload -U promptinit; promptinit
prompt spaceship

NPM_CONFIG_PREFIX=~/.npm-global

# go-path
export GOPATH=$HOME/go
export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin
export PATH=${PATH}:${GOPATH}/bin


# nvm
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completio