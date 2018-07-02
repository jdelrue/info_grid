# What type of telecommunications connectivity is required for farming?

This question we get a lot, and it is also one of the hardest to answer because the devil is in the details here. For each pool of capacity (or to that extend for each farmer) one can classify it as a compute oriented capacity pool or a storage oriented capacity pool. The difference being that a compute oriented capacity pool has a bias towards a larger of number of available processors compared to the quantity of storage. A storage oriented capacity cool has more storage capacity deployed in comparison to compute capacity.

## Compute of Storage capacity pool

We can illustrate the capacity pool type by looking at a number of examples.  Examples include numbers of used configurations by early farmers and cooperations.
- Example 1:  A farmer has 4 servers with 2 processors each (28 logical cores each) and 12 hard disks per server (of 12 TB each).  The ratio number for logical cores vs. TB's of storage is: ```(4*2*28)/(4*12*12)=224/576=0.39```.
- Example 2:  Farmer has 1 small [SOHO device](https://bettertoken.shop/product/sn1-soho-node-server/) with 1 processors (4 logical cores) and 1 hard disk (of 12 TB each).  The ratio number for logical cores vs. TB's of storage is: ```(4)/(12)=0.3333```.
- Example 3:  Say as a farmer you have 1 small [SOHO device](https://bettertoken.shop/product/sn1-soho-node-server/) server with 1 processors (4 logical cores) and 4 hard disk (of 12 TB each).  The ratio number for logical cores vs. TB's of storage is: ```(4)/(4*12)=1/12=0.0833```.

We can now classify capacity pools by the ratio of logical cores per TB of storage. At this point in time we classify capacity pools that have a ratio lower than ```0.25``` as a storage oriented pool and rations higher than ```0.25``` as CPU oriented.

## Bandwidth requirements

Bandwidth requirements can be estimated based on use cases using resources from capacity pools.  In the previous paragraph we looked at classifying capacity pools being compute or storage oriented.  The purpose of doing so is that typically storage oriented capacity pools will require more bandwidth as data needs to flow in and out of these capacity pools.  To estimate the bandwidth requirements we provide usage estimations based on experience. The assumptions are the following:
- each logical core "uses" 10GB of data per virtual core per month
- each TB of storage uses 40GB of data per TB of storage.
- for line speed (MBps) we use the following formula to get to actual transport (nr. of GB's transferred on a 1MBps connection): ```(1/8)*(3600*24*30)/1000*0.6```.  The formula converts from bits to bytes ```(1/8)``` and then calculates the number of (Mega)bytes transferred per month coming from a line speed per second ```(3600*24*30)```.  Last conversion is done to go to GigaBytes ```(/1000)``` and take on board network saturation (you cannot go above ```60%``` because of saturation of physical transport layer).  This gives a usable transport of **194GB** per 1MBps of connectivity.

What these numbers tell us is that each core present in a capacity pool requires 10GB of data (in and out - connectivity is symmetrical) and each TB of storage uses 40GB.  Connectivity wise we can transport 194GB of data by each 1 MBps of connectivity.

Look at the same examples and used before:

- Example 1: 4 servers with 2 processors (28 logical cores each) and 12 hard disks per chassis (of 12 TB each).  Total estimated transport needed per months: ``` ((4*2*28)*10GB)|+((4*12*12)*40GB)=2240+23040=25280``` GB of data per month.  If we divide that by the ```194GB``` per 1MBps of connectivity we need 130MBps of connectivity to make this setup work well
- Example 2:  [SOHO device](https://bettertoken.shop/product/sn1-soho-node-server/) server with 1 processors (4 logical cores) and 1 hard disk (of 12 TB each).  ```(4*10GB)+(12*40GB)=40+480=520GB```. Divide this by the amount transferred by 1MBps (194GB) you see that the required bandwidth equals 2.7 MBps.
- Example 3:  [SOHO device](https://bettertoken.shop/product/sn1-soho-node-server/) with 4 hard disks (of 12 TB each).  ```(4*10GB)+(4*12*40GB)=40+1920=1960GB```. Divide this by the amount transferred by 1MBps (194GB) you see that the required bandwidth equals 10.1 MBps.

These assumptions and numbers can be used to easily calculate the bandwidth requirements of any configuration.
