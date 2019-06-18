# Roadmap TF Grid

## Introduction

When we started this journey we originally intented to focus on the system administrator and application developer and provide alternative to Amazon/GoogleCloud/DigitalOcean. We focussed on compute & storage capacity (S3, Containers).

More and more it became important to deliver a True Decentralized alternative internet. A growing crowd of internet users want change, they want to own their data and be able to be on the internet without becoming a product. Our original vision did not cater enough for this requirement. Summer 2018 we decided to start developing a set of enduser application services which can run on top of the TF Grid. We are on track to launch in beta a first set of these services +-1 year after going in that direction. In September 2019 we will launch our first set of end user apps giving real freedom to everyone on the internet.

This was a huge undertaking and most of this happened in the background without much publicity.
The services who will come out in September will be a real revolution for the internet, for the first time it will be possible for everyone to be online and use an exciting set of products while maintaining full freedom, neutrality and privacy.

As part of this decentralization requirement we also want to allow any blockchain to run on top of our TFGrid. Our TFGrid has a unique capability which we call **"Autonomous IT"** Think about it like self a driving car but then for Information Technology (IT). This makes it possible for any blockchain to run with more security and scale.

In Summer 2019 we will be able to demonstrate the "Autonomous IT" for the first time.

Below you can find our roadmap towards that goal.

## TF Grid 1.0.0 (active since start April 2019)

Grid only usable by application developers

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
- this is a pre-release version and the nodes are rebooted regularly and its data is erased (DO NOT RUN PRODUCTION !)
- uses TFT from testnet (so free money)

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
- A multiplayer quake server (depends on licensing see http://ezquake.github.io/downloads.html)
- Odoo (ERP & Web Publishing system)
- Filemanager
- Syncthing = file sync tool

## TFGrid 1.1.0 (June 2019)

- ability to inform a 3bot about the life state of primitive which came life
- no more reboots of machine put in production( extend reservations)
- security on deployment of vzos
- new webgateway
- upgrade by means of reboot of ZOS
  - the ZDB/s & virtual ZOS'es come life automatically


## TFGrid 1.2.0 (July 2019)

- Use workloads as defined on BCDB
- TFChain no longer used for information storage
 

## TFGrid 1.3.0 (Sept 2019)

First production release but we maintain the Beta label.

### NEW: Decentralized Apps

Our community asked us to focus on enduser facing apps for the first production release.
The names are not final, it could be they will change for launch.

- FreeFlow Pages (alternative to Facebook): everyone can now create their own '''Facebook'''
- FreeFlow Browser (browser running in grid): privacy & freedom for all
- FreeFlow Meeting (alternative to zoom/skype/hangout but decentralized): allow anyone to communicate, everywhere
- FreeFlow Files (filemanager, alternative to e.g. dropbox)
- FreeFlow Docs (office alternative running in cloud) based on OnlyOffice
- FreeFlow Biz (ERP system with CRM, …) based on Odoo
- FreeFlow Publish (wiki & web publishing system)
- FreeFlow Git (Alternative to Github)

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

### upgrade to our compute & storage workloads

- even more decentralized S3 server, where each users 3bot manages the S3 server
- generic usable container service (docker conversion to container is supported ofcourse)
- web forwarding gateway (publish your services on the internet)

This service allows to run any application you want on the decentralized grid.
As long as an application runs on the linux operating system it can run on our grid.




