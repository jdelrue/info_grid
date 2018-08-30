![](../images/digitalme-wb.png)

## 3bot - AKA digitalME

The 3bot is a robot that can assume a number of different roles.  The 3bot is meant to be the worker on the ThreeFold grid caring and maintaining all tasks required. There are a few type of 3bots which can be categorized as generic (or system) and personal 3bots.

The 3bot is a generic purpose framework of worker that runs in a zero-os container.  IT requires a zero-os operating system and therefore can run on the TF Grid on any of the participating nodes but is can also on off the grid nodes in virtual machines running zero-os.

The 3bot's have a private zerotier network which allows all of them to talk to eachother.  Through a mechanism of multicast each individual 3bot will be able to communicate and exchange information between a all of them.

Current type of 3bots that have purpose in the TF GRid are:
 - a personal 3bot for individuals and organisations that operate on the TFGrid
 - a farmer 3bot taking care of individual farmers capacity and all of its sales and operational tasks.
 - a verification 3bot providing neutral verification services throughout the TF Gdid.

### A personal 3bot.
You personal 3bot will act on your behalf and collects and manages information of you to perform tasks. The number of tasks that is is able to do for you will expand but for now it will be able to do the following things for you:
 - Generic User authentication and authorisation information and mechanism
 - Systems administrator taking care of TFGrid Administrative tasks
 - Crypto currency wallet.  Your wallet for crypto currencies (initially only the TFT)
 - A Database (general purpose storage capability)
 - Chat functionality. This is there as a facility to have interaction with the 3bot - but also person-2-person.

#### User Authentication and authorisation.
The user authentication mechanism is based on blockchain technology.  At this point in time the TF Grid runs 2 independent blockchains.  The first one is the financial transaction blockchain, tfchain and the second one is one dedicated to user authentication and authorisation. This blockchain contains other information than transactional information of TFT (or any other cryptocurrency).  This blockchain contains information that allows for a peer-to-peer user authentication and authorisation mechanism where there is no central database.  Sensitive personal information is not stored in this blockchain (as all blockchains by design have all stored information visible to anyone).  This blockchain <<need to come up with a name for this>> has the following information per entity (person, organisation, etc):
 - A identity number (unique)
 - A name in the format of 5bytes:5bytes
 - The public key of a asymmetric private public key pair.
 - A number of  IP addresses

All other, more private information, is stored in a personal 3bot.  This 3bot will manage information for an individual or organisation in a secure manner.  Information stored will be encrypted by the private key of the asymmetric key pair - only to be able to be decrypted by the public  key. All information in the 3bot will be signed by the private key of the asymmetric key pair.  Making information that is stored in the 3bot database accessible and readable by anyone with a verified source being you (or your identity)  This information can be encrypted or unencrypted.

#### System Administration
The 3bot will take care of all the required actions to reserve and use capacity on the TFGrid.  It will collect and advertise the capacity for the farmer.  Managing the capacity, interacting and agreeing with consumer robots to what needs to be deployed.

#### Crypto currency wallet
The crypto currency wallet can contain a number of different currencies.  These currencies can be used by the robot to trade / reserve capacity on the grid but also for other use cases.  THe robot has access to you crypto wallet to take care of any repeating payment that needs done in crypto.


#### A Database
The database part is a general purpose storage facility for data.  The 3bot will store pointers to where the actual text of binary objects is stored in a private and secure manner - the pointers towards where to find the actual object is stored in the 3bot database.

#### Chat Functionality
The chat functionality is there in the first place to present a usabel interface to interact with the robot.  The initial interface to the robot will be a chat interface providing a way to give the robot instructions.  The 3bot comes with an API for people to build their own interface as required.   

### A farmer 3bot.
The farmer 3bot will take care of all tasks required to operate a successful farm.  When capacity is being presented to the TFGrid it will inspect the hardware and report to the blockchain the amount of units represent and present in the capacity pool.  This includes number of compute units (CU), number of Storage Units (SU) and the number of Network Units (NU) required to connect this capacity pool.  The farmer 3Bot will announce this capacity and start multicasting the available and rented capacity.

### A verification 3bot.
The verification 3bot is has a specific talkj 
