# Pastebin

We will deploy [andreimarcu/linx-server](https://github.com/andreimarcu/linx-server) pastebin on tf grid.


## Flist creation
[0-hub](https://hub.grid.tf) makes it very easy to convert Docker images to flists using [docker-hub-converter](https://hub.grid.tf/docker-convert). 
Lucky us, that pastebin is available as a [docker image](https://hub.docker.com/r/mkodockx/docker-pastebin) so go a head and convert it.

when done you will get a message like 
```
Source: https://hub.grid.tf/thabet/mkodockx-docker-pastebin-latest.flist
Storage: zdb://hub.grid.tf:9900
```

## Using JSX to provision the 0-OS
After that you can always provision the workload using JSX
https://github.com/threefoldfoundation/info_grid/blob/ff622402a93a8d6035e38a5cf17bd379f35e824d/docs/capacity_reservation/README.md

```python
In [60]: result = wallet.threebot.record_new(months=1, names=['codepaste'], addresses=['codepaste.org'])
In [61]: result.transaction
Out[61]: transaction v144 f131831607854d9e5a251c2a2727957825e59c1e61e15a240fac49542e99a51b

In [62]: result.submitted
Out[62]: True

In [63]: result = wallet.capacity.reserve_zos_vm(email='thabeta@codescalers.com', threebot_id='codepaste', location='kristof-farm', size=1)
Wed 17 07:29:20 GedisClient.py   - 133 - j.clients.gedis:gedisclient        : redisclient: notary.grid.tf:5000 

In [64]: result
Out[64]: TransactionSendResult(transaction=transaction v1 725bfb1f6bd3b4175818b7e794c3c1e7925ff225cc48ca947c362e73b852a971, submitted=True)

In [65]: result.submitted
Out[65]: True

In [66]: result.transaction
Out[66]: transaction v1 725bfb1f6bd3b4175818b7e794c3c1e7925ff225cc48ca947c362e73b852a971

```


then you will receive an email with your vm information something like

```
0-OS address: 10.244.231.4:6379
0-robot url: http://10.244.231.4:6600
VNC address:
10.102.189.153:5900
```


## Spawning a container with our application flist



```ipython
In [42]: node = j.clients.zos.get("zos", host="${your_zos_ip_here}")
In [43]: node.containers.create(name="mypaste", flist="https://hub.grid.tf/thabet/andreimarcu-linx-server-latest.flist", ports={'80': 8080})
Out[43]: Container <mypaste>

```

## Accessing your application
open your web browser and navigate to `http://10.244.231.4` and you should see something similar to

![Pastebin](./images/pastebin.jpg)
