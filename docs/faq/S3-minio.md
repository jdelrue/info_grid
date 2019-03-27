## Redundancy in Minio

### How can local and Geo- Redundancy be achieved?
The redundancy of a minio setup is determined by how the actucal software is configured.  There are many setups and configurations possible.  Here's a few [examples](https://docs.minio.io/docs/multi-tenant-minio-deployment-guide.html)

The Threefold technology provides disk managers (Zero-DB's) that create network interfaces to physical harddisks and allow for these minio architectures to be built over multiple servers in multiple datacenter in multiple geographies.

## Scalability of Mino

### How would Mino handle Storage with 100Pbyte and above?
With Minio in stand-alone mode, distributed Minio has a per tenant limit of minimum 2 and maximum 32 servers. There are no limits on the number of disks shared across these servers. If you need a multiple tenant setup, you can easily spin up multiple Minio instances managed by orchestration tools like jumpscaleX.  For more information see [here](https://docs.minio.io/docs/distributed-minio-quickstart-guide)


## Minio Compute power / TB

### How much compute power would be needed to run 1TB of Storage?

Compute power required per TB is minimal. There are several benchmarks done on the public internet and [published](https://blog.minio.io/minio-benchmarks-with-cosbench-81704a8f0178).  We have also done internal benchmarking which is available upon request.

## Storage Tiering
  
### How can different types of Storage Tier be achived?
Minio is an open source implementation of the Simple Storage Service (S3) protocol imvented by Amazon Web Services (AWS). The protocol provides "network" access to physical devices in servers. The protocol uses storage "buckets" which mix and match different storage and caching devices (HDD, SDD and memory). By creating a mix of these storage end devices you can create a plethora of different storage platforms - presenting different performance and reliability service levels.

![S3-princple](../images/s3-principle.png)

Examples are:
- Hot Storage - Fast access for user queries and AI datamining
- Warm Storage - Working data for daily bussiness
- Cold Storage - Longtime archive storage 

## Storage Aging
  
### How would the change of 1 Hardrive work?
The minio software uses a "forward correcting" erasure coding algorithm to store data.  An (digital) object is sharded into fragments and additional fragments are created for redundancy purposes.  The erasure coding process can be configured such that different fragments are stored on different physical disks.  The amount of shards of the same object stored on a single disk can be configured in the erasure coding algorithm parameters.

So when properly configured a single disk failure will never lead to dataloss. Replacing a single disk that failed can be done at any time.

### How would the change of a Storage Server work?
Changing a storage server (e.g. changing a large quantity of physical disks) requires planning. The mechanism will follow the following planning process where farmer capacity will be identified by the capacity ledger as coming to an end of life (5 years of operation) and therefore capacity will (potentially) be taken offline.  It is the farmers prerogative to continue to operate the capacity (with advertising that he will do so) or that his capacity will not be available (soon) because the 5 year term is up.  All existing capacity contracts will then be moved over a certain period of time to new and available capacity and at the end of the 5 year period none of the capacity (which is not earmarked to be used for longer then 5 years) will have active workloads on it.

### Change of large parts of the Storage pool after 5 Years / EOL of Hardware?
See previous answer

## Data Restore 

### How does a Datarestore work (HDD failure)?

Is automatic. The system will recognise a failed disk and reproduce additional shards (pieces of redundant information) to comply with the redundancy policy specified for the specific datasets.

### How long would it take?

As one disk will not put data at risk this can be a background process.  It is not time dependent as there is never a code red data loss risk alert.

### State of the rest of the Storage at that time?

All data objects are stored in a secure state.

## Encryption in Zero OS

### How does Encryption in ZeroOs work?
Encryption is based on standard symmetrical and a-symetrical key algorithms.  Where appropriate Zero-OS uses standard symetrical or a-symetrical algorithms.

### How would encryption on top of Zero OS work?
Any appication that wants / needs to encrypt information can do it as it wishes.  For all the interactions between the 3bots and blockchain ledger ThreeFold technology uses encryption where needed - for end user data any data encryption algorithm can be opted in.
