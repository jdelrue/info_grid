# Storage principles

## Question:

Do I understand correctly that the grid automatically moves data close to the end user of the data, and distributes the data among available nodes in a manner that makes it highly resistant to data loss? I have also heard a conflicting stance that data redundancy is the responsibility of the application, not ThreeFold.  

## Answer

All data is highly redundant, your 3bot knows how to do this and you don’t have to worry about this.
Your 3bot will manage redundancy levels, relocation, making of new reservations if requires, can warn you if you run out of credit, … It's your virtual sysadmin. In phase 1 we have an S3 storage interface build in which is running for you privately and managed by your 3bot sysadmin, nothing for the user to do.

All data is dispersed over multiple nodes (you choose which regions you want to use, see the reservations above). For archive (S3) we use 16+4 redundancy level which means 20% overhead and can lose any 4 nodes at the same time.

I expect of course that TF Partners will come up with their own business ideas how they can offer more high-level storage interfaces which use the unique features of our grid and build a service that way.

You can use the threefold grid as a content distribution network but then you will need to reserve network/storage/compute capacity on many locations. Also here I expect parties to create their CDN’s (content delivery networks) on top of us and make a business model out of it. But you could ofcourse build your own. 

There is indeed a neat trick where you can use our dispersed storage as an effective way of allowing data closest to you be served first. Then you would do e.g. a 4-40 policy, which means 10 times more locations than strictly required, which means you would only need the 4 closest locations to get to the data.

## Further Questions

I understand that the TF grid achieves “redundancy” (security of data against loss or corruption) through a Sudoku-type reconstruction process when data is distributed over multiple nodes by the Zero-robots.  But then it is also stated that a user of TF capacity must contract with individual farmers for capacity, so to achieve desired data security, one needs to contract with multiple farmers? This question is closely related to questions 4,5 above. 

## To be completed
