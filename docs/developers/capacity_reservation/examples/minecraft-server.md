# How to deploy a Minecraft Game Server instance on 0-OS

In this tutorial we are going to deploy a [Minecraft server](https://en.wikipedia.org/wiki/Minecraft) Game Server instance on a virtual 0-OS we have reserved.

Minecraft is a sandbox video game created by Swedish game developer Markus Persson and released by Mojang in 2011.
The game allows players to build with a variety of different blocks in a 3D procedurally generated world, requiring creativity from players.
Other activities in the game include exploration, resource gathering, crafting, and combat.

## Summary

- Convert docker image into flist
- Create the container on 0-OS

### Convert docker image into flist

> NOTE: You could skip this step if you are fine with using an flist
> already provided for you at <https://hub.grid.tf/zaibon/itzg-minecraft-server-latest.flist>.

For this tutorial we'll use a docker image provided by _itzg_ available at <https://hub.docker.com/r/itzg/minecraft-server/>

To convert these docker image in usable flist, go to https://hub.grid.tf/docker-convert.

![tfhub docker convertion](images/hub-convert.png)

Paste the name of the container you want to convert into an flist and click the button `convert the docker image`.

### Create container on 0-OS

Now that we have the flist we need, let's create the container

> To learn how to reserve a 0-OS instance, please read:
> [../README.md#how-to-reserve-some-capacity-on-the-threefold-grid](../README.md#how-to-reserve-some-capacity-on-the-threefold-grid)

1. Create a client to your 0-OS. Adapt the `host` argument in the next snippet to match the IP you received in the mail of confirmation when you reserved your 0-OS

```python
node = j.clients.zos.get('mc-vm', host='10.244.4.167')
node.client.ping()
```

2. Create the Minecraft container

Create a volume for your container, so we can persist some data. If we don't do
this, we will not be able to restart the container, as we will loose our files
while doing so:

```python
pool = node.storagepools.get('zos-cache')
volume = pool.create('minecraft')
```

If we create a new container, it will automatically create a default config
file. However we want to have a custom server.properties. For this, we first create
the properties file locally and upload it to the volume. An example config can be found in
[data/minecraft-example.properties](data/minecraft-example.properties).

```python
node.client.filesystem.upload_file(volume.path + 'server.properties', '/path/to/server.properties')
```

Create the container:

```python
mc = node.containers.create(
    # the name of the container
    name='minecraft',
    # the URL that points to the flist you want to use
    flist='https://hub.grid.tf/zaibon/itzg-minecraft-server-latest.flist',
    # expose both the server port and redcon port
    ports={"25565":25565,"25575":25575},
    # volume we wish to mount, so that the container has persistent storage
    # also makes sure that our custom server.properties are present
    mounts={volume.path: '/data'},
    # as the docs of this image indicate, we need to accept the EULA. This can
    # be done by setting the "EULA" environment variable to "TRUE":
    env={'EULA':'TRUE'},
)
minecraft_public_url = '%s:25565' % node.host
redcon_public_url = '%s:25575' %node.host
print(minecraft_public_url)
print(redcon_public_url)
```

The last 2 lines are the address information you'll need to connect to the Minecraft Game Server, and to redcon to manage the server, respectively

> NOTE: For now this only works when running over zero tier,

Your Minecraft instance should now be running.

Happy building on your personal Minecraft Game Server running on the grid :)
