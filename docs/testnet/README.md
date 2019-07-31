# Minimal off grid test setup

## Get yourself s private overlay network

Zerotier is a technologie that provides overlay networking capabilities. In the current version of the TF Grid we use Zerotier networking technology to connect nodes on a grid and provide the necessary connectivity.  The next version of Zero-OS will use ipv6 natively to provide node connectivity.

### Setup a private zerotier networks.

Getting an overlay network is essential - all coonectivity requirements are currently delivered by zerotier technologie 
- Go to: https://my.zerotier.com/login
- Create an account
- Log into account
- Create a specific - test setup network: https://my.zerotier.com/network

Download the zerotier network a one or more controlling PC’s.  Choose the right version for the OS: https://www.zerotier.com/download/
Connect controlling PC to the test setup network using the installed client.
Need to enter the network ID in the client
Need to accept the client in the zerotier portal

On a mac the client presents the following interface.

Now we should be able to ping all devices connected to the zerotier networks regardless of where these devices are located.  It is an overlay network working behind NAT and FW’ed connections.
Take the zerotier network ID and go to:  bootstrap.grd.tf

Choose the master branch of the Zero-OS and input the zerotier network ID

Enable the development flag:  This disables a lot of the security features on the Zero-=OS and allows you to connect to the Zero-OS without being authenticated.

Choose which bootloader method you want to use and downloads the correct image/script that belongs to that method 

Depending on the use case (virtual / physical) make a physical boot device of use the selected method for the Virtualisation technology
In this case - configure Virtualbox to boot the iso image 
After a while of will be booted comletely (depending on your network speed)

And you can see the zerotier address of your private (zerotier) network, and the assumed private IP addresses.   Accept the new arrival in your zerotier central network management UI

