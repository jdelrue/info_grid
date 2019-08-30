## Vienna Cherry Chapter questions.

### Introduction.

These questions originate from a meeting / presentation from the Cherry Chapter meeting in Vienna.  They are very valid questions and have to be reworked into the generic Faq setup.  For now we will keep them together and make them available in this format.
.
### 1. What is the TF-Grid capacity purchase price for a System Integrator for CUs, SUs, NUs under the assumption we would sell TF-Grid capacity.

TF-Grid capacity pricing is fundamentally set by the farmers owning the capacity.  They own their little part of this grid and therefore they decide to what commercial pricing their part of the grid is available to others.  The TF Foundation provides guidelines with regards to commercial pricing for capapcity on the grid.

Additional content is available [here](https://wiki.grid.tf/#/faq/pricing_conflicts)

### 2. How would capacity demand management, capacity request management and capacity reservation work on the TF grid? Will it be all handled by the „framers/integrators“ Cockpit or through the end-customer 3Bot?

The farmer capacity is managed by the farmer 3bot.  The farmers 3bot keep a record of how much capacity is being reserved (and for how long) and who (the developers 3bot) is the sole user of that capacity.  The current state of play is being represented to the farmer by the cockpit application.  

The enduser or developer reserved capacity is managed and controlled by the developer 3bot.  This 3bot will manage the capacity payments (micropayments, to start with per month but towards the future will go down to weekly and daily).  This 3bot will keep a record of the reserved capacity and as per the developer of end user instruction keep resevered capacity online for as long as she or he wants it.

### 3. Do we have already Smart-Contract templates for farmers / integrators or when will they become available?

The smart contract terminology

### 4.Will TF provide an „application migration tool“ to automatically migrate on-premise applications into a „TF Container“ on the TF Grid.

This is foreseen as a basic functionality.  The world of IT is moving towards containerized application architectures and we support that as it runs aspplication components more more effectively and flexible. In the TF Grid there are 3 identified layers of technology:
- The Autonomous Distributed Applications layer (A-Dapps)
- The Autonomous layer (3Bots)
- The Capacity layer (3Nodes)

The capacity layer runs container workloads natively and is 100% backwards compatible with major containerizations technologies like [Docker](http://www.docker.com).  The technology stack also provides tooling to migrate existing Docker containerized workloads to the TF Network with mininal effort.

### 5. How will the capacity usage of the VCC farmer capacity be monitored, measured and reported – will this be done by the TF Cockpit for each farmer?

The cockpit will provide all this information in a meaningful and human understandable way.  The actual datacollection and storage is done by the farming 3bot.

### 6. In past TF Presentations it was clear that TF Foundation will sell capacity like docker specific apps for the Farmers. Why has this changed now?

The Foundation is a marketing and promotion organisation for the Threefold Tech technology being used to build alternative internet capacity.  Capacity owned by people (and not digitial technology monopolies) for people to use. The marketing and promotion activities for this are staged:  first we need to attract Farmers to build an initial meaningfull setup of this grid.  Secondly we need to start promoting the availability of the grid to a developer and enduser community.  These detailed plans are currently being build and will be presented at the October Ibiza event.

### 7. 10% - 20% of Capacity Sales Tokens stay with TF for marketing activities. What Marketing and Support funding will TF Foundation provide to the VCC to acquire SIs or customers

Same answer as above, marketing and promotion strategies are being build and will start to be rolled out October onwards. 
