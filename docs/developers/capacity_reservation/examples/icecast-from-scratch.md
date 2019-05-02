# Building and deploying Icecast2 container from scratch

You can find multiple example on how to create an flist from docker and start your service
on documentation, but not how to create your flist yourself, from scratch, and doing everything manually.

This example is a good start if you want to go a little bit deeper into how container are build, created and running.

# Create your flist

You can compare flist with docker images, except that files listed inside an flist won't be downloaded
until you need them on runtime, which reduce time to start a container and bandwidth.

The idea is to build a root filesystem with only needed file to run our service inside (it's still cool
to use less space possible on the backend, less memory with smaller directory tree, etc.)

What you need is just your root directory and a file describing what to run on container startup
to get your service starting automatically.

The builder script explained on this tutorial can be found here: [github.com/maxux/production-flist/icecast.sh](https://github.com/maxux/production-flist/blob/master/icecast.sh)

# Build script

Let's review and describe builder script, step by step.
This build script is made to be run on an `Ubuntu 18.04` machine, this can be a container, a host machine, a vm, whatever...

The shell script is made of multiple functions, and all theses functions are called on the `main` function.
Last line of the shell script actually call the main function.

In order, we will do:
1. Installing dependencies (`earlystage` function)
2. Download icecast source code (`download` function)
3. Extract icecast source code (`extract` function)
4. Compile icecast from source (`compile` function)
5. Including runtime dependencies to the new-root (`dependencies` function)
6. Customize the original config file (`config` function)
7. Writing the startup script and wrapper (`startup` function)
8. Cleaning non-needed files on the new-root (`cleanup` function)
9. Building an archive of our new-root (`archive` function)

Now you know the summary, let's see in details what's going on.

## Earlystage
In order to be able to download, build, etc. we need some dependencies. We just download
needed packages from Ubuntu repositories.

## Download and Extract
Nothing special to explain here, we download the source code from icecast website, then
we extract source code to temporary directory

## Compile
Nothing special neither, we compile code. Some precision: we use `--prefix=/` to get
our compiled stuff into `/` and not `/usr/local` by default.

Moreover, when doing `made install`, we specify the `DESTDIR` to point to our virtual new-root directory.

## Dependencies
Well, if we want to be really clean, we should compile the glibc and all dependencies needed by icecast
on runtime, and link everything together, but let's be a little bit lazy and cherry-pick dependencies from
Ubuntu directly. To do this, there is a small script called `lddcopy` which will list and copy runtime libraries
dependencies into our new root.

In order to run our startup script which will be a `shell script` calling some `sed` command, we need them too.
Don't forget to link `sh -> bash` (needed by `bash` extension of zero-os api).

## Config
The default icecast2 configuration works out-of-box but it's cool to customize it, at least to change
default password we can find inside.

Moreover, we will do some change to match to our wrapper startup script you'll see later.

Icecast refuse to start if run as root, so we need to create a new user and start icecast specifying
the user to use.

## Startup
This is the most zero-os specific section of the build script.
The first script (`/bin/launcher`) is a wrapper to change icecast.xml config file on runtime.
This script is just setting up some configuration variable based on environment variable.

This allows you to set custom settings when creating the container, by setting environment variable.

The second file (`/.startup.toml`) is a coreX specific file automatically read and executed when container
starts. This wrapper just execute `/bin/launcher`.

## Cleanup
We don't need all files (like doc, manpage, etc.) on runtime, so let's remove them.

## Archive
We make a tar archive of our new-root directory. This will become the flist root.

> When debugging, before doing the archive, you can chroot into your new-root and test that everything
> works as expected, without starting a zero-os container to test.

# Building the flist and uploading it

Previously, we made an archive of the root filesystem. You could just upload this archive to `hub.grid.tf` and
everything will be done by magic on our backend. But let's do everything manually, that's what the main purpose
of this tutorial.

Copy the archive and extract it somewhere, where you have [zflist](https://github.com/threefoldtech/0-flist) tool installed.
```
mkdir /tmp/icecast-root
tar -xpvf /tmp/icecast-root.tar.gz -C /tmp/icecast-root/
```

To use the `zflist` we will use the playground hub, which allows you to reach the backend directly. It's easier to test
without authenticate ourself.

```
zflist --archive /tmp/icecast-2.4.4.flist --create /tmp/icecast-root --backend playground.hub.grid.tf:9910
```

This command is enough to create an flist based on our icecast root filesystem and upload file chunks to the playground backend.

You can now go to https://playground.hub.grid.tf and upload your flist (using `Homemade` option on the menu).

# Starting your container

On any working Zero-OS (local one, debug one, production capacity, whatever), you can now start the container:
```
node.containers.create(
    name="icecast2",
    flist="https://playground.hub.grid.tf/maxux/icecast-2.4.4.flist",
    ports={8000: 8000},
    storage="zdb://playground.hub.grid.tf:9910"
)
```

That's it ! If everything works as expected, you should be able to reach your icecast out-of-box via `http://[node-ip]:8000`
