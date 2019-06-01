# Roadmap TF Grid

## TF Grid 1.0.0 (active since start April 2019)

Grid only usable by application developers and non Production mode.

### Services

- S3 storage service
- Virtual Zero-OS = container host (compatible with Docker)
- ZDB backend storage service
- Web gateway: how to make your service public

Above capabilities allow you to run most workloads which today would typically run on digitalocean or Amazon. Any app which runs on linux can run on the TF Grid.

### Benefits

- no more docker images, flists allow faster deployment, 10x less storage and bandwidth required 
- more security, because only signed files can run in the container
- more efficient storage leads in lower cost (10x less power used)
- can build any service on top

### Notes and Known Issues

- not user friendly, only meant for developers
- no user interface, only python scripting
- this is a pre-release version and the nodes are rebooted regularly and its data is erased

## TF Grid 1.0.1 (June 2019)

Still non production workloads and TFT's from testnet.

### Maintenance Release

- New JSX (jumpscale kosmos shell) release: easier to install/use
- Better documentation

### Example Workloads

easy to to deploy example workloads like

- Ethereum node example
- An Icecast node example
- A Minecraft server
- A Pastebin installation
- A PeerTube installation
- A multiplayer quake server
- Odoo (ERP & Web Publishing system)
- Filemanager
- Syncthing = file sync tool

## TFGrid 1.1.0 (Sept 2019)

First production release but we maintain the Beta label.

### NEW: Decentralized Apps

Our community asked us to focus on enduser facing apps for the first production release.

- OpenPages (alternative to Facebook): everyone can now create their own '''Facebook'''
- OpenBrowser (browser running in grid): privacy & freedom for all
- OpenMeeting (alternative to zoom/skype/hangout but decentralized): allow anyone to communicate, everywhere
- OpenPublish (wiki & web publishing system)
- OpenFiles (filemanager, alternative to e.g. dropbox)
- OpenDocs (office alternative running in cloud) based on OnlyOffice
- OpenBiz (ERP system with CRM, …) based on Odoo

Everyone will be able to provision their own private version of above described apps on top of the grid. 
All integrated with our 3bot mobile app.


### NEW: Blockchain As A Service

Help resolve the blockchain dilema problem.

- Run HyperLedger (ethereum compatible), Rivine (our own) on top of our TFGrid (more blockchains to follow)
- Human empowered blockchain: together with friends launch a blockchain, no-one can access or manipulate the blockchain, consensus required between the group to start or invalidate the blockchain.
- Benefits: easy = deploy a blockchain<5 min, cost effective, much more secure (no-one can interact with the code), real decentralized

### NEW: BCDB = BlockChain DataBase

A True scalable blockchain Database. 

- A true distributed, decentralized database (ledger)
- Store any information (e.g. contracts, …)
- Has all the features from a blockchain but not the downsides.
- Much more green & storage efficient (50x benefit compared to classic blockchain techno)
- Strongly Types schema support (complex types)
- Index & Search capabilities.
- Compatible with any chosen development language (Redis compatible API)
- Rich python client (userfriendly).

### NEW: 3bot = Your Digital Self

- host your own 3bot on the TF-Grid
- multi currency wallet (Gold, TFT, …)
- your own data/identity (API driven)
- integrates with 3bot mobile app

### NEW: “autonomous IT” preview (non production)

- run IT workloads with no people involved during operation has properties of a blockchain: consensus required for install, upgrade, remove.
- ultra secure, give hackers no chance because people are not involved in deploying or keeping the service up & running. There is nothing to hack.
- This is a preview release, only usable for real experts.

