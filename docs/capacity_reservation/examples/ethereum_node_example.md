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
container.client.system("/sandbox/bin/geth --networkid=4")

# Check if its running
container.client.job.list()
```

```python
JSX> container.client.job.list()
[{'cpu': 5, 'rss': 0, 'vms': 0, 'swap': 0, 'starttime': 1555487108617, 'cmd': {'id': '6142e0b5-d4ac-4107-abac-e2435f100ea0', 'command': 'geth', 'arguments': {'id': None}, 'queue': '', 'stream': False, 'tags': None}, 'pid': 0}]
```

```
# Stream logs (process_id can be found in previous step output)
sub = container.client.subscribe(6142e0b5-d4ac-4107-abac-e2435f100ea0)
sub.stream()
```
