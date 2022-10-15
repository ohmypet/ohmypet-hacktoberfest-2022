# dotfiles

> 💻 dotfiles and 🚀 more.

### 🧰 general installation

```sh
yes | /bin/bash -c "$(curl -sSL https://raw.githubusercontent.com/quanhieu/dotfiles-for-linux/main/install.sh)"
```

### 🧰 general installation
 

### Set zsh as default
sudo vim ~/.bashrc
exec zsh

### Vscode setting sync
6a794d69ca092f3e172490de3fc79b13

### atom setting sync
54f5dc3a5eb333b827f80808c59a01ae59cc6cf6
f6c148a8b2fdc328abbeb9fc0d9a5460

```sh
ibus-daemon -drx
sudo apt install -y ibus-unikey
ibus restart
ibus-setup
gsettings set org.gnome.desktop.input-sources sources "[('xkb', 'us'), ('ibus', 'Unikey')]"
```

Add **ibus-daemon -drx** to **startup**

### 🔑 generating a new SSH key

```sh
ssh-keygen -t rsa -b 4096 -C "hieutq1188@gmail.com"
cat ~/.ssh/id_rsa.pub
```

```sh
ssh-keygen -t ed25519 -C "hieutq1188@gmail.com"
cat ~/.ssh/id_rsa.pub
```

### 💅 other
- [ibus-bamboo](https://github.com/BambooEngine/ibus-bamboo)
- [space-ship-zsh-theme](https://github.com/spaceship-prompt/spaceship-prompt)
- [night-owl-pantheon](https://github.com/harrytran103/night-owl-pantheon) - 🌌🦉Night Owl theme for Pantheon terminal.
- [dracula-pantheon](https://github.com/harrytran103/dracula-pantheon) - 🧛🏻‍♂️ Dark theme for Pantheon terminal.
- [mediumship](https://github.com/swapagarwal/mediumship) - 📚 Read all Medium stories for free!
- [golangci-lint](https://golangci-lint.run/usage/integrations/)
- [protoc](http://google.github.io/proto-lens/installing-protoc.html)
- [Telegram](https://desktop.telegram.org/)
- [Dockstation](https://dockstation.io/)
- [BloomRPC](https://github.com/uw-labs/bloomrpc)

## 🔖 license

MIT
