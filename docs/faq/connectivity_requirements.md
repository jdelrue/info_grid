# What type of telecommunications connectivity is required for farming?

This question we get a lot, and it is also one of the hardest to answer because the devil is in the detail here. For each node (or to that extend for each farmer) one can classify it as a compute oriented capacity pool or a storage oriented capacity pool. The different being that a computer oriented pool has a bias towards a larger of number of available processors being deployed compared to the quantity of storage.

Example:  Say as a farmer you have 4 chassis with 2 processors )of 28 logical cores each) per chassis and 12 hard disks per chassis (of 12 TB each).  The ratio of nr. of logical cores vs. TB's of storage is: (4*2*28)/(4*12*12) = 224/576 = 0.39.  We assume that there is a need of about 10GB of data per virtual core per month and 40GB of data per TB of storage in the systems.  This leads to a total requirement of data transport of (224*10 + 576*40) = 25280 GB per month.

Connectivity is quantified in Mbit/s throughput.  A single Mbit/s through can transport 194GB of data per month.  So the minimal needed bandwidth to make this configuration work with the assumptions stated is 25280/194=130 Mbit/s

So for this farm to work (based on the assumptions driven by the actual workloads that will appear on the system) the farmer needs to provide a minimum of 130 Mbit/s of connectivity.