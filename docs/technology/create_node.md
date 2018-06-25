# Run a TF Chain (blockchain) Node

![](https://images.unsplash.com/photo-1494565108644-2af890493b92?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d03c0ba324a6c5279787ab9884b7371c&auto=format&fit=crop&w=1350&q=80)

In order to create a ThreeFold Chain node you need the ThreeFold Chain daemon (`tfchaind`).

See [Getting the ThreeFold Chain Binaries](/technology/get_binaries.md) for instructions on how to get the ThreeFold Chain daemon.

In order to start the ThreeFold Chain daemon in the background execute:
```bash
tfchain_dir="<location where you installed the binaries>"
cd $tfchain_dir
./tfchaind &
<ENTER>
```

This creates a ThreeFold Chain node on the **standard** network, in order to create a node on the **test** network use the `--network` (`-n`) option:
```bash
./tfchaind --network testnet & 
```

The standard network uses the following bootstrap nodes:
- bootstrap1.threefoldtoken.com:23112
- bootstrap2.threefoldtoken.com:23112
- bootstrap3.threefoldtoken.com:23112
- bootstrap4.threefoldtoken.com:23112

A ThreeFold Chain Explorer for the standard network is available at https://explorer.threefoldtoken.com/

Check that the daemon is running:
```bash
ps aux | grep tfchaind
```

Or use the `jobs` command to list the running processes in your current session.

At any point you can switch the daemon to the foreground and stop it:
```bash
fg
CTRL + c
```

See the [tfchaind documentation](https://github.com/threefoldfoundation/tfchain/blob/master/doc/tfchaind.md) for more details.