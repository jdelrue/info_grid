## Token Generation Rules

![](../images/farmer.png)

A farmer earns tokens in 2 ways:

- Farming tokens: as a result of connecting IT hardware to the internet, ThreeFold tokens are farmed
- Cultivation tokens: as a result of selling capacity from their farming pools to ThreeFold users

This document describes how farming tokens are issued in more detail.

- [Goals](#goals)
- [Existing Cooperatives](#existing-coops)
- [Goals](#goals)
- [How to become a ThreeFold Farmer (without cooperative)](#become-farmer)
- [Farmer registration rules during June-July 2018](#registration-rules)
- [Capacity measurements](#capacity-measurements)
- [Imposed Retrospectively](#imposed-retrospectively)


<a id='goals'></a>

## Goal

- TFTs are backed by [internet capacity](https://github.com/threefoldfoundation/info_foundation/blob/master/docs/definitions/it_capacity.md)
- Internet capacity needs to be good enough
- Reliable hardware (good enough hard disks and SSDs, because data is stored on them)
 	- Uptime needs to be good enough
- Internet capacity needs to be everywhere (promote distribution)
- Avoid abuse, people trying to cheat the system, e.g. dirty farming, or people who just add capacity to get tokens with no intent to sell capacity


## Farmer types

Two types of farmers:	
- [Certified Farmers](#certified). Certified Farmers create certified TF Capacity
- [Uncertified Farmers](#uncertified). Uncertified Farmers create uncertified Capacity

<a id=certified></a>

### Certified Capacity

- [Definition of ThreeFold Capacity](https://github.com/threefoldfoundation/info_foundation/blob/master/docs/definitions/threefold_capacity.md)
- Uptime
    - Farmer defines uptime guarantee depending on her/his production environment (connectivity, housing, power)
    - Uptime history farmers is listed on the TF Chain
- Hardware components: Certified hardware
    - Certified hardware is supplied by ThreeFold certified cooperatives.  ThreeFold certified cooperatives are accredited by the ThreeFold foundation because they have proven to be compliant with the Certified Coop rules <<insert link>>
- Farming and Cultivation tokens
    - Amount of Farming tokens see rules of [Creation of TFTs](https://docs.grid.tf/threefold/info/src/branch/master/concepts/threefold_principles.md#creation-of-tfts)
    - For certified farmers the difficulty level is set at 8.  The difficulty level is managed by the Guardians of the ThreeFold foundation.
    - Farming Tokens get released by [TF Chain](https://github.com/threefoldfoundation/info_foundation/blob/master/docs/definitions/threefold_chain.md) immediately.  This means the farmer has access to the tokens and can do with them what he wants.
- Cultivation tokens are available immediately after capacity got sold.

<a id='uncertified'></a>

### Uncertified Capacity

- [Definition of ThreeFold Capacity](https://github.com/threefoldfoundation/info_foundation/blob/master/docs/definitions/threefold_capacity.md)
- Uptime requirements
    - Farmer defines uptime depending on her/his production environment (connectivity, housing, power)
    - Statistical information per farmer will be made available on TF Chain
- Hardware requirements
    - Any type of hardware can be used, This hardware can be new or refurbished.
- Farming of tokens
    - Amount of tokens see rules of [Creation of TFTs](https://github.com/threefoldfoundation/info_grid/blob/master/docs/tf_farming/threefold_principles.md)
    - Difficulty level = 8
    - Farming Tokens only get released by [TF Chain](https://github.com/threefoldfoundation/info_foundation/blob/master/docs/definitions/threefold_chain.md) from moment [Farming Pool](https://github.com/threefoldfoundation/info_foundation/blob/master/docs/definitions/threefold_farming_pool.md) used for more than 30%. They get accumulated from connection time though.
- Cultivation tokens are available immediately after capacity got sold.
    
<a id='existing-coops'></a>

## Existing Cooperatives active today !

**You can become a TF Farmer today by using existing TF Cooperatives.**

- See [inital cooperative directory](https://github.com/threefoldfoundation/info_grid/tree/master/docs/cooperatives)

You can be part of these cooperatives, buy your hardware and be your own farmer. Please contact them for specific details. Each cooperative has their own commercial offerings to allow you to become a farmer starting today.

Do you want to create your own cooperative, please contact the ThreeFold Foundation, we can help you how to get started.

<a id='become-farmer'></a>

## How to become a TF Farmer (without cooperative)

Do you want to become your own TF Farmer, please become part of our early adopter program and we get you initiated in everything you need to know to be most successful as a TF Farmer. We will start mid April with online sessions. Before June 1 any TF Farmer hardware will be connected to our testnet (is our TF Grid made for testing purposes), this way your hardware capacity can be validated.

Your TF Hardware pool will be registered in the official TF Chain starting June 1.

The ThreeFold Foundation will also be organizing technical sessions for people who want to learn how to use the capacity of the TF Grid in most optimal way. This will happen face to face as well as online.

<a id='registration-rules'></a>

## Farmer registration rules during June-July 2018

During the startup period of the TF Grid we start with predefined register token pricing (till end July 2018).
These rules are registered in the TF Chain.

Important: TF token pricing in public market can be different.

- Token generation rules see this [link](https://docs.grid.tf/threefold/info/src/branch/master/concepts/threefold_principles.md#creation-of-tfts)
- TFT token price used for registration = US $0.1
- Also see [Capacity measurement](#capacity-measurements) here below
- During this startup period the sales prices of SU/CU are fixed:

| Farming Pool Type | Compute Unit CU | Storage Unit SU |
| ------ | ------ | ------ |
| Unmanaged Refurb | USD 10 | USD 10 |
| Unmanaged New | USD 12 | USD 12 |
| Managed | USD 20 | USD 12 |


<a id='capacity-measurements'></a>

## Capacity Measurements

Zero-OS measures [**Resource Units**](https://github.com/threefoldfoundation/info_grid/blob/master/docs/concepts/resource_units.md) and registers this in the TF Chain.

| Unit type | Description | Code |
| --- | --- | --- |
| core unit     | 1 logical core (hyper-threaded core) | CRU |
| mem unit      | 1 GB mem	| MRU |
| hd unit       | 1 GB raw storage capacity | HRU |
| ssd unit      | 1 GB	raw storage capacity | SRU |

[Cloud Unit](https://github.com/threefoldfoundation/info_grid/blob/master/docs/concepts/cloud_units.md) capacity is calculated as follows:

| Cloud unit type | Calculation | Description |
| --- | --- | --- |
| 1 SU | #HRU / 1090 | nr of HRU (GB HD capacity) / 1093 |
| 1 SU | #SRU / 135 | nr of SRU (SSD HD capacity) / 135 |
| 1 CU | min(#CRU,#MRU/4,#SRU/20) * 0.9 | minimum of nr of cores, mem /4 and min requirement of 20 GB SSD per CU, with 10% overhead |

The 1.09 and 135 are calculated as follows (for details see following [sheet](https://docs.google.com/spreadsheets/d/1TsrG_bvrPl1I4q6FLScLwZDfe5HJ_DWOfY9RjZ8fZI4/edit#gid=75337142))

- 1090 = (70% Archive Capacity + 30% NAS Capacity) / 0.75
    -   0.75 is overhead for redundancy and some unused storage capacity
-   135 = 50% temp ssd capacity + 40% std ssd capacity which is redundant + 10% high performance ssd capacity / 0.6
    -   0.6 is estimate of unused SSD capacity, what will not be used in future


These conversion parameters can be redefined together with difficulty level by 60% majority vote of ThreeFold Ambassadors.

These rules are running as smart apps inside our TF Chain.

A sheet exists to help you simulate your capacity and token creation, please contact the TF Foundation for help.
Link of this spreadsheet is [here](https://docs.google.com/spreadsheets/d/1TsrG_bvrPl1I4q6FLScLwZDfe5HJ_DWOfY9RjZ8fZI4/edit#gid=75337142)


<a id='imposed-retrospectively'></a>

## Imposed retrospectively = time of registration counts

At registration of the capacity the following parameters are registered:

| Name | Description |
| ---- | ---- |
| tokens | tokens rewarded per 30 days is result of calculation and most important param |
| token price | token price at the moment of registration |
| sales price cloud units | sales price of CU & SU for chosen Farming Pool Type at registration |
| resource conversion units | conversion units from resource to cloud units (1090, 135, ...) |
| uptime = SLA |  only relevant for managed Resource Pool, min required uptime (for unmanaged new = 99.5%) |
| date | registration date |
| min percent utilization | minimum utilization degree before farming tokens are rewarded |
| period duration | fixed on 30 days |
| farming periods | nr of periods the farming tokens are rewarded |
| farming pool size | in CU/SU and CRU/MRU/HRU/SRU |

Some of above parameters are fixed & pre-defined during startup period (until end of July 2018), see above.

Once registered the amount of tokens given per month and accumulated if the minimum required utilization has not been achieved yet are fixed by this digital contract registered in the TF Chain.
Even if the TF Ambassadors decide to change some of the parameters this will not have an impact on already registered TF farming pools.

If a TF farming pool get unregistered e.g. because of 3 months breach of uptime then this contract becomes void.
