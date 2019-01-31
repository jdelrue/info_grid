## Token generation rules for ThreeFold farmers

### A Farmer earns tokens in 2 ways:

* **Farming Tokens:** as a result of connecting server hardware to the ThreeFold Grid

* **Cultivation Tokens:** as a result of their Farming Pool capacity being utilised by ThreeFold Grid Capacity users


### Three are three types of farmers:

* **Cooperative Farmers:** purchase a range of services from a ThreeFold cooperative up to and including, ThreeFold certified hardware, installation and -if available- location, power and connectivity

* **Individual Farmers:** use ThreeFold certified hardware but complete their own installation, provide their own location, power and connectivity

* **DIY Farmers:** use their own choice of hardware (incertified hardware)


### Two types of capacity:

* **Certified Capacity:** Underlying hardware is locked such that nobody (including the owner, farmer) can access and configure low level BIOS and other features.  It is a black box to the farmer and anyone that has physical access to the machine.  The only control a farmer has over certified capacity is turning it on or off. It will therefore achieve a very level of security for consumers and will yield a higher capacity sales price (available in Q2 2019)

* **Uncertified Capacity:** farmer can still access hardware which means lower security and lower price



### Farmer Token generation rules until public Grid Capacity Utilization (Q2 2019):

There will be no distinction between certified and uncertified capacity


|   Capacity Type    | Farming TFTs   |
| ------------------ | ---------------|
| Certified | 1/60th of the calculated farming TFTs per month |
| Uncertified | 1/60th of the calculated farming TFTs per month |


### Farmer Token generation rules when Grid Capacity Utilization goes public (Q2 2019):
There will be differences between uncertified and certified capacity


|    Capacity Type   | Farming TFTs   |
| ------------------ | ---------------|
| Certified | 1/60th of the calculated farming TFTs per month |
| Uncertified| if (30% of capacity is reserved) then 1/60th of the calculated farming TFTs for that month |

**Note:** Once a node hits 30% capacity reservation within 6 month of the start of farming the past month and the one in which the 30% reservation have been met will be honored with 1/60 of the TFTs for each month. From then onwards the node needs to have a minimum of 30% capacity reservation to receive monthly tokens up until a total of 60 month.

**Note:** For both certified and diy farming uptime guarantees apply in the form os SLA's that needs to be met by Farmers.  Uptime guarantees are the result of a number of factors being done wright, power, network, environment and actual health of the hardware.

### Farming TFT calculation

#### Farming TFT calculation formula (monthly)

![](https://github.com/threefoldfoundation/info_grid/blob/development/docs/concepts/images/TFT_Farming_Formula.png)

* T = number of Tokens
* CU = Compute Units deployed
* SU = Storage Units deployed
* ACPT = Average Compute Unit price in Tokens at the time of connection (Avg Compute Unit price divided by Token price at connection)
* ASPT = Average Storage Unit price in Tokens at the time of connection (Avg Storage Unit price divided by Token price at connection)
* D = Difficulty level = 8

****Certified and uncertified capacity difficulty level: 8****
What does this mean: TFTs are undervalued by a factor of 8 (called difficulty level) during creation, i.e. If 100% of capacity is sold at connection time, then 8 times more TFTs would be required than have been issued. This mechanism allows the token to grow in value while remaining backed by the revenue potential of the TF Grid.

****Until public Grid Capacity Utilization (Q2 2019)****

* ACPT = USD 15.00
* ASPT = USD 10.00
* Token price = USD 0.12

[Compute and Storage Unit definition](https://github.com/threefoldfoundation/info_grid/blob/development/docs/concepts/cloud_units.md)

#### SLA requirerments
For certified and DIY capacity there are Service Level Agreement (SLA) requirements.  These requirements are there to make sure that the presented capacity is also usable and presents sufficient reliability for grid consumers to trust their compute and storage workloads to operate.

This table represent the initial numbers applicable to Threefold capacity farmers and ThreeFold network farmers.  These numbers may change going forward.

For capacity farming we need to have a minimal to achieve uptimne of the compute and storage capacity.  This table represent the initial numbers applicable at launch time.

|  Capacity Farmer | Type | Europe | Africa | North America | Australia | Asia | South America |
| ---------------- | ---- | ------ | ------ | ------------- | --------- | ---- | ------------- |
| SLA | DIY | 98% | 90% | 99% | 99% | 99% | 90% |
|     | Certified | 99.5% | 95% | 99.5% | 99.5% | 99.5% | 95% |

For network farming the same appplies.  The network needs to comply with minimal uptime guarantees.  This table represents the initial number applicable at launch time.

|  Network Farmer | Type | Europe | Africa | North America | Australia | Asia | South America |
| ---------------- | ---- | ------ | ------ | ------------- | --------- | ---- | ------------- |
| Network speed (up and down0 | DIY | 5 Mbps/TB (assumes 100% storage usage). x 0.33 | 1Mbps/TB | 5Mbps/TB | 5Mbps/TB | 5Mbps/TB | 1Mbps/TB |
|                             |Certified | 5Mbps/TB | 1Mbps/TB | 5Mbps/TB | 5Mbps/TB | 5Mbps/TB | 1Mbps/TB |

Network farmers also need to provide IP space.  Network farmers can make IPv4 and IPv6 ip addresses available.  The requirement to become a network farmers include a minimum number of IPv4 addresses to be made available.  IPv4 addresses are scarse and cost money these days but are still the dominant addressing scheme on the internet.  Over time IPv6 will become more dominant.

|  Network  Farmer | Item | Europe | Africa | North America | Australia | Asia | South America |
| ---------------- | ---- | ------ | ------ | ------------- | --------- | ---- | ------------- |
|                  |Available IP’s|  /20 (4096) | /22 (1024) | /22 (4096) | /20 (4096) | /20 (4096) | /22 (1024) |
|                  |Network SLA   | 99.95% | 99.5% | 99.95% | 99.95% | 99.95% | 99.5% |
|                  |Network speed | >10Gbps |  >1Gbps | >10Gbps | >10Gbps | >10Gbps | >1Gbps |


### Cultivation TFT calculation

#### Cultivation TFT calculation formula (monthly)***

![](https://github.com/threefoldfoundation/info_grid/blob/development/docs/concepts/images/TFT_Cultivation_Formula.png)

* CU = Compute Units deployed
* SU = Storage Units deployed
* CP = Farmer’s Compute Unit price - expressed in Tokens
* SP = Farmer’s Storage Unit price - expressed in Tokens
* U = Utilisation
* T = Token price at time of capacity reservation

[Compute and Storage Unit definition](https://github.com/threefoldfoundation/info_grid/blob/development/docs/concepts/cloud_units.md)

****Will be applicable when public Grid Capacity Utilization goes live (Q2 2019)****


### Fees on Cultivation TFTs

There are two types of fees:
* 10% for ThreeFold Foundation for promoting the capacity on the grid
* 10% for TFTech for keeping the TF Grid software components up to date and for providing farmers support


|    Capacity Type   | TF Foundation   | TFTech|
| ------------------ | ---------------| ------------------ |
| Certified | 10% | 10% |
| Uncertified| 0% | 10% |


### Farming TFT release requirements

Farming pool uptime as defined at time of registration on the TF Grid has to be met monthly in order to get the monthly farming tokens as defined under **Farming TFT calculation** section (see above)
