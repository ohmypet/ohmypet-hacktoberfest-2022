# git alias
alias ../="cd .."
alias gs="git status"
alias gp="git pull"
alias gpm="git pull origin master"
alias gb="git branch"
alias ga="git add ."
alias gl="git log"
alias gch="git checkout"
alias gc="git commit -m $1"
alias grh="git reset --hard"
alias grn="git reset"

alias grb="git rebase"
alias grbc="git rebase --continue"
alias grba="git rebase --abort"
alias gpf="git push --force"

alias gst="git stash"
alias gstm="git stash save $1"
alias gstlist="git stash list"
alias gsta="git stash apply"
alias gstp="git stash pop"
alias gstshow="git stash show -p"
alias gstclear="git stash clear"

# advantage git alias
alias gam="git commit -am $1"
# Change commit message
alias gca="git commit --amend -m $1"
# Change local branch name at this branch
alias gbm="git branch -m"
# Delete local branch
alias gd="git branch -d"
# Delete local branch hard
alias gd2="git branch -D"
# Delete remote branch
alias gdr="git push origin --delete"

# other alias
alias code.="code ."
alias atom.="atom ."
alias start1="cd workspace/dev-env && ./start.sh"
# alias killport="sudo kill -9 $(sudo lsof -t -i:5433)"
alias startfront="cd workspace/front-office-dev-env && ./start.sh"
alias start2="cd ../front-office-dev-env && ./start.sh"
# alias startall="cd workspace/dev-env && ./start.sh sudo kill -9 $(sudo lsof -t -i:5433) cd ../front-office-dev-env && ./start.sh"

# cloudflare-warp
alias warp='warp-cli connect'
alias warp_on='warp-cli connect'
alias warp-off='warp-cli disconnect'

# kubernetes
alias k='kubectl'
alias ku='kubectl'
# minikube
alias m='minikube'
alias mi='minikube'


export PATH=$PATH:~/.npm-global/bin

# export GOPATH=$HOME/go
# export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin
