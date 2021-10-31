#!/bin/bash

swapoff -a
sudo fallocate -l 2G /swapfile
sudo mkswap -L swap /swapfile
sudo swapon /swapfile
swapon -a
free -h