## IT Services

@TODO NEEDS CLARIFICATION

Some principles:

- All users, groups, robots, reservations, farms are registered in ThreeFold Chain (tf-vhain)
- We don't use SSL with key exchange, every communication is encrypted using pub key of destination. Pub key comes from tf-chain (not from server)
- Each user has priv/pub key, is represented by a Zero-Robot which can sign on user behalf, and is registered in tf-chain in category: user



- [Zero-Robot](#zero-robot)
- [IT-Robot](#it-robot)
- [User Robot](#user-robot)
- [Kubernetes](#kubernetes)
- [Storage](#storage)
- [S3 Server](#s3)
- [Git server](#git)
- [HTTPS / DNS Gateway](#gateway)
- [Bandwidth](#bandwidth)



Following services will be registered in the directory on behalf of the farmer 


| Unit | Description | Price |
| ---- | ----- | ----- |
| CU | compute unit | ```@tft(12 USD)``` TFT |
| SU | storage unit | ```@tft(12 USD)``` TFT |
| NU | network unit | ```@tft(0,1 USD)``` TFT |

## for each service the following properties are used

| Name | Description | Default |
| ---- | ----- | ----- |
| name | name of the ZOS Pod | . |
| privkey_reservation | . | 


<a id='zos'></a>

## Zero-OS Pod

Zero-OS Pod = capacity for Zero-OS workloads (implemented as VM)

| Name | Description | Default |
| ---- | ----- | ----- |
| nr_mem | memory in GByte (1-16) | 4 |
| nr_vcpu | virtual CPU (1-16) | 4 |
| nr_storage | nr GB of storage for data, is redundant in GB (4-400) | 10 |


<a id='zero-robot'></a>

## Zero-Robot

- 1 Zero-Robot instance 
- capacity: 4 GB Storage, 1 GB Memory, 1 vCPU

| Level | Description | Price |
| ---- | ----- | ----- |
| silver | 1 GB mem, 4 GB storage, 1 vCPU| 40 TFT |
| gold | 2 GB mem, 8 GB storage, 2 vCPU | 80 TFT |
| platinum | 4 GB mem, 16 GB storage, 4 vCPU | 160 TFT |



<a id='it-robot'></a>

### IT-Robot

- Everyone who wants to use resources on the TF Grid will need to use an IT Robot to provision the required workloads. 


<a id='user-robot'></a>

### User Robot

- A Zero-Robot which is a digital always running robot working only for you.


<a id='kubernetes'></a>

## Kubernetes

(compute capacity) (as Kubernetes/Docker environment) = 

recommended:

- 8 GB of memory
- 100 GB of storage (SSD performance)
- 4 vCPU (virtual CPU)

| Level | Description | Price |
| ---- | ----- | ----- |
| silver | 4 GB of mem, 2 vCPU, 50 GB | 300 TFT |
| gold | 8 GB of mem, 4 vCPU, 100 GB | 550 TFT |
| platinum | 16 GB of mem, 8 vCPU, 200 GB | 1000 TFT|


interface:
- see Kubernetes website, any tool which can work with Kubernetes should work.


<a id='storage'></a>

## Storage 

- 1000 GB of storage 
- can be used as backing for S3 service

| Level | Description | Price |
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


<a id='s3'></a>

## S3 server

- server based on [Minio](https://minio.io/)

| Level | Description | Price |
| ---- | ----- | ----- |
| silver | 1 GB of mem, 1 vCPU | 100 TFT |
| gold | 2 GB of mem, 2 vCPU | 200 TFT |
| platinum | 4 GB of mem, 4 vCPU | 400 TFT|

Interface see S3 specs of Minio.
Can deploy as many servers as required using same storage back-end, this provides serious scalability.


<a id='git'></a>

## Git server

Based on [Gitea](https://gitea.io/en-us/), but modified to support ItsYou.online and with Kanban integrated.

Interface: Web, Rest & Git (ssh)

- silver: 	1 GB of mem, 1 vCPU, 10 GB Storage
- gold:		2 GB of mem, 2 vCPU, 50 GB Storage
- platiniu:	4 GB of mem, 4 vCPU, 100 GB Storage

| Level | Description | Price |
| ---- | ----- | ----- |
| silver | 1 GB of mem, 1 vCPU, 5 GB Storage | 100 TFT |
| gold | 4 GB of mem, 4 vCPU, 50 Gb Storage | 400 TFT |
| platinum | 8 GB of mem, 8 vCPU, 100 GB Storage | 800 TFT|


Auto backup every hour to s3 server using duplicity.

<a id='gateway'></a>

## HTTPS / DNS Gateway

- free of charge
- makes it very easy to publish any service at any location

<a id='bandwidth'></a>

## Bandwidth

1 GB of transferred capacity over network (to and from internet from the Farming Pools) 
 
| Level | Description | Price |
| ---- | ----- | ----- |
| std | 1 GB of transfer | 1 TFT |