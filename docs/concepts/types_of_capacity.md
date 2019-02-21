
# Types of Threefold Grid Capacity

## the 3 types intro

### Certified Capacity

ThreeFold works together with hardware partners like HP to certify their hardware and to agree on a process how to bootstrap the nodes. 

Each hardware vendor will have to sign a contract with ThreeFold Tech to guarantee the following

- the vendor will deploy the threefold secure keys which are specific per type of hardware and vendor in the bios of the servers.
- the bios will be configured to only allow secure boot 
- the nodes will do a burn in test with ThreeFold certified test software
- where we register them against our blockchain
- this will allow our nodes to do secure boot, which means its impossible for farmers to gain access to the hardware or any of the workloads to run inside the hardware.
- to their best knowledge there are no backdoors in the equipment

### DIY Capacity

Anyone who connects a node (hardware box) to the ThreeFold Grid without any certification connects Do It Yourself (DIY) capacity.

Everyone who uses this capacity (which will be more cost effective than Certified Capacity) needs to realize that:

- the nodes don't use secureboot and as such there is no guarantee that the farmer does not use his IT hacking skills to try and see the workloads who are running in a node. 
- we didn't certify the hardware together with a vendor it could be that the hardware is not optimal designed / specked for our operating system.
- there are no guarantees for support or maintenance (guarantee) from a vendor's perspective.



### Managed Capacity

### Summary Capacity Types
  
|     | DYI Capacity | Certified Capacity | Certified Capacity | Managed Capacity |
| ------------------ | ---------------| ------------------ | ------------------ | ------------------ |
| **Hardware** | All younger than 4 years | All younger than 4 years (1)| Certified | VMs |
| **Hardware Vendor** | All | All| HPE, Super Micro, INTEL NUC | Hardware Independent |
| **Boot Process** | Manual | Secure Boot Environment| Secure Boot Environment | Cloud Provisioning|
| **Secure Boot Device** | NO | YES| NO (Bios lockup)| NO|
| **Farming Tokens** | YES| YES| YES| YES |
| **Difficulty Factor** | 8 | 8 | 8 | >8 |
| **Uptime SLA**| Medium | High | Highest| High |
| **Capacity Price**| Medium | High| High| Highest|
| **Farming Token Distribution** | After 30% capacity reservation (2) | Immediately 100%| Immediately 100%| TBD|
| **Cultivation Token Distribution** |   |  |  |  |
| **TF Foundation Promotion Fee** | 10% | 10% | 10% | 10% |
| **TF Tech License Fee** | -| 10% | 10% | TBD |
| **Managed Service Fee** | - | - | - | TBD |
| **TF Tech Contract** | - | YES | YES | YES |

   
(1) starts H2 2019

(2) starts end Q1 2019


* **Certified Hardware:**
All hardware which is certified. 
With being certified the security of the hardware and the generated TF capacity is way higher.

* **DIY Hardware:**
All Hardware which is not certified


###Certified Hardware

####Supermicro:

SOHO Node: basic case with AMD Ryzen

Datacenter Node:  2U chassis with INTEL xeon

#####Hardware Sources: (for quotes and prices)
Europe: Bettertoken [www.bettertoken.shop](https://bettertoken.shop/)

Africa: Edge Cloud Africa - contact <a href="dave@edgaecloud.africa">Dave Gale</a>


####HPE:

Apollo 4510

ProLiant DL 380 Gen10

ProLiant ML 10

ProLiant Microserver GEN 10

#####Hardware Sources (for quotes and prices)


* Africa: Edge Cloud Africa - contact <a href="dave@edgaecloud.africa">Dave Gale</a>

* Middle East: Mazraa - contact <a href="cabarong@threefoldtoken.com">Gloria Anne Cabaron</a>

* All other countrries: HPE - contact <a href="miro@hpe.com">Miroslaw Polski</a>



####INTEL:

NUC (all i5 and i7 models, make sure ssd and hdd fit in the chassis=large enclosure)

#####Hardware sources:
[Amazon](https://www.amazon.com/) (Amazon offers NUCs almost globally)

