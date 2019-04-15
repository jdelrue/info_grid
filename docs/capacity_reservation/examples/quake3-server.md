# How to deploy a Quake3 Game Server instance on 0-OS

In this tutorial we are going to deploy a [Quake3: Arena](https://en.wikipedia.org/wiki/Quake_III_Arena) Game Server instance on a virtual 0-OS we have reserved.

Quake III Arena is a multiplayer-focused first-person shooter video game released in December 1999.

## Summary

- Convert docker image into flist
- Create the container on 0-OS

### Convert docker image into flist

> NOTE: You could skip this step if you are fine with using an flist
> already provided for you at <https://hub.grid.tf/glendc/glendc-quake3-latest.flist>.

For this tutorial we'll use a docker image provided by _jberrenberg_ available at <https://hub.docker.com/r/jberrenberg/quake3>.

To convert these docker image in usable flist, go to https://hub.grid.tf/docker-convert.

![tfhub docker convertion](images/hub-convert.png)

Paste the name of the container you want to convert into an flist and click the button `convert the docker image`.

The result of the conversion should show something like:

![flist converted](images/quake3-flist-created.png)

### Create container on 0-OS

Now that we have the flist we need, let's create the container

> To learn how to reserve a 0-OS instance, please read:
> [../README.md#how-to-reserve-some-capacity-on-the-threefold-grid](../README.md#how-to-reserve-some-capacity-on-the-threefold-grid)

1. Create a client to your 0-OS. Adapt the `host` argument in the next snippet to match the IP you received in the mail of confirmation when you reserved your 0-OS

```python
node = j.clients.zos.get('quake3-vm', host='10.244.44.238')
node.client.ping()
```

2. Create the Quake3 container

Create a volume for your container:
```python
pool = node.storagepools.get('zos-cache')
volume = pool.create('quake3')
```

> As to avoid time out errors later in this step
> try to increase it using `node.timeout`.
> This has to be done before you create your _node_ client.

Before we can continue you'll have to make sure that you have
copied the `pak0.pk3` file from your legally bought software
and have it ready on your JSX environment. On top of that you'll
need a server configuration, which we'll call `my-server.cfg`,
such that we can automatically configure the server.
An example server config can be found under [data/quake3-server.cfg](data/quake3-server.cfg).

Download the data files:
```python
content = j.sal.fs.readFile('/path/to/quake/pak0.pk3', binary=True)
node.upload_content(volume.path+'/pak0.pk3', content)

config = j.sal.fs.fileGetContents('/path/to/my-server.cfg')
node.upload_content(volume.path+'/my-server.cfg', config)
```

Create the container:
```python
quake3 = node.containers.create(
    # the name of the container
    name='quake3',
    # the URL that points to the flist you want to use
    flist='https://hub.grid.tf/glendc/glendc-quake3-latest.flist',
    # the UDP port that is to be exposed
    ports={"27960|udp":27960},
    # volume we wish to mount, so that the container has
    # access to our custom server-config and pak0.pk3 file
    mounts={volume.path: '/data'},
)
quake3_public_url = "%s:27960" % node.host
print(quake3_public_url)
```

The last line is to create the address information you'll need to connect to the Quake3 Game Server.

> NOTE: For now this only works when running over zero tier,
>       No UDP Reserve Proxy is available for now.

Your Quake3 instance should now be running.

Happy fragging on your personal Quake 3 Game Server running on the grid :)
