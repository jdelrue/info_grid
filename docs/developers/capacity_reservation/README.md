# Reserve Capacity on the Threefold Grid

During the first beta phase of the public launch of the ThreeFold Grid, the beta tester will be able to reserve 2 kinds of workload on the grid.

- Zero-OS virtual machines
- S3 archive storage instances

**At the time of writing, everything happens on the TestNet network, don't send real TFT from the main network !!**

During the test net phase, reservations are valid for one week.
After one week your workload will not be available anymore and you will have to do a new reservation.
For this reason, **do not** put critical data on the grid during the test net phase, it's there to show and test, no for production.

## How to reserve some Capacity on the ThreeFold Grid

This document assumes you are familiar with Jumpscale and you already have
a Jumpscale X installation ready. If you don't, head to [Jumpscale X Setup](https://github.com/threefoldtech/jumpscaleX/blob/master/docs/Installation/get_started.md)

### Summary

1. [Create a TF Chain Wallet](#1-create-a-tfchain-wallet)
2. [Get some TFT from our Faucet](#2-get-some-tft-from-our-faucet)
3. [Register a ThreeBot](#3-register-a-threebot)
4. [Do a reservation](#4-do-a-reservation)
5. [Extend a reservation](#5-extend-a-reservation)
6. [Example of how to deploy container on 0-OS](#6-example-of-how-to-deploy-container-on-0-os)

### 1. Create a TFChain wallet

In kosmos, create a TFChain client.

**The `network_type` is important, it specifies if you want to use the TestNet.**
**You will play with real TFT otherwise, so be careful**

```python
c = j.clients.tfchain.new(name='my_client', network_type='TEST')
```

With your new client, create a TFChain wallet, if you don't already have one.
As soon as your wallet is created, please save your seed somewhere. This is the only way to get your
wallet back for recovery.

```python
JSX> w = c.wallets.new("my_wallet")
JSX> w.seed
'trust faculty frame ...'
```

If you already have one, you can recover it using its seed:

```python
JSX> w = c.wallets.new("my_wallet", seed="blast fortune level ...")
```

### 2. Get some TFT from our Faucet

Get the address of your wallet

```python
JSX> w.address
'0128b01507b17175f99fb4ca0fadf9115a3e85aae89b8dcdca9b610469281de9e849cf16c9afcdroot'
```

Head to https://faucet.testnet.threefoldtoken.com/ and fill the form with your wallet address.
Then check the balance on your wallet, after a couple of minutes you should see the `300 TFT` from the faucet.

```python
JSX> w.balance
wallet balance on height 251953 at 2019/04/12 09:39:36
0 TFT available and 0 TFT locked
Unconfirmed: 300 TFT available 0 TFT locked

[... wait some time ...]

JSX> w.balance
wallet balance on height 251955 at 2019/04/12 09:40:50
300 TFT available and 0 TFT locked
```

### 3. Register a ThreeBot

Creating a new 3bot record can be done as follows:

- `months`: for how long time do you want your 3bot, you pay for that amount of time (default is 1, can be from 1 to 24)
- `names`: list of names which will be used later to identify your 3bot
- `addresses`: list of addresses
- `key_index`: optional key index

```python
JSX> result = w.threebot.record_new(
    months=1,
    names=["my3bot.example"],
    addresses=["example.org"],
    key_index=0
)

# transaction that was created, signed and if possible submitted
JSX> result.transaction

# True if submitted, False if not possible due to lack of signatures in MultiSig Coin Inputs
JSX> result.submitted
```

For more details about the 3Bot registration, [go to the full documentation](https://github.com/threefoldtech/jumpscaleX/blob/development/Jumpscale/clients/blockchain/tfchain/README.md#create-and-manage-3bot-records)

**You'll need to wait sometime before your 3bot being available.**

### 4. Do a reservation

Example how to reserve a Zero-OS virtual machine:

```python
JSX> result = w.capacity.reserve_zos_vm(
    email='user@email.com',       # the email on which you will received the connection information
    threebot_id='my3bot.example', # your threebot id, it can be any of the names you gave to your 3bot
    location='farm_name',         # name of the farm or node id where to deploy the workload
    size=1,                       # each workload have a different size available
    duration=1)                   # number of months the reservation should be valid for
```

You can optionally supply an `organization` while doing the Zero-OS reservation. If supplied, then you can only access the created VM using a valid JWT of a user who is a member of this organization.


Example how to reserve a S3 archive storage:

```python
JSX> result = w.capacity.reserve_s3(
    email='user@email.com',       # the email on which you will received the connection information
    threebot_id='my3bot.example', # your threebot id, it can be any of the names you gave to your 3bot
    location='farm_name',         # name of the farm where to deploy the workload
    size=1,                       # each workload have a different size available
    duration=1                    # number of months the reservation should be valid for
)
```

Example how to reserve a 0-db namespace:

```python
JSX> result = w.capacity.reserve_zdb_namespace(
    email='user@email.com',       # the email on which you will received the connection information
    threebot_id='my3bot.example', # your threebot id, it can be any of the names you gave to your 3bot
    location='farm_name',         # name of the farm or node id where to deploy the workload
    size=5,                       # size of the namespace in GB
    disk_type='ssd',              # type of disk, can be 'ssd' or 'hdd'
    mode='seq',                   # the 0-db mode. It can be 'seq' or 'user', to know more about 0-db mode: https://github.com/threefoldtech/0-db#running-modes
    password=None,                 # optional password. If set your namespace will be require authentication
    duration=1                    # number of months the reservation should be valid for
)
```

Example how to reserve a reverse proxy:

After you have deployed some services on the grid in your virtual 0-os, you will want to expose it to the public internet.
To do this, you can reserve a reverse proxy that will forward the traffic coming to your chosen domain to the internal backend running in the grid.

Before creating the reservation, you need to update your DNS configuration and point your domain to the IP of our web gateway: `185.69.166.31`.

Example of DNS configuration. Here I created an A record for the subdomain `tube.zaibon.be` and pointed it to the IP of the web gateway:


![dns config](dns_config.png)

```python
JSX> result = w.capacity.reserve_reverse_proxy(
    email='user@email.com',        # the email on which you will received the connection information
    threebot_id='my3bot.example',  # your threebot id, it can be any of the names you gave to your 3bot
    domain="service.mydomain.com", # the domain to serve by the proxy, this domain needs to point public ip
    backend_urls=["http://10.244.25.13:8080"] # the list of backend URL of your service
)
```

The result of the reserve methods is a tuple containing the transaction and the submission status as a boolean.
You can check it on our [explorer](https://explorer.testnet.threefoldtoken.com/) by entering the transaction id in the `Search by hash` field of the explorer form or using the TF Chain client:

```python
transaction = c.transaction_get(result.transaction.id)
```

As soon as it is ready, usually within a few minutes, you will receive an email with the connection information.

### 5. Extend a reservation

The id of the transaction can also be used to extend the validity of a reservation.

```python
result = w.capacity.reservation_extend(
    transaction_id="1bdff90882cc437cb8b781c5eb296edbfdb79777564d70ec8f2120c37d8a7737", # the id of the transaction that was created as a result of the initial reservation (result.transaction.id in the section above)
    email='user@email.com', # the email on which you will received extension confirmation
    duration=1) # number of months you want to extend the reservation by.
```

The expiration of the reservation should never exceed that of the 3bot that was used to create the reservation.

If you want to list all transactions that were created whenever a reservation was done (not an extension), you can use method `reservations_transactions_list`.

```python
w.capacity.reservations_transactions_list()
- 1bdff90882cc437cb8b781c5eb296edbfdb79777564d70ec8f2120c37d8a7737
- 5b61c9eaa2d28778620d7f60630fceb2884a3948b2cf06d59a033a02cd747439
- ffce9a46a689eddfb69496a414e7df7a10f0c55bcf78e97122a85cdfd6da56e2
```

### Amount of TFT for each type of reservation

During the testnet phase, price per month will be calculated like:

- 1 TFT = 0.12 USD
- 1TB of Storage = 10 USD = 83.3 TFT
- 2 CPU / 4GB RAM = 10 USD = 83.3 TFT

| Type      | Size | Amount    | CPU | Memory | Storage   |
| --------- | ---- | --------- | --- | ------ | --------- |
| v0-OS        | 1    | 41.65 TFT | 1   | 2GiB   | 10 GiB    |
| v0-OS        | 2    | 83.3 TFT  | 2   | 4GiB   | 40 GiB    |
| S3           | 1    | 41.65 TFT | -   |   -    | 500 GiB   |
| S3           | 2    | 83.3 TFT  | -   |   -    | 1000 GiB  |
| Namespace    | chooser by user | Size in TB * 83.3 TFT
| Reverse proxy| -    | 10 TFT   | -   | -      | -       |

### 5. Example of how to deploy container on 0-OS

[Click here](examples) to see all the examples how to deploy some container on your virtual 0-OS
