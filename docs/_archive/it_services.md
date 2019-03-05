# some core concepts

## principles

- all User/Group/Robots/Reservations/FarmingPools are registered in tf-chain
- we dont use SSL with key exchange, every communication is encrypted using pub key of destination. Pub key comes from TF-Chain (not from server)

## User

- has priv/pub key
- represented by a zero-robot which can sign on user behalf
- is registered in tf-chain in category: user

# IT Services

Following services will be registered in the directory on behalf of The Farmer 

## pricing

| unit | description | price |
| ---- | ----- | ----- |
| CU | compute unit | ```@tft(12 USD)``` TFT |
| SU | storage unit | ```@tft(12 USD)``` TFT |
| NU | network unit | ```@tft(0,1 USD)``` TFT |

## for each service the following properties are used

| name | description | default |
| ---- | ----- | ----- |
| name | name of the ZOS Pod | . |
| privkey_reservation 


## base: ZOS Pod

Zero-OS Pod = capacity for Zero-OS workloads (normally implemented as VM)

| name | description | default |
| ---- | ----- | ----- |
| nr_mem | memory in GByte (1-16) | 4 |
| nr_vcpu | virtual CPU (1-16) | 4 |
| nr_storage | nr GB of storage for data, is redundant in GB (4-400) | 10 |




## zero-robot

- 1 zero-robot instance 
- capacity: 4 GB Storage, 1 GB Memory, 1 vCPU

| level | description | price |
| ---- | ----- | ----- |
| silver | 1 GB mem, 4 GB storage, 1 vCPU| 40 TFT |
| gold | 2 GB mem, 8 GB storage, 2 vCPU | 80 TFT |
| platinum | 4 GB mem, 16 GB storage, 4 vCPU | 160 TFT |



### IT-Robot

- Everyone who wants to use resource on the TF Grid will need to use an IT Robot to provision the required workloads. 

### User Robot

- April 2018
- A Zero-Robot which is a digital always running robot working only for you.

## kubernetes

(compute capacity) (as kubernetes/docker environment) = 

recommended:

- 8 GB of memory
- 100 GB of storage (SSD performance)
- 4 vCPU (virtual CPU)

| level | description | price |
| ---- | ----- | ----- |
| silver | 4 GB of mem, 2 vCPU, 50 GB | 300 TFT |
| gold | 8 GB of mem, 4 vCPU, 100 GB | 550 TFT |
| platinum | 16 GB of mem, 8 vCPU, 200 GB | 1000 TFT|


interface:
- see kubernetes website, any tool which can work with Kubernetes should work.

## storage 

- 1000 GB of storage 
- can be used as backing for S3 service

| level | description | price |
| ---- | ----- | ----- |
| silver | 1 TB | 15 TFT |
| gold | 10 TB | 140 TFT |
| platinium | 100 TB | 1300 TFT |


interface:

- for raw data non redundant
	- Zero-DB protocol which is based on Redis Protocol
	- Any redis client can be used to stor & get information
- for processed (encrypted, compressed & redundant)
	- Zero-Stor client (commandline & grpc)
- minio
	- User can deploy mini and install our plugin to it which will use the Zero-Stor client 

## s3 server

- server based on (https://minio.io/)

| level | description | price |
| ---- | ----- | ----- |
| silver | 1 GB of mem, 1 vCPU | 100 TFT |
| gold | 2 GB of mem, 2 vCPU | 200 TFT |
| platinum | 4 GB of mem, 4 vCPU | 400 TFT|

Interface see S3 specs of minio.
Can deploy as many servers as required using same storage backend, this provides serious scalability.


## git server

- based on Gitea (but modified to support ItsYou.Online and also has Kanban inside).

Interface: Web, Rest & Git (ssh)

- silver: 	1 GB of mem, 1 vCPU, 10 GB Storage
- gold:		2 GB of mem, 2 vCPU, 50 GB Storage
- platiniu:	4 GB of mem, 4 vCPU, 100 GB Storage

| level | description | price |
| ---- | ----- | ----- |
| silver | 1 GB of mem, 1 vCPU, 5 GB Storage | 100 TFT |
| gold | 4 GB of mem, 4 vCPU, 50 Gb Storage | 400 TFT |
| platinum | 8 GB of mem, 8 vCPU, 100 GB Storage | 800 TFT|


Auto backup every hour to s3 server using duplicity.

## HTTPS / DNS Gateway

- free of charge
- makes it very easy to publish any service at any location


## Bandwidth

1 GB of transferred capacity over network (to and from internet from the Farming Pools) 
 
| level | description | price |
| ---- | ----- | ----- |
| std | 1 GB of transfer | 1 TFT |


