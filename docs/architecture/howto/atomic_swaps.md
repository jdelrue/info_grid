# Atomic Cross-chain Trading

![](https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc623e7131495d44392a2cf78c100df6&auto=format&fit=crop&w=1349&q=80)

In what follows you see all steps involved in Bob (the "initiator") buying **42 TFT** (ThreeFold Token) from Alice (the "participant"), paying with **10 ROC** (Rivine One Coin). This transaction is done using the **cross-chain atomic swapping** algorithm, documented [here](https://github.com/rivine/rivine/blob/master/doc/atomicswap/atomicswap.md).

The below requires:
- The **ThreeFold Chain client** (`tfchainc`) and the **Rivine Chain client** (`rivinec`) command lines tools
- Locally running ThreeFold and Rivine blockchain nodes, achieved by having the Chain daemons running in the background 
- Access to the ThreeFold Chain and Rivine Chain Explorers, here through the chain client command line tools

Soon, in an update to this documentation, we will show how to do the same using Bitcoin instead of ROC.

We start by creating aliases for the chain client command line tools.

First for the Rivine, respectively aliases for accessing the node of Rob, Alice and the Rivine Explorer:
```bash
alias roc1="rivinec --addr localhost:23110"
alias roc2="rivinec --addr localhost:23120"
alias roce="rivinec --addr localhost:23130"
```

And for ThreeFold, respectively aliases for accessing the node of Rob, Alice and the ThreeFold Explorer:
```bash
alias tft1="tftchainc --addr localhost:23210"
alias tft2="tftchainc --addr localhost:23220"
alias tfte="tftchainc --addr localhost:23230"
```

Then we go through following steps:
- [Bob checks his ROC wallet](#1)
- [Alice checks her ROC wallet](#2)
- [Bob creates a new ROC address for sending 10 ROC](#3)
- [Alice creates a new ROC address for receiving 10 ROC](#4)
- [Bob initiates the transaction for sending 10 ROC](#5)
- [Alice checks the transaction information](#6)
- [Bob checks his TFT wallet](#7)
- [Alice checks her TFT wallet](#8)
- [Alice creates a new TFT address for sending the 42 TFT](#9)
- [Bob creates a new TFT address for receiving the 42 TFT](#10)
- [Alice initiates a transaction to send the 42 TFT](#11)
- [Bob checks his TFT and ROC wallets](#12)
- [Alice checks his TFT and ROC wallets](#13)
- [Bob checks the block height of his ThreeFold blockchain node](#14)
- [Alice checks the block height of her ThreeFold blockchain node](#15)
- [Check the Explorer for the same information](#16)
- [After a while Alice checks again her TFT wallet](#17)
- [Bob also checks his TFT wallet](#18)
- [Bob checks the info received information from Alice, through the explorer](#19)
- [Bob checks his wallets](#20)
- [Alice checks her wallets](#21)
- [Bob claims the 42 TFT](#22)
- [Alice checks her wallets](#23)
- [Bob checks his wallets](#24)
- [Alice checks the Explorer in order to get the secret](#25)
- [Alice is now ready to receive the ROCs](#26)
- [Check the wallets of Bob](#27)
- [Check the wallets of Alice](#28)



<a id="1"></a>
## Bob checks his ROC wallet

```bash
roc1 wallet
Wallet status:                                                                                                                                             
Encrypted, Unlocked                                                                                    
Confirmed Balance:   1000 ROC                                                                                                                             
Unconfirmed Delta:   + 0 ROC                                                                                                                                
BlockStakes:         0 BS
```

<a id="2"></a>
## Alice checks her ROC wallet

```bash
roc2 wallet
Wallet status:                                                                                                                                              
Encrypted, Unlocked                                                                                                                                         
Confirmed Balance:   0 ROC                                                                                                                                  
Unconfirmed Delta:   + 0 ROC                                                                                                                                
BlockStakes:         0 BS 
```
<a id="3"></a>
## Bob creates a new ROC address for sending 10 ROC

```bash
roc1 wallet address                                                                                                                                         
Created new address: 0141bc15a4b95b00a80e49c83c65d5b282e220ae4eb2a75df3cc426db3dd9c5ace6f3d03443bb4
```

<a id="4"></a>
## Alice creates a new ROC address for receiving 10 ROC

```bash
roc2 wallet address                                                                                                                                         
Created new address: 011681dcd76df0f59669f4aa20978fc94072c7e51d86b4ee28b0949f8553d8f02fc4ea1969f975
```

<a id="5"></a>
## Bob initiates the transaction for sending 10 ROC

First check how to do it:
```bash
roc1 atomicswap initiate                                                                                                                                    
Usage:                                                                                                                                                          
    rivinec atomicswap initiate dest amount [flags]

Flags                                                                            
    -d, --duration duration   the duration of the atomic swap contract, the amount of time the receiver has to collect (default 48h0m0s)                        
    --src value               optionally define a source address that is to be used for refunding purposes, one will be generated for you if none is given                                                                                                                                                                                                                                                                                                                         
Global Flags:                                                                                                                                                   
    -a, --addr string   which host/port to communicate with (i.e. the host/port Rivined is listening on) (default "localhost:23110")
```

Now let's do it:
```bash
$ roc1 atomicswap initiate 011681dcd76df0f59669f4aa20978fc94072c7e51d86b4ee28b0949f8553d8f02fc4ea1969f975 10 --src 0141bc15a4b95b00a80e49c83c65d5b282e220ae4eb2a75df3cc426db3dd9c5ace6f3d03443bb4

Contract address: 02ecc57d75b1ed1601e46b69c311b7713ceb113961029273d880c1260d9dc946ee98758b522bfd                                                            
Contract value: 10 ROC                                                                                                                                      
Recipient address: 011681dcd76df0f59669f4aa20978fc94072c7e51d86b4ee28b0949f8553d8f02fc4ea1969f975                                                           
Refund address: 0141bc15a4b95b00a80e49c83c65d5b282e220ae4eb2a75df3cc426db3dd9c5ace6f3d03443bb4                                                                                                                                                                                                                          
Hashed Secret: 39586302ea041b13820e6712dd6fdefa93b217bf2db5b89bca5cff664c6b9cbe                                                                             
Secret: 5ee89a7850d980d0467e084a4a61ec4a7edcf1f93117c85c867502d1255c06fc                                                                                                                                                                                                                                                
Locktime: 1522622518 (2018-04-02 00:41:58 +0200 CEST)                                                                                                       
Locktime reached in: 47h59m59.75505927s                                                                                                                                                                                                                                                                                
Publish atomic swap (initiating) transaction? [Y/N] yes
published contract transaction                                                                                                                              
OutputID: d5f4c028bff032c331088c19a50c0c5d0dc9341af287031ce80648514eea7b9f
```

> Bob (roc1) shares now following information with Alice (roc2):                                                                                                                                                                                                                  
    + outputID                                                                                                                                                                                                                                                                      
    + sender and receiver address (== unlock hash)                                                                                                                                                                                                                                  
    + timelock (== locktime)                                                                                                                                                                                                                                                        
    + hashed secret                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
> Bob (roc1) should NOT share the secret with Alice(roc2) at this point!!!!!! 

<a id="6"></a>
## Alice checks the transaction information

Check how to do it:
```bash
roce atomicswap audit                                                                                                                                                                                                                                         
Usage:

Rrivinec atomicswap audit outputid|unlockhash dest src timelock hashedsecret [amount] [flags]

Global Flags:
    -a, --addr string   which host/port to communicate with (i.e. the host/port Rivined is listening on) (default "localhost:23110")
```

Let's do it:
```bash
roce atomicswap audit d5f4c028bff032c331088c19a50c0c5d0dc9341af287031ce80648514eea7b9f 011681dcd76df0f59669f4aa20978fc94072c7e51d86b4ee28b0949f8553d8f02fc4ea1969f975 0141bc15a4b95b00a80e49c83c65d5b282e220ae4eb2a75df3cc426db3dd9c5ace6f3d03443bb4 1522622518 39586302ea041b13820e6712dd6fdefa93b217bf2db5b89bca5cff664c6b9cbe 10                                                                                                                                                                                                         
An unspend atomic swap contract could be found for the given outputID,
and the given contract information matches the found contract\'s information, all good!

Contract address: 02ecc57d75b1ed1601e46b69c311b7713ceb113961029273d880c1260d9dc946ee98758b522bfd
Recipient address: 011681dcd76df0f59669f4aa20978fc94072c7e51d86b4ee28b0949f8553d8f02fc4ea1969f975
Refund address: 0141bc15a4b95b00a80e49c83c65d5b282e220ae4eb2a75df3cc426db3dd9c5ace6f3d03443bb4
Hashed Secret: 39586302ea041b13820e6712dd6fdefa93b217bf2db5b89bca5cff664c6b9cbe
Locktime: 1522622518 (2018-04-02 00:41:58 +0200 CEST)
Locktime reached in: 47h57m29.144658028s
```

Alice (roc2) agrees with the contract and can see it exists and is unspend!
She can also see that she has plenty of time to claim it (47+h).
Now we can move over to tfchain, where Alice will start as the participant.
Both parties will also have to share their addresses on this chain.
Alice (tft2) has for now 1000 TFT, while Bob (tft1) still has none.
After all, Bob wants to buy TFT...  

<a id="7"></a>
## Bob checks his TFT wallet
```bash
tft2 wallet                                                                                                                                                                                                                                                   
Wallet status:
Encrypted, Unlocked
Confirmed Balance:   1000 TFT
Unconfirmed Delta:   + 0 TFT
BlockStakes:         0 BS  
```

<a id="8"></a>
## Alice checks her TFT wallet
```bash
tft1 wallet
Wallet status:
Encrypted, Unlocked
Confirmed Balance:   0 TFT 
Unconfirmed Delta:   + 0 TFT
BlockStakes:         0 BS  
```
<a id="9"></a>
## Alice creates a new TFT address for sending the 42 TFT

```bash
tft2 wallet address
Created new address: 014adb25caf17a75d55b2a21e607370ffa126e3c0ca66245d537f3352a797c44360a19ce8b1d76
```
<a id="10"></a>
## Bob creates a new TFT address for receiving the 42 TFT

```bash
tft1 wallet address
Created new address: 01e93d37652041bda699f8f00b1cb8a9d91c872a4065c8ffaeb00df15d480c41f4621ef6431343 
```
<a id="11"></a>
## Alice initiates a transaction to send the 42 TFT

Check how to do it:
```bash
tft2 atomicswap participate
Usage:
tfchainc atomicswap participate dest amount hashedsecret [flags]

Flags:
    -d, --duration duration     the duration of the atomic swap contract, the amount of time the receiver has to collect (default 24h0m0s)
     -h, --help                 help for participate
     --src UnlockHash           optionally define a source address that is to be used for refunding purposes, one will be generated for you if none is given
     
Global Flags:
    -a, --addr string   which host/port to communicate with (i.e. the host/port tfchaind is listening on) (default "localhost:23110")
```

Let's do it:
```bash
tft2 atomicswap participate 01e93d37652041bda699f8f00b1cb8a9d91c872a4065c8ffaeb00df15d480c41f4621ef6431343 42 39586302ea041b13820e6712dd6fdefa93b217bf2db5b89bca5cff664c6b9cbe --src 014adb25caf17a75d55b2a21e607370ffa126e3c0ca66245d537f3352a797c44360a19ce8b1d76

Contract address: 02ec2e3be81d311d4e3b009a5a0d92bd417f4bfd8463c36ce50065329a56ceffe02c357f5e8a8e
Contract value: 42 TFT
Recipient address: 01e93d37652041bda699f8f00b1cb8a9d91c872a4065c8ffaeb00df15d480c41f4621ef6431343
Refund address: 014adb25caf17a75d55b2a21e607370ffa126e3c0ca66245d537f3352a797c44360a19ce8b1d76
Hashed Secret: 39586302ea041b13820e6712dd6fdefa93b217bf2db5b89bca5cff664c6b9cbe
Locktime: 1522536430 (2018-04-01 00:47:10 +0200 CEST)
Locktime reached in: 23h59m59.334535932s

Publish atomic swap (participation) transaction? [Y/N] Yes
published contract transaction

OutputID: 63bebff30ae1a270b019dbce7f56a1e270475b6ee8deb538d2e1a9a83174c102
```

Alice (tft2) now shows the following info to Bob (tft1) on the same side channel:
    + output ID
    + sender and receiver address
    + time lock
    + hashed secret
    
Yes, basically the same kind of info as Bob was sharing for the initial contract.
Bob will audit the contract of Alice once he receives the info. 
<a id="12"></a>
## Bob checks his TFT and ROC wallets

TFT wallet:
```bash
tft1 wallet

Wallet status:

Encrypted, Unlocked
Confirmed Balance:   0 TFT
Unconfirmed Delta:   + 0 TFT
BlockStakes:         0 BS 
```

ROC wallet:
```bash
roc1 wallet                                                                                                                                                                                                                                              
Wallet status:
Encrypted, Unlocked
Confirmed Balance:   989 ROC
Unconfirmed Delta:   + 0 ROC
BlockStakes:         0 BS
```
<a id="13"></a>
## Alice checks her TFT and ROC wallets

TFT wallet:
```bash
tft2 wallet 
Wallet status:
Encrypted, Unlocked
Confirmed Balance:   1000 TFT
Unconfirmed Delta:   - 42.1 TFT
BlockStakes:         0 BS
```

ROC wallet:
```bash
roc2 wallet
Wallet status:
Encrypted, Unlocked
Confirmed Balance:   0 ROC
Unconfirmed Delta:   + 0 ROC
BlockStakes:         0 BS
```
<a id="14"></a>
## Bob checks the block height of his ThreeFold blockchain node 

```bash
tft1
Synced: No
Height: 230
Progress (estimated): 0% 
```
<a id="15"></a>
## Alice checks the block height of her ThreeFold blockchain node

```bash
tft2
Synced: No
Height: 230
Progress (estimated): 0%
```
<a id="16"></a>
## Check the Explorer for the same information

```bash
tfte
Synced: No
Height: 230
Progress (estimated): 0%       
```
<a id="17"></a>
## After a while Alice checks again her TFT wallet

```bash
tft2 wallet
Wallet status:
Encrypted, Unlocked
Confirmed Balance:   957.9 TFT
Unconfirmed Delta:   + 0 TFT
BlockStakes:         0 BS
```
<a id="18"></a>
## Bob also checks his TFT wallet

```bash
tft1 wallet
Wallet status:
Encrypted, Unlocked
Confirmed Balance:   0 TFT
Unconfirmed Delta:   + 0 TFT
BlockStakes:         0 BS 
```
<a id="19"></a>
## Bob checks the info received information from Alice, through the explorer

Check how to:
```bash
tfte atomicswap audit
Usage:
tfchainc atomicswap audit outputid|unlockhash dest src timelock hashedsecret [amount] [flags]

Flags:
    -h, --help   help for audit
    
Global Flags:
    -a, --addr string   which host/port to communicate with (i.e. the host/port tfchaind is listening on) (default "localhost:23110")
```

Let's do it, using the `outputid`, not the `unlockhash`:
```bash
tfte atomicswap audit 63bebff30ae1a270b019dbce7f56a1e270475b6ee8deb538d2e1a9a83174c102 01e93d37652041bda699f8f00b1cb8a9d91c872a4065c8ffaeb00df15d480c41f4621ef6431343 014adb25caf17a75d55b2a21e607370ffa126e3c0ca66245d537f3352a797c44360a19ce8b1d76 1522536430 39586302ea041b13820e6712dd6fdefa93b217bf2db5b89bca5cff664c6b9cbe 42
An unspend atomic swap contract could be found for the given outputID,
and the given contract information matches the found contract\'s information, all good! :)

Contract address: 02ec2e3be81d311d4e3b009a5a0d92bd417f4bfd8463c36ce50065329a56ceffe02c357f5e8a8e
Recipient address: 01e93d37652041bda699f8f00b1cb8a9d91c872a4065c8ffaeb00df15d480c41f4621ef6431343
Refund address: 014adb25caf17a75d55b2a21e607370ffa126e3c0ca66245d537f3352a797c44360a19ce8b1d76
Hashed Secret: 39586302ea041b13820e6712dd6fdefa93b217bf2db5b89bca5cff664c6b9cbe
Locktime: 1522536430 (2018-04-01 00:47:10 +0200 CEST)
Locktime reached in: 23h53m35.503495388s
```

Contract on ThreeFold chain was created, and Bob agrees with it.

- output id exist
- output is not yet used as an input, so not yet spend
- ...
- check the amount

Now we come to the final part of the story. Bob will now claim these sappy threefold tokens, but by doing so he'll have to publish his secret, allowing alice to also claim her well deserved rivine coin

<a id="20"></a>
## Bob checks his wallets

```bash
tft1 wallet
Wallet status:
Encrypted, Unlocked
Confirmed Balance:   0 TFT
Unconfirmed Delta:   + 0 TFT
BlockStakes:         0 BS
```

```bash
roc1 wallet

Wallet status:
Encrypted, Unlocked
Confirmed Balance:   989 ROC
Unconfirmed Delta:   + 0 ROC
BlockStakes:         0 BS
```
<a id="21"></a>
## Alice checks her wallets

```bash
tft2 wallet
Wallet status:
Encrypted, Unlocked
Confirmed Balance:   957.9 TFT
Unconfirmed Delta:   + 0 TFT
BlockStakes:         0 BS
```

```bash
roc2 wallet
Wallet status:
Encrypted, Unlocked
Confirmed Balance:   0 ROC
Unconfirmed Delta:   + 0 ROC
BlockStakes:         0 BS
```
<a id="22"></a>
## Bob claims the 42 TFT

Check how to:
```hash
tft1 atomicswap claim

    tfchainc atomicswap claim outputid secret dest src timelock hashedsecret amount [flags]

Flags:
    --audit   optionally audit the given contract information against the known contract info on the used explorer node
    -h, --help    help for claim

Global Flags:
    -a, --addr string   which host/port to communicate with (i.e. the host/port tfchaind is listening on) (default "localhost:23110")
Invalid amount of positional arguments given!
```

Let's do it:
```bash
tft1 atomicswap claim 63bebff30ae1a270b019dbce7f56a1e270475b6ee8deb538d2e1a9a83174c102 5ee89a7850d980d0467e084a4a61ec4a7edcf1f93117c85c867502d1255c06fc 01e93d37652041bda699f8f00b1cb8a9d91c872a4065c8ffaeb00df15d480c41f4621ef6431343 014adb25caf17a75d55b2a21e607370ffa126e3c0ca66245d537f3352a797c44360a19ce8b1d76 1522536430 39586302ea041b13820e6712dd6fdefa93b217bf2db5b89bca5cff664c6b9cbe 42 --audit

An unspend atomic swap contract could be found for the given outputID,
and the given contract information matches the found contract\'s information, all good! :)
Contract address: 02ec2e3be81d311d4e3b009a5a0d92bd417f4bfd8463c36ce50065329a56ceffe02c357f5e8a8e
Recipient address: 01e93d37652041bda699f8f00b1cb8a9d91c872a4065c8ffaeb00df15d480c41f4621ef6431343
Refund address: 014adb25caf17a75d55b2a21e607370ffa126e3c0ca66245d537f3352a797c44360a19ce8b1d76
Hashed Secret: 39586302ea041b13820e6712dd6fdefa93b217bf2db5b89bca5cff664c6b9cbe
Locktime: 1522536430 (2018-04-01 00:47:10 +0200 CEST)
Locktime reached in: 23h51m3.585697173s
Publish atomic swap claim transaction? [Y/N] Yes
Published atomic swap claim transaction!
Transaction ID: bc4743bd4476acfa91252d4ad660a6ee5d9993d30c69fd3a44d9483ce9e6f967
> NOTE that this does NOT mean for 100% you\'ll have the money!
> Due to potential forks, double spending, and any other possible issues your
> claim might be declined by the network. Please check the network
> (e.g. using a public explorer node or your own full node) to ensure> your payment went through. If not, try to audit the contract (again).
```

Bob now claimed these tokens, he is a bit mean though, and doesn't share the secret on the side channel... Is that it? Nope! Alice will just wait and than get the secret directly from ThreeFold Chain itself! Using an explorer...

Bob doesn't even need to give the outputID, Alice can do it all using her own outputID, take that Bob! Ha! What a mean guy, last time I do business with him!

<a id="23"></a>
## Alice checks her wallets

```bash
tft2 wallet
Wallet status:
Encrypted, Unlocked
Confirmed Balance:   957.9 TFT
Unconfirmed Delta:   + 0 TFT
BlockStakes:         0 BS
```

```bash
roc2 wallet
Wallet status:
Encrypted, Unlocked
Confirmed Balance:   0 ROC
Unconfirmed Delta:   + 0 ROC
BlockStakes:         0 BS
```
<a id="24"></a>
## Bob checks his wallets

```bash
tft1 wallet
Wallet status:
Encrypted, Unlocked
Confirmed Balance:   0 TFT
Unconfirmed Delta:   + 41.9 TFT
```

```bash
roc1 wallet
Wallet status:
Encrypted, Unlocked
Confirmed Balance:   989 ROC
Unconfirmed Delta:   + 0 ROC
BlockStakes:         0 BS
```

<a id="25"></a>
## Alice checks the Explorer in order to get the secret

Check how to:
```bash
tfte atomicswap extractsecret
Usage:
tfchainc atomicswap extractsecret outputid [hashedsecret] [flags]

Flags:
    -h, --help   help for extractsecret
    
Global Flags:
    -a, --addr string   which host/port to communicate with (i.e. the host/port tfchaind is listening on) (default "localhost:23110")
```


Do it:
```bash
tfte atomicswap extractsecret 63bebff30ae1a270b019dbce7f56a1e270475b6ee8deb538d2e1a9a83174c102 39586302ea041b13820e6712dd6fdefa93b217bf2db5b89bca5cff664c6b9cbe
Cannot extract secret! Atomic swap contract has not yet been claimed!
```

Wait and try again:
```bash
tfte atomicswap extractsecret 63bebff30ae1a270b019dbce7f56a1e270475b6ee8deb538d2e1a9a83174c102 39586302ea041b13820e6712dd6fdefa93b217bf2db5b89bca5cff664c6b9cbe
Atomic swap contract was claimed by recipient! Success! :)
Extracted secret: 5ee89a7850d980d0467e084a4a61ec4a7edcf1f93117c85c867502d1255c06fc
```
<a id="26"></a>
## Alice is now ready to receive the 10 ROC

First let's see the current status of the ROC wallets:

Bob:
```bash
roc1 wallet
Wallet status:
Encrypted, Unlocked
Confirmed Balance:   989 ROC
Unconfirmed Delta:   + 0 ROC
BlockStakes:         0 BS
```

Alice:
```bash
roc2 wallet
allet status:
Encrypted, Unlocked
Confirmed Balance:   0 ROC
Unconfirmed Delta:   + 0 ROC
BlockStakes:         0 BS
```

Now claim them. checking how:
```bash
roc2 atomicswap claim
Usage:
rivinec atomicswap claim outputid secret dest src timelock hashedsecret amount [flags]

Flags:
    --audit   optionally audit the given contract information against the known contract info on the used explorer node

Global Flags:
    -a, --addr string   which host/port to communicate with (i.e. the host/port Rivined is listening on) (default "localhost:23110")
```

...

```bash
roce atomicswap audit d5f4c028bff032c331088c19a50c0c5d0dc9341af287031ce80648514eea7b9f 011681dcd76df0f59669f4aa20978fc94072c7e51d86b4ee28b0949f8553d8f02fc4ea1969f975 0141bc15a4b95b00a80e49c83c65d5b282e220ae4eb2a75df3cc426db3dd9c5ace6f3d03443bb4 1522622518 39586302ea041b13820e6712dd6fdefa93b217bf2db5b89bca5cff664c6b9cbe 10

An unspend atomic swap contract could be found for the given outputID,
and the given contract information matches the found contract\'s information, all good! :)

Contract address: 02ecc57d75b1ed1601e46b69c311b7713ceb113961029273d880c1260d9dc946ee98758b522bfd
Recipient address: 011681dcd76df0f59669f4aa20978fc94072c7e51d86b4ee28b0949f8553d8f02fc4ea1969f975
Refund address: 0141bc15a4b95b00a80e49c83c65d5b282e220ae4eb2a75df3cc426db3dd9c5ace6f3d03443bb4
Hashed Secret: 39586302ea041b13820e6712dd6fdefa93b217bf2db5b89bca5cff664c6b9cbe
Locktime: 1522622518 (2018-04-02 00:41:58 +0200 CEST)
Locktime reached in: 47h41m10.359794024s  
```

Check theRivine wallet of Bob:
```bash
roc1 wallet

Wallet status:
Encrypted, Unlocked
Confirmed Balance:   989 ROC
Unconfirmed Delta:   + 0 ROC
BlockStakes:         0 BS
```

Check the Rivine wallet of Alice:
```bash
roc2 wallet

Wallet status:
Encrypted, Unlocked
Confirmed Balance:   0 ROC
Unconfirmed Delta:   + 0 ROC
BlockStakes:         0 BS 
```

And now finally the claim:

```bash
roc2 atomicswap claim d5f4c028bff032c331088c19a50c0c5d0dc9341af287031ce80648514eea7b9f 5ee89a7850d980d0467e084a4a61ec4a7edcf1f93117c85c867502d1255c06fc 011681dcd76df0f59669f4aa20978fc94072c7e51d86b4ee28b0949f8553d8f02fc4ea1969f975 0141bc15a4b95b00a80e49c83c65d5b282e220ae4eb2a75df3cc426db3dd9c5ace6f3d03443bb4 1522622518 39586302ea041b13820e6712dd6fdefa93b217bf2db5b89bca5cff664c6b9cbe 10

Contract address: 02ecc57d75b1ed1601e46b69c311b7713ceb113961029273d880c1260d9dc946ee98758b522bfd
Contract value: 10 ROC
Recipient address: 011681dcd76df0f59669f4aa20978fc94072c7e51d86b4ee28b0949f8553d8f02fc4ea1969f975
Refund address: 0141bc15a4b95b00a80e49c83c65d5b282e220ae4eb2a75df3cc426db3dd9c5ace6f3d03443bb4
Hashed Secret: 39586302ea041b13820e6712dd6fdefa93b217bf2db5b89bca5cff664c6b9cbe
Secret: 5ee89a7850d980d0467e084a4a61ec4a7edcf1f93117c85c867502d1255c06fc
Locktime: 1522622518 (2018-04-02 00:41:58 +0200 CEST)
Locktime reached in: 47h40m10.301713728s
Publish atomic swap claim transaction? [Y/N] Y

Published atomic swap claim transaction!
Transaction ID: a5e20acd39bea4e8a1a5a9012198fa425e8398dcd2e5985dd289973547241f9e
    > NOTE that this does NOT mean for 100% you\'ll have the money!
    > Due to potential forks, double spending, and any other possible issues your
    > claim might be declined by the network. Please check the network
    > (e.g. using a public explorer node or your own full node) to ensure
    > your payment went through. If not, try to audit the contract (again).
```

This is the end of the story,
Bob managed to buy 42 TFT from Alice, giving 10 ROC in exchange.

Is that a fair exchange price? Why not!
Let's check the wallets one last time...

<a id="27"></a>
## Check the wallets of Bob

Rivine:
```bash
roc1 wallet
Wallet status:
Encrypted, Unlocked
Confirmed Balance:   989 ROC
Unconfirmed Delta:   + 0 ROC
BlockStakes:         0 BS
```

ThreeFold:
```bash
tft1 wallet
Wallet status:Encrypted, Unlocked
Confirmed Balance:   41.9 TFT
Unconfirmed Delta:   + 0 TFT
BlockStakes:         0 BS
```
<a id="28"></a>
## Check the wallets of Alice

Rivine:
```bash
roc2 wallet
Wallet status:
Encrypted, Unlocked
Confirmed Balance:   9 ROC
Unconfirmed Delta:   + 0 ROC
BlockStakes:         0 BS       
```

ThreeFold:
```bash
tft2 wallet
Wallet status:
Encrypted, Unlocked
Confirmed Balance:   957.9 TFT
Unconfirmed Delta:   + 0 TFT
BlockStakes:         0 BS 
```