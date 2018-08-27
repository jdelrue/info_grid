![](../images/digitalme.jpg)

3bot - AKA digitalME

The 3bot is a robot that can assume a number of different roles.  The 3bot is meant to be the worker on the ThreeFold grid caring and maintaining all tasks required. There are a few type of 3bots which can be categorized as generic (or system) and personal 3bots.

The 3bot is a generic purpose framework of worker that runs in a zero-os container.  IT requires a zero-os operating system and therefore can run on the TF Grid on any of the participating nodes but is can also on off the grid nodes in virtual machines running zero-os.

Personal 3bot
You personal 3bot will act on your behalf and collects and manages information of you to perform tasks. The number of tasks that is is able to do for you will expand but for now it will be able to do the following things for you:
Generic User authentication and authorisation
Systems administrator
TFT Wallet
<<look up the 4th task>>

User Authentication and authorisation.
The user authentication mechanism is based on blockchain technology.  At this point in time the TF Grid runs 2 independent blockchains.  The first one is the financial transaction blockchain, tfchain and the second one is one dedicated to user authentication. This blockchain contains other information than transactional information of TFT (or any other cryptocurrency).  This blockchain contains information that allows for a peer-to-peer user authentication and authorisation mechanism where there is no central database.  Even further to this sensitive personal information is not stored in the blockchain (as all blockchains by design have all stored information visible to anyone).  This blockchain <<need to come up with a name for this>> has the following information per entity (person, organisation, etc):
A identity number (unique)
A name in the format of <<5 bytes>>:<<5 bytes>>
The public key of a asymmetric private public key pair.
A number of  IP addresses

All other, more private information, is stored in a personal 3bot.  This 3bot will manage information for an individual or organisation in a secure manner.  Information stored will be:
Unsigned Encrypted by the private key of the asymmetric key pair - only to be able to be decrypted by the public  key.
Signed by the private key of the asymmetric key pair.  Making information that is stored in the 3bot database accessible and readable by anyone.  This information can be encrypted or unencrypted.
