# internet

Connect to the world | Setup VPN for Linux.


## Installation first

### 1. Setup WARP Client

```sh
sudo apt install cloudflare-warp
warp-cli register
warp-cli connect
curl https://www.cloudflare.com/cdn-cgi/trace/
```

### 2. Setup alias to turn on/off VPN

```sh
code ~/.zshrc
```

Add some "magic code" to .zshrc file.

```sh
alias internet='warp-cli connect'
alias internet_on='warp-cli connect'
alias internet_off='warp-cli disconnect'
```

```sh
source ~/.zshrc
```

## And cheers!!

### Turn on VPN
```sh
internet
# or
internet_on
```

### Turn off VPN
```sh
internet_off
```
