##@ Frequent asked questions #3

#### What type of telecommunications connectivity is required for a farmer?

**Answer:** This question we get a lot, and it is also one of the hardest to answer because the devil is in the detail here.  For each node (or to that extend for each farmer) one can classify it as a compute oriented capacity pool or a storage oriented capacity pool. The different being that a computer oriented pool has a bias towards a larger of number of available processors being deployed compared to the quantity of storage.

Example:  Say as a farmer you have 4 chassis with 2 processors )of 28 logical cores each) per chassis and 12 harddisks per chassis (of 12TB each).  The ratio of nr. of logical cores vs. TB's of storage is: (4*2*28)/(4*12*12) = 224/576 = 0.39.  We assume that there is a need of about 10GB of data per virtual core per month and 40GB of data per TB of storage in the systems.  This leads to a total requirement of data transport of (224*10 + 576*40) = 25280 GB per month.

Connectivity is quantified in mbit/s throughput.  A single mbit/s through can transport 194GB of data per month.  So the minimal needed bandwidth to make this configuration work with the assumptions stated is 25280/194=130mbit/s

So for this farm to work (based on the assumptions driven by the actual workloads that will appear on the system) the farmer needs to provide a minimum of 130mbit/s of connectivity.

### How long does the farmer have to hold the subsidy TFT tokens?

**Answer:** ThreeFold recognises two categories of Famers.  Farmers that purchase certified hardware from certified vendors and Farmer that have decided to go 100% DIY.  Both are absolutely fine but have a different Farming token vesting scheme.  

For the Farmers that purchased certified hardware at known vendors they will not have a vesting period for their tokens at all.  their tokens are liquid form the moment they get them.

DIY Farmers have a rule applied to their farmed tokens of becoming  liquid only when the TF Chain recognises the hardware to be used for 30% by actual real life Use cases.  The reasoning behind this rule is that we want to avoid abuse by farmers of creating capacity based on old, refurbished or new hardware which will never run any real life use case and will just be there to farm  farming tokens (which in essence would make the ThreeFold capacity similar to bitcoin mining rigs.

### What is the current value of the TFT token?


**Answer:** The current value of the TF Token is $0,10 (ten dollar cents).

### Is the TFT a traded token on exchanges?  If so, which exchanges?


**Answer:** The TFT token is traded on a small number of exchanges. These exchanges are small nyche exchanges like BTC-alpha.  We do not chase established exchanges as we do not believe that the future of the ThreeFold token lies in trading mechanisms that are centralized.  ThreeFold is working on a distributed exchange facility which will live on the TF Grid.  It will allow ThreeFold farmers, investors and users to go in and out of the token economy without passing by a central exchange (and without paying any transaction fees).

### Do you have industry information regarding software developers creating platforms for the TF internet?

**Answer:** ThreeFold sees the TF grid as a platform that presents primitives to developers that can and will create applications and services for ir.  ThreeFold will start  launching marketing and promotion campaign towards the end of 2018 to invite these developers.

You have to have an different mind towards to this platform.  It has a very different approach towards building a community of developers, service providers and end users. Think of the launch of the iPhone with IOS and its Software Development Kit.  At launch there were less than 50 applications available of which the most important ones were, a call application, a web browser, a message application and a music player (with some basic utilities around that like calculators and notes applications).  Today there are literally millions of applications in existence, build by the community for the community.  We envision a similar uptake of ThreeFold as a new platform to run distributed applications and the demand for applications and functionality will draw in developers and service and service providers.

### Is the farmer legally liable for information stored on their “nodes” which is illicit/illegal or in contribution to illegal actions?

**Answer:** The Farmers own the hardware and rents uit capacity to others.  This is a similar model as to what web hosting and managed services have been doing nw for decades.  Per region and country there is specific legislation that a Farmer needs to comply with.  In general there is legislation which makes the consumer of capacity ronsike for the data on the rented capacity taking away the liability for that from the Farmer.
