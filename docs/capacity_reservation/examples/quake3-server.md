# How to deploy a Quake3 Game Server instance on 0-OS

In this tutorial we are going to deploy a [Quake3: Arena](https://en.wikipedia.org/wiki/Quake_III_Arena) Game Server instance on a virtual 0-OS we have reserved.

Quake III Arena is a multiplayer-focused first-person shooter video game released in December 1999.

## Summary

- Convert docker image into flist
- Create the containers on 0-OS
- Create a reverse proxy to expose PeerTube to the public

### Convert docker image into flist

For this tutorial we'll use a docker image provided by _jberrenberg_ available at <https://hub.docker.com/r/jberrenberg/quake3>.

To convert these docker image in usable flist, go to https://hub.grid.tf/docker-convert.

![tfhub docker convertion](images/hub-convert.png)

Paste the name of the container you want to convert into an flist and click the button `convert the docker image`.

The result of the conversion should show something like:

![flist converted](images/quake3-flist-created.png)

### Create containers on 0-OS

Now that we have all the flist we need, let's start creating containers

> To learn how to reserve a 0-OS instance, please read:
> [../README.md#how-to-reserve-some-capacity-on-the-threefold-grid](../README.md#how-to-reserve-some-capacity-on-the-threefold-grid)

1. Create a client to your 0-OS. Adapt the `host` argument in the next snippet to match the IP you received in the mail of confirmation when you reserved your 0-OS

```python
node = j.clients.zos.get('quake3-vm', host='10.244.44.238')
node.client.ping()
```

2. Create the Quake3 container

create a volume for your container
```python
pool = node.storagepools.get('zos-cache')
volume = pool.create('quake3')
```

download the data files:
```python
content = j.sal.fs.fileGetBinaryContents('/path/to/quake/pak0.pk3')
node.upload_content(fs.path+'/pak0.pk3', content)

config = j.sal.fs.fileGetContents('/path/to/my-server.cfg')
node.upload_content(fs.path+'/my-server.cfg', config)
```

```python
quake3 = node.containers.create(
    name='quake3',
    flist='https://hub.grid.tf/glendc/glendc-quake3-latest.flist',
    ports={"27960|udp":27960},
    mounts={fs.path: '/data'},
)
quake3_public_url = "%s:27960" % node.host
print(quake3_public_url)
```

Server Config:

```
// general server info
seta sv_hostname "ThreeFold Grid DM"   // name that appears in server list
seta g_motd "FFA DM 24/7"         // message that appears when connecting
seta sv_maxclients 16               // max number of clients than can connect
seta sv_pure 1                      // pure server, no altered pak files
seta g_quadfactor 4                 // quad damage strength (3 is normal)
seta g_friendlyFire 1               // friendly fire motherfucker

// free for all
seta g_gametype 0                 // 0:FFA, 1:Tourney, 2:FFA, 3:TD, 4:CTF
seta timelimit 10                 // Time limit in minutes
seta fraglimit 15                 // Frag limit

seta g_weaponrespawn 2              // weapon respawn in seconds
seta g_inactivity 120               // kick players after being inactive for x seconds
seta g_forcerespawn 0               // player has to press primary button to respawn
seta g_log server.log               // log name
seta logfile 3                      // probably some kind of log verbosity?
seta rconpassword "secret"          // sets RCON password for remote console

seta rate "12400"                   // not sure
seta snaps "40"                     // what this
seta cl_maxpackets "40"             // stuff is
seta cl_packetdup "1"               // all about

// set maps
set d1 "map q3dm1 ; set nextmap vstr d2"
set d2 "map q3dm2 ; set nextmap vstr d3"
set d3 "map q3dm3 ; set nextmap vstr d1"
vstr d1
```

The last line is to create the address information you'll need to connect to the Quake3 Game Server.

> NOTE: For now this only works when running over zero tier,
>       No UDP Reserve Proxy is available for now.

Your Quake3 instance should now be running.
