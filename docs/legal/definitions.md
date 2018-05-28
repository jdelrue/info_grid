# Concept

## ThreeFold (TF)

The concept for creating a new internet by means of a new digital token.

All the ideas and content created for this concept are opensource and stored in this repository. 
A group of volunteers and the ThreeFold Foundation maintain these repositories.

Also look at the ThreeFold [website](https://threefoldtoken.com/).


## ThreeFold Foundation (TFF)

A non for profit organization who contribute to the ThreeFold concept.
Meet them at https://threefoldtoken.com/team/
The Foundation is a promotion and coordination organization.

## ThreeFold Grid (TFG)

The ThreeFold Grid is a new, global neutral and sustainable network of IT infrastructure. On this Grid, IT capacity is indexed registered on the TF Chain for easy discovery by purchasers.

This Internet capacity is produced and allocated locally - similar to the way electricity and other utilities are purchased today. This allows any digital service or application provider to host their services and applications in proximity to the end user leading to significantly greater performance, a lower price point and better margins. This is both more cost effective and green.

## IT Capacity

- IT = Information Technology.
- IT Capacity is resource availability for running any IT Workloads
- Examples of IT Workloads which can run on the TFG are
	- web applications
	- archiving of data
	- generic storage (e.g. using the S3 storage interface)
	- container workloads (e.g. using the Kubernetes interface)
	- artificial intelligence workloads
	- big data workloads (processing of data)
	- gaming servers
	- content delivery
	- test workloads for developers

## ThreeFold Token (TFT)

The ThreeFold Token is a digital Token which allows anyone to buy and sell IT Capacity on the TF Grid. This token only gets issued by the TF Chain if a TF Pool gets connected to the TF Grid.

The TF Chain can issue a maximum of 100 billion tokens.

## TF Chain (TFC)

The blockchain technology as used by the ThreeFold Grid.
This blockchain technology is used to

- let you store & trade your TFTs
- buy/sell capacity on the TFG
- register capacity of the TFG
- provision IT workloads on the TFG
- ...

see the following [github repos](https://github.com/rivine)

## TF Operating System 

The ThreeFold Operating system is the software which makes it possible to convert any pool of hardware to become an ultra efficient pool of resource for the ThreeFold Grid.

Based on 

- [Zero-OS](https://github.com/zero-os) = Ultra Efficient Stateless Operating System
- [Jumpscale](https://github.com/Jumpscale/) = Automation Framework (self healing, ...)

## TF Node

- is a compute/storage server which provides IT Capacity as source for the Cloud Units
- a TF Node is part of a Farming Pool
- TF Nodes are owned by TF Farmers.
- The TF Node runs the TF Operating System and TF Chain (TFC).


## User 

- is the person/organization/company who buys capacity from the TF Grid
- capacity can only be bought by means of TFTs

## Cloud Units

Units of IT capacity as sold from the TF Grid to Users.
More info see [here](https://docs.grid.tf/threefold/info/src/branch/master/concepts/cloud_units.md)


# ThreeFold Farming

## ThreeFold Farming Pool (FP)

A Pool of storage & compute hardware which allows to provision IT Capacity.

Each Farming Pool consists out of TF Nodes which run the TF Operating System and TF Blockchain Software (TF Chain) which allows anyone in the world to use this IT capacity to host their IT workloads (storage apps, archive capacity, web applications, artificial intelligence, iOT, docker containers, etc). To use this IT Capacity, through the TF Grid, people need to own ThreeFold Tokens (“TFTs”) as they are the only possible mechanism to purchase this capacity on the TF Grid. As such, TFTs represent a true utility. 


## ThreeFold Farmer

A ThreeFold Farmer is any organization or person who invests in a ThreeFold Farming Pool and connects this capacity to the ThreeFold Grid.

As a result of Farming, i.e. creating additional capacity, ThreeFold Tokens are automatically created by the ThreeFold Chain. 

Farmers can cultivate both managed and/or unmanaged capacity.

Farmers receive TFTs

- as part of owning the TF Farming Pool (farming)
- as part of selling capacity from the TF Farming Pool (cultivating)

Most TF Farmers use a ThreeFold Cooperative to become active because it hugely simplifies the process and gives them often better pricing to purchase the Farming Pool as well as connecting the Farming Pool to the internet.

The ThreeFold Farmer is the only party who owns the TF Farming Pool.

## ThreeFold Cooperative

Any organization who helps a TF Farmer to become active on the TF Grid.

A Cooperative can supply any or all of following services.

- Selling required hardware kit for the Farming Pool (compute, storage, networking) to the TF Farmer (and logistics around it).
- Installing & testing the TF Operating System on the chosen hardware.
- Burn in testing of the chosen hardware: make sure the hardware is reliable and works following expectations.
- Configuration & Installation of the ThreeFold Farming Pool.
- Registration & Initialization of the ThreeFold Farming Pool.
- Delivering & Executing of hardware Warranty as specified on contract.
- Creation and Delivery of the ThreeFold Mobile App for the TF Farmer (allow people worldwide to order capacity using TFTs for the Farming Pool.
- Software support for the Farming Pool
- Training of the TF Farmer about TF Concepts
    - how to use the TF Wallet
    - how to safely store the TFT's
    - how to go from TFT's to fiat currency like USD/EUR (and visa versa)
    - how to register pricing info on the TF Grid
    - how to integrate a fiat currency payment gateway into existing ecommerce website for the sales of TFT's or TF IT Capacity (e.g. integration with Stripe or other payment mechanism)
    - how to consult/register information on the TF Chain
- Hosting Services
    - all services related to connectivity to the internet (routing, denial of service, firewalling, ...)
    - rackspace & other datacenter services 
    - monitoring of the infrastructure (hardware and software).
- For Managed Capacity a Cooperative or TF Farmer will have to make an agreement with GIG.Tech to get the required software required to create a Managed Capacity Farming Pool (see below).

## Unmanaged Capacity

Unmanaged IT Capacity can exist everywhere; in people’s home, in mobile telephone masts, in utility cabinets, next to railways or motorways, anywhere where internet lines meet electrical outlets, any IT Hosting or Datacenter Facility. This capacity is deployed to the TF Grid and has no people involved to manage its operations (apart from the physical and network aspects).  Farmers have no access to the TF Nodes purchased. They can only use the capacity produced in the exact same way as any other user, i.e. through the TF Chain, in a secure private and neutral way, equally applicable to all.

Unmanaged capacity provides the following 3 basic services

- Storage Capacity = backend storage services which can be used as backend for more high level storage services like S3
- Compute Capacity = backend compute capacity which can be used as backend for more high level compute services like Kubernetes.
- Network Gateway Services: integration with ZeroTier network, HTTP(s) reverse proxy, DNS services, TCP Portforwarding.

These basic services are ordered through the TF Chain only.
SLA's (service level agreements) cannot be be guaranteed on Unmanaged Capacity and as such not registered in the TF Chain.

## Managed Capacity

Managed capacity is capacity that sits in a datacenter or other controlled environment where people operate and maintain supervision of the capacity connected to the TF Grid and published in the TF Directory. SLA (Service Level Agreements) are provided on this capacity like uptime, guaranteed bandwidth, response times, ...

TF Farmers have access to the TF Nodes and to the GIG Tech Management Software around it.

Features Only Available In A Managed Capacity Farming Pool

- Published & Tracked (monitored) Service Level Agreements

GIG Tech software provides additional capabilities for a Managed Farming Pool:

- Monitoring & uptime management software.
- OpenvCloud Portal (full blown software stack to allow management of thousands of nodes and VM's).
- Virtual Machine support.
- High Performance Storage (block) for virtual disks for VM's.
- High Performance Networking support for VM's.
- Seamless integration with enterprise networking solutions for VM's..
- Integration with private Identity Management Solutions (e.g. LDAP, Active Directory, ...) (\*)
- Lots of predefined managed application templates (self healing templates for apps)
- Supports MS Windows (OS) and other Microsoft Applications

*(\*) roadmap*

A TF Farmer or TF Cooperative needs to have an agreement with GIG Tech in place. GIG Tech will supply the required software to allow the TF Farmer or TF Cooperative to connect this Managed Capacity to the TF Grid.

# Legal

## The Company

The Company has been defined on the contract who refers to this document but can be any of the following: 

- The company or organization who is selling a service on the ThreeFold Grid.
- The company who is selling/buying ThreeFold Tokens (TFTs) as capacity on the ThreeFold Grid.
- The company who is helping a Farmer to become active on the ThreeFold Grid = a TF Cooperative.
- The company who is selling the hardware and software required for a Farming Pool

## The Product

The Product is the ThreeFold Token or any service related to the ThreeFold Grid which can be bought by The Purchaser.
The Product has been defined on the contract who refers to this document.

## The Purchaser

Is the person or company or organization who buys The Product from The Company


## GIG Tech

The software company who created the software enabling the ThreeFold Grid.
GIG Tech is selling additional services and software to allow any TF Farmer to create a Managed Capacity Farming Pool.

# Varia

## TF Wallet

A software application which allows anyone to consult how many TFTs they own and to make transfers of TFTs to other parties.
The TF Wallet works together with the TF Chain.


