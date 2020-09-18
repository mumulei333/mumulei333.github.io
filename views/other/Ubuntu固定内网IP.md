---

title:      Ubuntu固定内网IP
date:       2020-09-09
isShowComments: true

tags:
 - Ubuntu
 - 网络
    
categories:
 - 学习
---

# Ubuntu固定内网IP

> 最近有用到虚拟机的原因，自己在电脑开了几个ubuntu的虚拟机，在用到frp远程操作的时候因为内网ip一直变动的原因这边需要用到固定内网IP

## **步骤一**

使用`ip addr`查看目前内网ip地址，这里可以看到目前地址是192.168.5.139，该地址是内网分配的地址，无意义。

```
mumu@ubuntu_01:/$ ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:0c:29:a9:9a:a8 brd ff:ff:ff:ff:ff:ff
    inet 192.168.5.139/24 brd 192.168.5.255 scope global secondary dynamic ens33
       valid_lft 903sec preferred_lft 903sec
    inet6 fe80::20c:29ff:fea9:9aa8/64 scope link 
       valid_lft forever preferred_lft forever
3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
    link/ether 02:42:99:74:02:a6 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:99ff:fe74:2a6/64 scope link 
       valid_lft forever preferred_lft forever
```

修改netplan网络配置文件

```shell
sudo vim /etc/netplan/50-cloud-init.yaml
```

这里的`192.168.5.xxx`是你需要固定的IP，可以随意给你想要的ip哈哈哈哈

```shell
# This file is generated from information provided by the datasource.  Changes 
# to it will not persist across an instance reboot.  To disable cloud-init's
# network configuration capabilities, write a file
# /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg with the following:
# network: {config: disabled}
network:
    ethernets:
        ens33:
            dhcp4: true
            addresses: [192.168.5.xxx/24]
    version: 2
```

修改完保持退出:wq

## **步骤二**

完成修改后，使用以下命令生效

```shell
sudo netplan apply
```

这里可以使用`ip addr`查看`ens33`最新修改的内网地址192.168.5.111了

```shell
mumu@ubuntu_01:/$ ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:0c:29:a9:9a:a8 brd ff:ff:ff:ff:ff:ff
    inet 192.168.5.111/24 brd 192.168.5.255 scope global ens33
       valid_lft forever preferred_lft forever
    inet 192.168.5.139/24 brd 192.168.5.255 scope global secondary dynamic ens33
       valid_lft 903sec preferred_lft 903sec
    inet6 fe80::20c:29ff:fea9:9aa8/64 scope link 
       valid_lft forever preferred_lft forever
3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
    link/ether 02:42:99:74:02:a6 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:99ff:fe74:2a6/64 scope link 
       valid_lft forever preferred_lft forever
```

配置完成你又可以开心的玩耍了~！^_^