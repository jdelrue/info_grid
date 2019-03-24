# Deploying a Container

We can deploy a container using the container template which is below, but you need to have [Jumpscale](https://github.com/threefoldtech/jumpscale_lib/) installed.


### Steps
1- Connect to the node 0-robot you want the container to be deployed on, you can get the node 0-robot ip from the capacity portal(```eg: http://10.102.210.164:6600``` )

```zrobot robot connect myrobot http://10.102.210.164:6600```

2-Enter into jumpscale shell using ```js_shell``` and follow:


```
robot = j.clients.zrobot.robots['myrobot'] 
```

3-Connect to the node client :

```
cl = j.clients.itsyouonline.get('your iyo id', data= {'application_id_':'xxxxxxxx', 'secret_':'xxxxx'})

Create your app and secret_id from https://itsyou.online
```

You need to be part of the sysadmin organization for this:
```
jwt = cl.jwt_get(scope='user:memberof:threefold.sysadmin')
```

Specify the node:

```
ncl = j.clients.zos.get('node', data = { 'host':'10.102.210.164', 'password_':jwt},)
```




4- Now using the node client, mount your sources for your website on the node accordingly

```
ncl.client.system('mkdir -p /mnt/storagepools/sdb/websites').get()
```

5- Now using the container [template](https://github.com/threefoldtech/0-templates/tree/development/templates/container) , make your Container data args:

```

FLIST = "https://hub.grid.tf/tf-bootable/ubuntu:18.04.flist"

container_data = {
                'flist': FLIST,
                'nics': [{'type': 'default'},{'type': 'zerotier','id': '$YOUR ZEROTIER ID'},{'type': 'zerotier','id': 'c7c8172af1f387a6'}],
              'mounts': [{'source': '/mnt/websites/myfirstweb','target': '/var/www/html'}],
        }
        
        
myfirstweb = robot.services.create('github.com/threefoldtech/0-templates/container/0.0.1', 'myfirstweb', data=container_data)

myfirstweb.schedule_action('install').wait(die=True)

myfirstweb.schedule_action('start').wait(die=True)

        
```

After this authorize this container on your zerotier and it will get a IP

6-Now from the node client, list your container:
```
ncl.containers.list()
```

7- Now to access your container you need to add your ssh key into it, so we get the container client using:
```
myfirstweb_client = ncl.containers.get('myfirstweb')
```


8 - Now add your key using steps:

```
myfirstweb_client.client.bash('mkdir -p /root/.ssh').get()

myfirstweb_client.client.bash('echo " YOUR SSH KEY" >> /root/.ssh/authorized_keys').get()

myfirstweb_client.client.bash('chmod -R 700 /etc/ssh').get()

myfirstweb_client.client.bash('/etc/init.d/ssh restart').get()
```

9- Now SSH into your container using the zerotier ip of the container:

```
root@js:~# ssh root@192.168.193.228
Welcome to Ubuntu 18.04 LTS (GNU/Linux 4.14.82-Zero-OS x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

Last login: Sun Mar 24 11:54:53 2019 from 192.168.193.54
root@corex:~#
```

Now you have access to the Container.








