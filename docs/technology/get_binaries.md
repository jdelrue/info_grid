# Get the ThreeFold Chain Binaries

There are two ThreeFold Chain binaries: 
- the ThreeFold Chain **client** (`tfchainc`)
- and the ThreeFold Chain **daemon** (`tfchaind`)

The ThreeFold Chain binaries are available for Mac OS, Linux and Windows from the [releases](https://github.com/threefoldfoundation/tfchain/releases) directory:

![](../images/releases.png)

From the command line download the zip file and extract it to any location of choice:
```bash
tfchain_dir="/tfchain"
mkdir -p $tfchain_dir
cd $tfchain_dir
wget https://github.com/threefoldfoundation/tfchain/releases/download/v0.6.1/tfchain-v0.6.1-linux-amd64.zip
apt-get install unzip
unzip tfchain-v0.6.1-linux-amd64.zip 
```