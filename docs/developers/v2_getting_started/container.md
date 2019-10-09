# Deploy a container

Before trying to deploy containers, make sure you have a working [overlay network](overlay_network.md).

If your overlay network is working. Here is what you need to know to deploy a container on 0-OS.

## convert a docker image to flist

TODO: 

## Deploy a container

Here is the required information to deploy a container:

```yaml
flist: https://hub.grid.tf/zaibon/zaibon-ubuntu-ssh-latest.flist # url to the flist to use
flist_storage: '' # optional field if the flist storage is hosted else where then https://hub.grid.tf
env: {} # optional environment variable to set in the container
entrypoint: "/sbin/my_init" # entrypoint is the process to start in the container
interactive: false # choose to enable coreX or not. for more information see the CoreX section of this
mounts: [] # optional field if you want to attach some volume you have reserved to your container
network:
  network_id: my_private_network # the name of the overlay network to use for this container
  ips: # list of ip address to set to the container. The ip needs to be part of the subnet of the network resource hosting the container
  - "172.22.1.3"
```

## Use CoreX to manage the container processes

CoreX is a process manager for container. If a container is create with `interactive` set to true. The process started in the container will be coreX.

CoreX then exposes a web interface and a REST API at on the port `7681`. The web interface show all the running processes. The REST API allow to create, stop, cleanup, list and attach to a process.

Attaching to a process means the web interface will display a terminal where you can interact with your container or stream the logs of a process you started using the REST API.

Example:

- start `bash` and open chrome to see the web interface:

```bash
pid=$(curl "http://172.22.1.4:7681/api/process/start?arg[]=/tfchaind" | jq .id)
chrome http://172.22.1.4:7681/attach/$pid
```
