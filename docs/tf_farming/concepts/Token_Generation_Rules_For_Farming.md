## Token Generation Rules For Farming

![](images/farmer.png)

A farmer earns tokens in 2 ways

- farming tokens : as a result of connecting IT hardware to the internet, TF Tokens are farmed
- cultivation tokens: as a result of selling capacity from the farming pools to TF Users.

This document describes how Farming Tokens are issued in more detail.

## goals

- TFTs are backed by [internet capacity](https://docs.grid.tf/threefold/info/src/branch/master/legal/definitions.md#it-capacity)
- Internet Capacity needs to be good enough
    - reliable hardware (good enough hd's and ssd's, because data is stored on them)
    - uptime needs to be good enough
- Internet Capacity needs to be everywhere (promote distribution)
- Avoid abuse e.g. dirty farming, e.g. people who just add capacity to get tokens with no intent to sell capacity )(basically people trying to cheat the system).
    
    
## 3 types of farming pools


### Unmanaged New

- [Definition of Unmanaged Capacity](https://docs.grid.tf/threefold/info/src/branch/master/legal/definitions.md#unmanaged-capacity)
- Uptime requirements
    - at least 99.5%, means max dowtime of +-4h per month
    - statistical information per farmer will be made available on TF Chain.
- Hardware requirements
    - only new hardware can be used, the TF Chain has a broad registered list of motherboards, cpu's, harddisk and ssd's 
    - any farmer can ask the Foundation to register new components, a large list of components is already pre-registered. Typically any mainstream hardware which can be bought in 2018 is registered.
- Farming of tokens
    - Amount of Farming tokens see rules of [creation of TFTs](https://docs.grid.tf/threefold/info/src/branch/master/concepts/threefold_principles.md#creation-of-tfts)
    - Difficulty level = 8
    - Farming Tokens above Initial IT Capacity of 200 CU and 300 SU only get released by [TF Chain](https://docs.grid.tf/threefold/info/src/branch/master/legal/definitions.md#tf-chain-tfc) from moment [Farming Pool](https://docs.grid.tf/threefold/info/src/branch/master/legal/definitions.md#threefold-farming-pool-fp) used for more than 30% (this specific rule is valid from June 1). They get accumulated from connection time though.
    - Cultivation tokens are available immediately.

### Managed

- [Definition of Managed Capacity](https://docs.grid.tf/threefold/info/src/branch/master/legal/definitions.md#managed-capacity)
- Managed capacity is mainly relevant for Hosters who want to go commercial and they need support and want to offer the highest possible uptime.
- - Uptime requirements
    - at least 99.5%, means max dowtime of +-4h per month, SLA (uptime) can be chosen by Farmer.
    - statistical information per farmer will be made available on TF Chain.
- Hardware requirements
    - Only selected new hardware can be used, the TF Chain has specifically for managed pools a registered list of motherboards, cpu's, harddisk and ssd's, this to guarantee best performance and uptime.
- Farming of tokens
    - Amount of tokens see rules of [creation of TFTs](https://docs.grid.tf/threefold/info/src/branch/master/concepts/threefold_principles.md#creation-of-tfts)
    - Difficulty level = 6
    - Farming Tokens above Initial IT Capacity of 400 CU and 400 SU only get released by [TF Chain](https://docs.grid.tf/threefold/info/src/branch/master/legal/definitions.md#tf-chain-tfc) from moment [Farming Pool](https://docs.grid.tf/threefold/info/src/branch/master/legal/definitions.md#threefold-farming-pool-fp) used for more than 30% (this specific rule is valid from June 1). They get accumulated from connection time though.
    - Cultivation tokens are available immediately.


### Unmanaged Refurb

- [Definition of Unmanaged Capacity](https://docs.grid.tf/threefold/info/src/branch/master/legal/definitions.md#unmanaged-capacity)
- Uptime requirements
    - best effort, statistical information per farmer will be made available on TF Chain.
- Hardware requirements
    - Any hardware can be used, does not matter how old or new
- Farming of tokens
    - Amount of tokens see rules of [creation of TFTs](https://docs.grid.tf/threefold/info/src/branch/master/concepts/threefold_principles.md#creation-of-tfts)
    - Difficulty level = 8
    - Farming Tokens above Initial IT Capacity of 100 CU and 100 SU only get released by [TF Chain](https://docs.grid.tf/threefold/info/src/branch/master/legal/definitions.md#tf-chain-tfc) from moment [Farming Pool](https://docs.grid.tf/threefold/info/src/branch/master/legal/definitions.md#threefold-farming-pool-fp) used for more than 40% (this specific rule is valid from June 1). They get accumulated from connection time though.


    
## Existing Cooperatives active today !

**You can become a TF Farmer today by using existing TF Cooperatives.**

- see [inital cooperative directory](https://docs.grid.tf/threefold/info/src/branch/master/cooperatives.md)

You can be part of these cooperatives, buy your hardware and be your own farmer. Please contact them for specific details. Each cooperative has their own commercial offerings to allow you to become a farmer starting today.

Do you want to create your own cooperative, please contact the ThreeFold Foundation, we can help you how to get started.

## I want to become a TF Farmer myself (without cooperative), what to do?

Do you want to become your own TF Farmer, please become part of our early adopter program and we get you initiated in everything you need to know to be most successful as a TF Farmer. We will start mid April with online sessions. Before June 1 any TF Farmer hardware will be connected to our testnet (is our TF Grid made for testing purposes), this way your hardware capacity can be validated. 

Your TF Hardware pool will be registered in the official TF Chain starting June 1.

The ThreeFold Foundation will also be organizing technical sessions for people who want to learn how to use the capacity of the TF Grid in most optimal way. This will happen face to face as well as online.

## TF Farmer registration rules during June-July 2018

During the startup period of the TF Grid we start with predefined register token pricing (till end July 2018).
These rules are registered in the TF Chain.

Important: TF Token Pricing in public market can be different.

- Token generation rules see this [link](https://docs.grid.tf/threefold/info/src/branch/master/concepts/threefold_principles.md#creation-of-tfts)
- TFT token price used for registration = US $0.1
- Capacity Measurement see below
- During this startup period the sales prices of SU/CU are fixed:

| Farming Pool Type | Compute Unit CU | Storage Unit SU |
| ------ | ------ | ------ |
| Unmanaged Refurb | USD 10 | USD 10 |
| Unmanaged New | USD 12 | USD 12 |
| Managed | USD 20 | USD 12 |


## Capacity Measurements

ZeroOS measures [**Resource Units**](https://docs.grid.tf/threefold/info/src/branch/master/concepts/resource_units.md) and registers this in the TF Chain.

| unit type | description | code |
| --- | --- | --- |
| core unit     | 1 logical core (hyperthreaded core) | CRU |
| mem unit      | 1 GB mem	| MRU |
| hd unit       | 1 GB raw storage capacity | HRU |
| ssd unit      | 1 GB	raw storage capacity | SRU |

[Cloud Unit](https://docs.grid.tf/threefold/info/src/branch/master/concepts/cloud_units.md) capacity is calculated as follows:

| cloud unit type | calculation | description |
| --- | --- | --- |
| 1 SU | #HRU / 1090 | nr of HRU (GB HD capacity) / 1093 |
| 1 SU | #SRU / 135 | nr of SRU (SSD HD capacity) / 135 |
| 1 CU | min(#CRU,#MRU/4,#SRU/20) * 0.9 | minimum of nr of cores, mem /4 and min requirement of 20 GB SSD per CU, with 10% overhead |

The 1.09 and 135 are calculated as follows (for details see following [sheet](https://docs.google.com/spreadsheets/d/1TsrG_bvrPl1I4q6FLScLwZDfe5HJ_DWOfY9RjZ8fZI4/edit#gid=75337142))

- 1090 = (70% Archive Capacity + 30% NAS Capacity) / 0.75 
    -   0.75 is overhead for redundacy and some unused storage capacity
-   135 = 50% temp ssd capacity + 40% std ssd capacity which is redundant + 10% high performance ssd capacity / 0.6
    -   0.6 is estimate of unused SSD capacity, what will not be used in future

    
These conversion parameters can be redefined together with difficulty level by 60% majority vote of ThreeFold Ambassadors.

These rules are running as smart apps inside our TF Chain.

A sheet exists to help you simulate your capacity and token creation, please contact the TF Foundation for help. 
Link of this spreadsheet is [here](https://docs.google.com/spreadsheets/d/1TsrG_bvrPl1I4q6FLScLwZDfe5HJ_DWOfY9RjZ8fZI4/edit#gid=75337142)

    
## imposed retrospectively = time of registration counts

At registration of the capacity the following parameters are registered

| name | description |
| ---- | ---- |
| tokens | tokens rewarded per 30 days is result of calculation and most important param |
| token price | token price at the moment of registration |
| sales price cloud units | sales price of CU & SU for chosen Farming Pool Type at registration |
| resource conversion units | conversion units from resource to cloud units (1090, 135, ...) |
| uptime = SLA |  only relevant for managed Resource Pool, min required uptime (for unmanaged new = 99.5%) |
| date | registration date |
| min perc utilization | minimum utilization degree before farming tokens are rewarded |
| period duration | fixed on 30 days |
| farming periods | nr of periods the farming tokens are rewarded | 
| farming pool size | in CU/SU and CRU/MRU/HRU/SRU |


Some of above parameters are fixed & pre-defined during startup period (until end of July 2018), see above.

Once registered the amount of tokens given per month and accumulated if the min required utilization has not been achieved yet are fixed by this digital contract registered in the TF Chain. 
Even if the TF Ambassadors decide to change some of the parameters this will not have an impact on already registered TF Farming pools.

If a TF Farming pool get unregistered e.g. because of 3 months breach of uptime then this contract becomes void.




