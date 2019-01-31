# TF GRID FARMING RULES & CONCEPTS

[[TOC]]

## Updated Farmer/Capacity Types & Rules

![image alt text](image_0.png)

### TF_Grid_Master Presentation

[https://docs.google.com/presentation/d/1sN7nsvOMUHtEQKgilbHjfC364FJZDVKNLl9Fi8UAq3s/edit?zx=aufos5bcyiy4#slide=id.g467cd31a7b_0_13](https://docs.google.com/presentation/d/1sN7nsvOMUHtEQKgilbHjfC364FJZDVKNLl9Fi8UAq3s/edit?zx=aufos5bcyiy4#slide=id.g467cd31a7b_0_13)

### Wiki

[https://threefoldfoundation.github.io/info_grid/#/](https://threefoldfoundation.github.io/info_grid/#/)

### Simulators

HPE: [https://docs.google.com/spreadsheets/d/1q6gEryIMq5SQQn2CmXUzG3Xrj2zPCcRYO3kF0P816o0/edit#gid=1306033097](https://docs.google.com/spreadsheets/d/1q6gEryIMq5SQQn2CmXUzG3Xrj2zPCcRYO3kF0P816o0/edit#gid=1306033097)

Bettertoken: [https://docs.google.com/spreadsheets/d/1vE5A-l5jODhjVog1JkTE4mxZ3EqjiEJOBEC_ayhp-hY/edit#gid=111700120](https://docs.google.com/spreadsheets/d/1vE5A-l5jODhjVog1JkTE4mxZ3EqjiEJOBEC_ayhp-hY/edit#gid=111700120)

## Questions/Open Points

**Additional Hardware Components:**

How are TFTs calculated when additional components are added after the initial node has been added to the grid?

Seen as new equipment 

Set high and low watermarks (Phil) for swap of existing components

TFT price at farming start: how is defined? (AH)

Addressing scheme on the private network for farmers and farming equipment:

* Each farmer will have a 4 byte identifier.  (256^4) -> 4B+ Farmers

* Each farmer will have a 4 byte bot identifier (256^4) -> 4B+ Bots.

Address http://<4 byte bot id>.<4 byte farmer id>.grid.tf/API/startcontainer

**SLAs:**

![image alt text](image_1.png)

What SLAs are behind the different capacity types?

DYI:		min 98.00% (regional dependence - Africa is different than Europe)

If set lower then the difficulty factor is 10 (less TFTs for farming)	

Certified:	min 99.00% 

		If set lower then the difficulty factor is 10 (less TFTs for farming)	

Managed:	99.999% (sla as vm zos is running on)

![image alt text](image_2.png)

**New Farmer SLA proposal**

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


Availability according to Uptime institute

Tier 1 data center requirements are generally utilized by small businesses and feature:

* 99.671% Uptime

* no redundancy

* 28.8 Hours of downtime per year.

Tier 2 facility include:

* 99.749% Uptime

* Partial redundancy in power and cooling

* Experience 22 hours of downtime per year

Tier 3 data center specifications are utilized by larger businesses and feature:

* 99.982% uptime (Tier 3 uptime)

* No more than 1.6 hours of downtime per year

* N+1 fault tolerant providing at least 72 hour power outage protection

Tier 4 data center certification typically serve enterprise corporations and provide the following:

* 99.995% uptime per year (Tier 4 uptime)

* 2N+1 fully redundant infrastructure (the main difference between tier 3 and tier 4 data centers)

* 96 hour power outage protection

* 26.3 minutes of annual downtime.

Set minimum SLA when farmer signs up. SLA can be set higher if wanted

Farming Tokens:

3 month sla not met in a year -> re-register 

 **Guido:** As discussed yesterday the redundancy and the self healing is not "in the Grid" anymore this will be moved to a Service provider who over this on top of the Grid.

This changes the importance of Nodes being online, right?

If a Service Provider couples several machines from several farmers together to offer a secure and redundant Server/Service to a customer (how may don't even know that its running on the TF Grid)

Service Providers then deal with the risk of server downtime and have to setup the redundancy according to what they offer to the End customer:

Simple Redundancy -  Servers in the same DC/Farmer Pool

Extended Redundancy - Servers in 2 different DC`s / Farmer Pools 

Geo Redundancy - Servers in different DC`s / Farmer Pools in different areas of the World

The penalties for the Farmers are to hard, in this model

If someone just goes to a farmer and rents a singular machine/capacity he has to live with the possible downtime according to the SLA.

SLA 99% -> 30 days x 24h x 1% = 7,2h downtime per month possible without losing the farming tokens. Question: Why is this considered to be hard?

I question the loss of one whole month for a couple minutes of downtime

I question the 1 month "time slot" in general this should be shorter

**Guido:** General thought about how is the important piece of the Grid:

There is a very strong trend in our world today to focus and benefit the End customer. Don't get me wrong that is important BUT:

* TF offers the Grid Technology - 

* Farmers connect capacity to the Grid  

* Customers Use the Farmer capacity. 

OK so far?

* TF needs Farmers to offer the capacity 

* Customers need Farmers to get capacity.

**So the central and important piece of the Grid is the Farmer!**

No Farmers - no Capacity

No Capacity - no Grid

No Grid - no Customers

No Customers - ...No Cookies!!

Cultivation Tokens:

SLA not met, % of TFTs will paid back (see aws example below)

![image alt text](image_3.png)

When is automatic TFT generation live?

Secure Boot Device: what is it? Available?

**One farmer id for many farming pools doable?:**

Now: 

GEC

Then:

GEC Austria

GEC South Africa

GEC US

GEC CAN

Compliance issues with GEO IP! (geo ip faking)

Track via Secure Boot Device (plus Secure Location)

**Connectivity:**

Bandwidth requirements needed? Yes

Display bandwidth per farmer

How can this be measured????? 

## ToDos

* Create updated documentation

* Update wiki once content is defined

* Define minimum node requirement

* Define benchmarks for hw components

Benchmark ZeroOs or Linux distro

To run from a USB Stick after run save simple Txt File with result on the USB Stick 

# **Ideas**

* Communication to Farmers through Threefold App or DigitalMe as option

Farmers register to DigitalMe can get Infos and Communication through this channel

Farmers who don't want to register (stay anonymous) connect their capacity and get there Tokens to their Wallet done.

Benefit for TF Communication Channel to Farmers and large number of adopters for TF App or DigitalME 

Benefit for the Farmer defined Channel to TF and Tokens

Farmer -> Developer/CSP -> Enduser

Capacity ->      S3 	-> Object Storage

99.5%				99.99%

