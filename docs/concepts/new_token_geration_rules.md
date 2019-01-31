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
For certified and unce

<table>
  <tr>
    <td>Capacity Farmer</td>
    <td></td>
    <td>Type</td>
    <td>Europe</td>
    <td>Africa</td>
    <td>North America</td>
    <td>Australia</td>
    <td>Asia</td>
    <td>South America</td>
  </tr>
  <tr>
    <td></td>
    <td>SLA</td>
    <td>DIY</td>
    <td>98%</td>
    <td>90%</td>
    <td>99%</td>
    <td>99%</td>
    <td>99%</td>
    <td>90%</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Certified</td>
    <td>99.5%</td>
    <td>95%</td>
    <td>99.5%</td>
    <td>99.5%</td>
    <td>99.5%</td>
    <td>95%</td>
  </tr>
  <tr>
    <td></td>
    <td>Network speed (up and down) </td>
    <td>DIY</td>
    <td>5 Mbps/TB
(assumes 100% storage usage). x 0.33</td>
    <td>1Mbps/TB</td>
    <td>5Mbps/TB</td>
    <td>5Mbps/TB</td>
    <td>5Mbps/TB</td>
    <td>1Mbps/TB</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Certified</td>
    <td>5Mbps/TB</td>
    <td>1Mbps/TB</td>
    <td>5Mbps/TB</td>
    <td>5Mbps/TB</td>
    <td>5Mbps/TB</td>
    <td>1Mbps/TB</td>
  </tr>
  <tr>
    <td>Network Farmer</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Available IP’s</td>
    <td>Network provider</td>
    <td>/20 
(4096)</td>
    <td>/22 
(1024)</td>
    <td>/22 
(4096)</td>
    <td>/20
(4096)</td>
    <td>/20
(4096)</td>
    <td>/22
(1024)</td>
  </tr>
  <tr>
    <td></td>
    <td>Network SLA</td>
    <td>Network provider</td>
    <td>99.95%</td>
    <td>99.5%</td>
    <td>99.95%</td>
    <td>99.95%</td>
    <td>99.95%</td>
    <td>99.5%
</td>
  </tr>
  <tr>
    <td></td>
    <td>Network speed</td>
    <td>Network provider</td>
    <td>>10Gbps</td>
    <td>>1Gbps</td>
    <td>>10Gbps</td>
    <td>>10Gbps</td>
    <td>>10Gbps</td>
    <td>>1Gbps</td>
  </tr>
</table>

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



