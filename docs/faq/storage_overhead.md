# By what factor is the required grid storage greater than the actual data volume stored?

## Question

If stored data is present in multiple nodes for resistance of the Grid to local failures, by what factor is the required Grid storage greater than the actual data volume stored?

## Answer

As mentioned in a previous answer the level of redundancy depends on the software defined storage algorithm. The storage algorithm can be configured to be resistent to failure of:

 - disks
 - chassis
 - datacenter (location)

 The amount of required [Storage Units](https://github.com/threefoldfoundation/info_foundation/blob/master/docs/definitions/threefold_cloud_units.md) goes up with the higher level of redundancy build in the software defined storage solution. Resilience to a single disk failure comes in at a lower price than building resilience to datacenter failure.