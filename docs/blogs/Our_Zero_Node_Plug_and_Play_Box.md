
## BLOG: Our Zero Node Plug and Play Box

Our guiding design principle is that simpler solutions increase efficiency and productivity “Less = More”

The 0-OS node technology is based on technology that has been developed and innovated upon for 15 years by our founders and their incubation center. Mid to late 90’s some of us were working for a large American firm that was investing in creating Europe’s first large scale (internet) datacenters and internet connectivity.  In that period we built and put into production 5 major datacenters. We became frustrated with the amount of money, time and energy required to architect, install, operate and maintain complex IT infrastructures  - we became so passionate about this we decided to create better technology which addresses these issues.


To build a technology stack from point solutions from A-brand vendors requires a tremendous amount of integration software, equipment and knowledge / human resource effort.  The result is a very complicated operational setup that costs too much money, uses a lot of power and requires a large amount of maintenance contracts and engineers.


This inspired us to create more effective IT architectures powering IT workloads without all the complexity and unnecessary components by starting an incubation center to specifically develop technologies creating more efficient ways of doing very standard things:  


* Use more of the available compute power by virtualisation technologies allowing multiple tenants to use one physical machine.
* Create a performing and reliable storage solution by using standard off the shelf components and stay as far away as possibly from proprietary hard and software to enhance storage performance.
* Create a low level power management device that is able to manage and monitor the whole upstream power feed and create efficient power consumption.  One of the key aspects of this technology is that it measure Voltage and Amperage 25k times a second, which provides very detailed information about how the power supply is “consuming” the power  and allows for analytical failure prediction.


A Zero-Node consists of hardware and software.  A Zero Node can be purchased from the TF Foundation or by downloading and installing software on existing re-purposed hardware.  The software components  are:

* Zero-OS: Bare bone operating system enabling the distributed compute and storage functionality.  Uses a network boot mechanism creating a zero local install footprint on the nodes.
* 0-Key:  Our Zero-Key provides SIM-card based two-factor authentication for additional security (in particular DDOS) and provides location, identity and other information
* 0-FS: Ultra scalable Filesystem based on distributed storage capacity.  Files are deduped and can be compressed and encrypted.  They are stored reliably by using an erasure coding inspired algorithm. It exposes all known interfaces - S3, CIFS, NFS etc.
* 0-Disk: Virtual disk using distributed storage capacity.  The virtual disk can be used by both Virtual Machines and Containers running applications and microservices.
* 0-Container: The Zero-OS kernel supports the existence of multiple isolated user-space instances and controls resource utilization, called 0-Container. They may look like a normal computer as applications can run inside a container.
* 0-VM: The Zero-OS kernel runs the KVM Hypervisor in a 0-Container - creating the ability to run virtual machines
* Blockchain Core: The Blockchain Core is the Rivine.io software.  It is an open-source blockchain solution which is based on the proof of stake principle (not proof of work)
* Blockchain Workloads: Distributed applications come in many different shapes and forms.  Examples are: Payments: Cross-Border Payments, Insurance: Claims processing, Asset Management: Trade Processing and Settlement, Smart Property.
