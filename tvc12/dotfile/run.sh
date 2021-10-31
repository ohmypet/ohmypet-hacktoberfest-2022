#!/bin/bash

function update_packages() {
	echo 'Update packages'
	sudo apt update
	sudo apt -y upgrade
}

function install_base() {
	echo 'Update install base'
	sudo apt update
	sudo apt install -y git
	sudo apt install -y curl
	sudo apt install -y htop
	sudo apt install -y gnome-tweaks
	sudo apt-get install ibus-unikey
	ibus restart
	sudo usermod -a -G input $USER
}

function install_app() {
	echo 'install app'

	echo 'install vscode'
	sudo snap install code --classic

	echo 'install android'
	sudo snap install android-studio --classic

}

function shutdown() {
	shutdown -P 0
}

function install_flutter() {
	echo 'install flutter'
	git clone --single-branch -b stable https://github.com/flutter/flutter ~/.dev/flutter
	echo 'export PATH="$PATH:$HOME/.dev/flutter/bin"' >$HOME/.bash_profile
	echo 'source $HOME/.bash_profile' >>$HOME/.bashrc
	source $HOME/.bash_profile
	flutter precache
	flutter doctor
}

function install_zsh_base() {
	echo 'install zsh base'
	sudo apt install -y zsh
	sudo apt-get install fonts-powerline
	sudo chsh -s $(which zsh)
	yes | sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
	git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions
	git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.zsh/zsh-syntax-highlighting
	cp .zshrc ~/
	source ~/.zshrc
}

#update_packages
#install_base
install_app
#install_flutter

shutdown