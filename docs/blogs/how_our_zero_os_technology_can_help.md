## How our Zero OS Technology can help solve the Internet’s problems

### Bring workloads closer to people

We all produce more infromation / data every day and we process this data more intensely every day.  The fact that we collect and create data in one location and have to transport it to another for processing not not scaling for much longer.  The world needs a solution where data is processed as close as possible to it's origin.  Our mission is to bring IT workloads as close as possible to the actual people requiring -the service. To achieve this goal data centers need to be literally cut into thousands of small IT capacity generators which are distributed as close as possible the user - to the edge of the network.

### Use hardware better

Hardware has become amazingly powerful over the last few decades but few technologists know how to use the capabilities in the most efficient way. On the other hand many IT soft and hardware vendors are not interested to develop better algorithms as these would undermine their current revenues and profits. So most IT vendors chose to update components in the products and solutions and never overhaul any core principles or architecture / algorithms.   Customers need to buy bigger machines - compute and storage- to compensate to deliver capacity for the increased capacity needs and it they want to use tracks with skillsets which are very difficult to find)

Some examples

Hardware like infiniband with RDMA (Remote Direct Memory Access) has been available for more than 15 years but still none of the technology vendors have adopted this technology. RDMA improves latencies 100 times and avoids CPU intensive context switches but goes against the sales of a very elaborate, complicated and expensive network switching farm.

New network cards have baked in hardware instruction sets which can be used to offload a lot of standard overhead tasks but these are still not used in mainstream solutions.
CPU’s are amazingly powerful but lots instruction sets are not used.

Most of the above is reality because operating systems & development environments have limited, sometimes no support for these advanced features.

Real specialists and long time experience is required to create software which efficiently harnesses the power present in modern day hardware. Literally 10 to 100 times benefits can be achieved for certain workloads if and when the available performance in hardware is used to fuel these workloads in an effective manner.

### Use different algorithms to resolve problems in a different way

Anything which happens in computers is executed by using algorithms but many of these algorithms are the result of old thinking paradigms which today are no longer optimal. Still people do not change these algorithms because there is business and margin impact in doing so, it is also very hard to do, requires a brave and bold management team to support it and serious IT specialists with decades of experience are required.

E.g. our storage algorithms allow us without the implementation of compression to use 3 times less disks and still achieving 10 times better reliability. We have been working on these algorithms since early 2000. Multiple companies which we have been creating in this space have been acquired for their expertise in this domain.

### Less = More

The overhead of different layers in the IT industry is a result of technology vendors inventing new and profitable business models. Complexity is a business - selling maintenance services, 2 hour response SLA's and integration professionals to make complex end solutions work together.

This has been made possible by the tremendous performance improvements achieved by hardware and component vendors. The increased performance of devices and components have created a market where complicated integrations were made possible, where additional layers integrating new and old IT architectures prevented both technology vendors and users to reconsider how to effectively use and improve existing architectures.

Examples of this complication leading to more hard and software are:

- Going from physical to virtual allowed for hardware to be used by more end users and end user workloads - the sharing principle.  However in order to virtualise hardware an additional layer was introduced between the end user application and the base OS: the hypervisor. In order to maintain and operate a large number of virtualisation platforms and an even larger number of virtual machines / end user workloads like OSS and BSS platforms were invented to do these tasks effectively.  It created a complete new industry providing installation, operation and maintenance services.
- More recent we have seen an uprising of containerised services.  This movement supports the less is more principle by chopping large monolithic IT workloads into small microservices that can be run anywhere - supporting the trend of IoT data collection and processing everywhere. However many of these container are not run in an efficient way as most of the computed capacity today present in (public) datacenters is purposed to run IaaS (virtual machines) which required the container to be run in a virtual machine, adding another layer of virtualisation and creating complexity and overhead.
- Tiered storage is still a defacto standard in datacenters: online, nearline, offline (archive) living in silos, run on and by different technology and algorithms. But there is no actual need but to support different technologies and technology vendors to continue their (successful) business model.  When designed correctly a general purpose storage system should be able to provide performant, distributed, reliable storage but also must be able to cater for arching workloads (plan / book less capacity for this particular storage workload). Using standard off the shelf components, HDD's, SSD's, SATA controllers and some CPU to run a software defined storage solution that allows for any workloads to run effectively.

We do not believe in such an approach. We believe that the answer is to avoid complexity, to not want to build a business model out of supporting and maintaining IT solutions.  To create IT solution that work, just like electricity is coming to our business and home without us worrying too much about all of the complicated things that need to be done in order to generate electricity - IT should be a commodity that is available for use case and that require very little knowledge and integration skills.

### A new operating system called Zero-OS

We have created a new operating system which eliminates most of the layers and gives some dramatic benefits.

- No install required, because there is nothing to install
- No updates required, because there are no local files to upgrade, there is no local state in the operating system
- A shell does not exist which means there is no environment for hackers to live in
No local filesystem, every file is fingerprinted and only served when required.

Our operating system is called Zero-OS. Learn more in our Zero-OS blog

### How to get the benefits of this technology

#### Use our TF Grid.

Each TF Node is running GIG open source technology. The Grid.TF is the global network of IT infrastructure that is indexed by the ThreeFold Directory. It  represents the sum of all the capacity and services generated by Operators and Hosters. This is our “new, neutral, Edge Internet."


#### Usage of GIG open source software

GIG believes that core components of all good system software needs to be open source. This guarantees better reliability & security, because anyone using the software knows exactly what's inside and a bigger community can and will help to improve the software.

Most of the core parts of the GIG technology are open source: [Open Source Blog](https://docs.google.com/document/d/18ckgsefqxdAwd5KBacS9VBPHXWd7uWAKNQ14XaB6wXo/edit)

Please note that no service or any guarantee can be given on the open source software, GIG also has a commercial license for each of these components which allow people to get the required support & quality assurance.

#### Buy the technology from GIG...

GIG has created this technology over the last 15 years and takes a disruptive approach through elimination, simplification and using tech innovations. For more information see [here](www.gig.tech)
