![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)


## OpenSource Blog

### Open Source Components Overview

#### External Open Source

- Linux Kernel & Components (we rebuild from source & pick parts we require)
Hypervisor KVM & supporting components
- DB: Redis, MongoDB & InfluxDB
- Open VSwitch and VXLan
- Open v Storage Block Driver / Alba: Apache 2

#### TFF Open Source

- [Automation Framework](https://github.com/Jumpscale)
- [Cloud stack](https://github.com/0-complexity),
Our cloud stack (some repo’s are still private e.g. openvcloud, docs, ays install framework, …)
- [Zero-OS](https://github.com/zero-os),
our own distributed operating system
- [USer Authentication](https://github.com/itsyouonline)
our identity mgmt solution
- [Racktivity](https://github.com/orgs/racktivity),
Power & uptime management
- [Mobile platform](https://github.com/rogerthat-platform) mobile platform

### Open Source Architecture Components

#### Zero-OS

True Distributed OS
Managed By Our Zero-OS Controller

It is a very different type of OS
- no more local FS/Vol Driver
- no more systemD
- no more local packages, software installations..

Zero OS Components
- 0-OS Controller (controls all the nodes running Zero-OS in a resource pool)
- 0-OS core (replacement of systemd, kernel boots this first process)
- 0-OS filesystem (virtual filesystem for Zero-OS, OS files are not installed on local storage)
- 0-OS vDisk (virtual Disks running 0-OS FS)
- 0-OS cockpit (AYS - selfhealing, jumpscale portal, restAPI, Telegram interface)
- 0-OS CLI - command line tools


#### Zero Storage

- Easy to use
- 1 IT person can manage 100 Petabyte
- Dense & Green
- 5PB in 1 rack for archive,
- using conventional disks for storage
- Super scale out 50+ PB
- Multi datacenter with single namespace
- Not based on replication!
- Can loose datacenters, data remains available
- Ultra high performance 100-250.000 IOPS per node (depends on HW)
- Ultra reliable
- Replication & backup obsolete
- Space efficient 2-3x better than alternatives (NAS & Archive)
- Self-healing

#### Roger That
Secure extensible mobile application platform for communities

- Supported on iOS & Android (soon also Windows, Linux, Mac)
- Features:
  - Chat: Peer 2 peer chat, group chat, dynamic group chat (via api), broadcasting
  - News timeline
  - Digital signatures
  - Built in QR-Code scanner, iBeacons, ..
  - Friends: chat, location sharing, …
  - Auto content updates
- Authentication: built in (email verification), facebook, oauth2 (eg ItsYou.online)
- Extensible:
  - Online (no app updates), by multiple people at the same time
  - Complete json-rpc api for management + extending the app with custom functionality
  - Web console for updating look and feel, content, drag & drop interface designer

#### Cockpit (= Jumpscale / At Your Service)

- Enables anyone to design and deploy virtual datacenters in minutes
- Meant for non-engineers
- Open source, free of charge software
- Comprehensive: human readable, easy to learn format
- No more complicated technical oriented configuration files
- No networking, virtualization or storage expertise required
- Concentrate on business process automation, not IT
- Runs on G8 technology, eliminating layers of complexity
- With ready-to-deploy blueprints available off-the-shelf
- Blueprint marketplaces can develop and deploy
- Manage full IT lifecycles leveraging container technology
- Grow, ad, distribute, destroy capacity as needed.
- No downtime: Change and upgrades are immediate
- Design Intelligence: Robots and algorithms assist you.

#### ItsYou.Online

Nobody watching over you: e.g. Facebook, Google, LinkedIn
No hacking or compromising: e.g. Blockchain proof-of-work

- Identity and trust relationships management by a new authority, completely independent of any existing online giant
- Manipulative and Measureable info - who are you?
  - Rating and ranking
  - Reviews and status
  - Persona and reputation
- A central authority issuing trust - who do you trust?
  - One global certificate authority
  - One central database
  - Central timestamping			

The Solution: The G8 open-source approach to an independent identity system

- Identity Trust Technology - Peer-to-Peer Distributed
Create your own timed identity and decide yourself in which transactions you issue identity information and have it validated by a decentral system locked into a blockchain.
- Trust Relationship Technology - Blockchain Protected
A distributed database architecture with the ability to handle trustless transactions where no parties need to know nor trust each other for transactions to complete.


Key differences to existing technologies:

- You own your identity and create trust relationships
- network-based and use blockchain technology

#### Rivine

Blockchain toolkit

- Green and Secure
- No mining but Proof of BlockStake
- Scalable
  - Off chain micropayments
  - Application specific chain support
- Smart contracts
- Custom transaction validity rules
- Notary
  - Register and time the existence of
contracts/documents/...
- No dependency on external tokens
  - Users do not want to bother with
ethereum in order to interact
- Secure lightweight (mobile) client support
- Authorized addresses support
  - Compliance with KYC and AML
- Deterministic wallets:
  - Allows for offline master keys

BELOW TO BE REMOVED WHEN PART ABOVE IS DONE.  IMAGES NEED TO BE UPLOADED AND ADDED LINKS

## OpenSource Blog

### Open Source Components Overview

#### External Open Source

Linux Kernel & Components (we rebuild from source & pick parts we require)
Hypervisor KVM & supporting components
DB: Redis, MongoDB & InfluxDB
Open VSwitch and VXLan
Open v Storage Block Driver / Alba: Apache 2

#### TFF Open Source
https://github.com/Jumpscale
= our automation framework (quite some repo’s here)
https://github.com/0-complexity
our cloud stack (some repo’s are still private e.g. openvcloud, docs, ays install framework, …)
https://github.com/zero-os
our own distributed operating system
https://github.com/itsyouonline (https://www.itsyou.online)
our identity mgmt solution
https://github.com/orgs/racktivity  
power & uptime management
https://github.com/rogerthat-platform	 
mobile platform

2. Open Source Architecture Components



2.1 Zero-OS
True Distributed OS
Managed By Our Zero-OS Controller

It is a very different type of OS
no more local FS/Vol Driver
no more systemD
no more local packages, software installations..
Zero OS Components
0-OS Controller (controls all the nodes running Zero-OS in a resource pool)
0-OS core (replacement of systemd, kernel boots this first process)
0-OS filesystem (virtual filesystem for Zero-OS, OS files are not installed on local storage)
0-OS vDisk (virtual Disks running 0-OS FS)
0-OS cockpit (AYS - selfhealing, jumpscale portal, restAPI, Telegram interface)
0-OS CLI - command line tools


MD text - above to be removed after we have secures the images




2.2 Zero Storage
Easy to use
1 IT person can manage 100 Petabyte
Dense & Green
5PB in 1 rack for archive,
using conventional disks for storage
Super scale out 50+ PB
Multi datacenter with single namespace
Not based on replication!
Can loose datacenters, data remains available
Ultra high performance 100-250.000 IOPS per node (depends on HW)
Ultra reliable
Replication & backup obsolete
Space efficient 2-3x better than alternatives (NAS & Archive)
Self-healing



2.3 Roger That
Secure extensible mobile application platform for communities

Supported on iOS & Android (soon also Windows, Linux, Mac)
Features:
Chat: Peer 2 peer chat, group chat, dynamic group chat (via api), broadcasting
News timeline
Digital signatures
Built in QR-Code scanner, iBeacons, ..
Friends: chat, location sharing, …
Auto content updates
Authentication: built in (email verification), facebook, oauth2 (eg ItsYou.online)
Extensible:
Online (no app updates), by multiple people at the same time
Complete json-rpc api for management + extending the app with custom functionality
Web console for updating look and feel, content, drag & drop interface designer


2.4 Cockpit (= Jumpscale/At Your Service?)
Enables anyone to design and deploy virtual datacenters in minutes
Meant for non-engineers
Open source, free of charge software
Comprehensive: human readable, easy to learn format
No more complicated technical oriented configuration files
No networking, virtualization or storage expertise required
Concentrate on business process automation, not IT
Runs on G8 technology, eliminating layers of complexity
With ready-to-deploy blueprints available off-the-shelf
Blueprint marketplaces can develop and deploy
Manage full IT lifecycles leveraging container technology
Grow, ad, distribute, destroy capacity as needed.
No downtime: Change and upgrades are immediate
Design Intelligence: Robots and algorithms assist you.


2.5 ItsYou.Online
Nobody watching over you: e.g. Facebook, Google, LinkedIn
No hacking or compromising: e.g. Blockchain proof-of-work

Identity and trust relationships management by a new authority, completely independent of any existing online giant
Manipulative and Measureable info - who are you?
Rating and ranking
Reviews and status
Persona and reputation
A central authority issuing trust - who do you trust?
One global certificate authority
One central database
Central timestamping



The Solution: The G8 open-source approach to an independent identity system

(1) Identity Trust Technology - Peer-to-Peer Distributed
Create your own timed identity and decide yourself in which transactions you issue identity information and have it validated by a decentral system locked into a blockchain.

(2) Trust Relationship Technology - Blockchain Protected
A distributed database architecture with the ability to handle trustless transactions where no parties need to know nor trust each other for transactions to complete.


Key differences to existing technologies:
You own your identity and create trust relationships
network-based and use blockchain technology

2.6 Rivine
Blockchain toolkit
Green and Secure
No mining but Proof of BlockStake
Scalable
Off chain micropayments
Application specific chain support
Smart contracts
Custom transaction validity rules
Notary
Register and time the existence of
contracts/documents/...
No dependency on external tokens
Users do not want to bother with
ethereum in order to interact
Secure lightweight (mobile) client support
Authorized addresses support
Compliance with KYC and AML
Deterministic wallets:
Allows for offline master keys
