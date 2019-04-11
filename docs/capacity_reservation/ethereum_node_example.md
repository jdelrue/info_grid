# Deploying an Ethereum full node on the Grid

### 1. First reserve a zos-vm on the grid

Info on how to reserve a vm can be found here: [readme](README.md)

### 2. Deploy the Ethereum node on your zos vm

Once you reserved your zos-vm you can use Kosmos shell to connect to it.

```
node = j.clients.zos.get("zos", host="${your_zos_ip_here}")

# Check for connectivity
node.ping()
```

#### Create a container on this node with the Ethereum flist

If you can connect to your zos vm you can start making a container with an Ethereum flist.

```
node.containers.create(name="geth-node", flist="https://hub.grid.tf/tf-official-apps/geth.flist")
container = node.containers.get(name="geth-node")

# Start the Ethereum process
container.client.system("/sanbox/bin/geth --network=test")

# Check if its running
container.client.job.list()

# Stream logs (process_id can be found in previous step output)
sub = container.client.subscribe(${process_id})
sub.stream()
```