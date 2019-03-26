## Redundancy in Minio

### How can local and Geo- Redundancy be achieved?
The redundancy of a minio setup is determined by how the actucal software is configured.  There are many setups and configurations possible.  Here's a few [examples](https://docs.minio.io/docs/multi-tenant-minio-deployment-guide.html)

The Threefold technology provides disk managers (Zero-DB's) that create network interfaces to physical harddisks and allow for these minio architectures to be bild over multiple servers in multiple datacenter in multiple geographies.

## Scalability of Mino

### How would Mino handle Storage with 100Pbyte and above?
With Minio in stand-alone mode, distributed Minio has a per tenant limit of minimum 2 and maximum 32 servers. There are no limits on number of disks shared across these servers. If you need a multiple tenant setup, you can easily spin up multiple Minio instances managed by orchestration tools like jumpscaleX.  For more information see [here](https://docs.minio.io/docs/distributed-minio-quickstart-guide)


## Minio Compute power / TB
Compute power requires per TB is 

### How much compute power would be needed to run 1TB of Storage?

## Storage Tiering
  
- How can different types of Storage Tier be achived?
- Hot Storage - Fast access for User queries and AI Dataminig
- Warm Storage - Working Data for Daily bussiness
- Cold Storage - Longtime Archive Storage 

## Storage Aging
  How would change of 1 Hardrive work?
  How would change of a Storage Server work?
  Change of large parts of the Storage pool after 5 Years / EOL of Hardware?

## Data Restore 
  How does a Datarestore work (HDD failure)?
  How long would it take?
  State of the rest of the Storage at that time?

## Encryption in ZeroOS
  How does Encryption in ZeroOs work?
  How would encryption ontop of ZeroOs work?
