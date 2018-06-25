# How to install the ThreeFold Chain Explorer

![](https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-0.3.5&s=d5b622e2ea747f0eaa17e73a2040031a&auto=format&fit=crop&w=1327&q=80)

The Explorer for the testnet is currently available on: https://explorer.testnet.threefoldtoken.com and for the production net on https://explorer.threefoldtoken.com

You can install your own instance of the Explorer on Linux, Mac or Windows.

Below we discuss the steps to install the Explorer on Linux:
- [Get the ThreeFold Chain binaries](#get-binaries)
- [Start the ThreeFold Chain daemon](#start-daemon)
- [Install Caddy](#install-caddy)
- [Start Caddy](#get-explorer)

> We highly recommend against installing the Explorer on the same host as your wallet.


<a id="get-binaries"></a>
## Get the ThreeFold Chain binaries

In order to run your own Explorer, you first need to have a ThreeFold Chain node running on the same host, which requires the ThreeFold Chain daemon (`tfchaind`).

See [Getting the ThreeFold Chain Binaries](get_binaries.md) for instructions on how to get the ThreeFold daemon.


<a id="start-daemon"></a>
## Start the ThreeFold Chain daemon

Start the ThreeFold Chain daemon in the background:
```bash
tfchain_dir="/tfchain"
cd $tfchain_dir/release/tfchain-v0.6.1-linux-amd64/cmd
./tfchaind -M cgte &
<ENTER>
```

<a id="install-caddy"></a>
## Install Caddy

From the command line:
```bash
sudo apt-get update && apt-get -y upgrade
sudo apt-get install curl
curl https://getcaddy.com | bash -s personal
```


<a id="get-explorer"></a>
## Get the Explorer

The explorer is available from the [threefoldfoundation/tfchain](https://github.com/threefoldfoundation/tfchain) GitHub repository.

Clone the repository:
```bash
apt-get install git
mkdir -p /opt/code/github/threefoldfoundation

cd /opt/code/github/threefoldfoundation
git clone https://github.com/threefoldfoundation/tfchain.git
```

<a id="start-caddy"></a>
## Start Caddy

From the command line:
```bash
cd /opt/code/github/threefoldfoundation/tfchain/frontend/explorer
caddy -conf Caddyfile.local &
```

As result the Caddy server will be available on port 2015:

http://<localhost>:2015/

![](../images/explorer.png)
