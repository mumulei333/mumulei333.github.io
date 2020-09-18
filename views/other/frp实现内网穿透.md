---
title:      frp实现内网穿透
date:       2020-09-09
isShowComments: true

tags:
 - Docker
 - Frp
 - 网络
    
categories:
 - 学习
---

# frp实现内网穿透

> 前提概要：服务器端和客户端都需要预装 docker

## 一、简介

frp 是一个可用于内网穿透的高性能的反向代理应用，支持 tcp, udp 协议，为 http 和 https 应用协议提供了额外的能力，且尝试性支持了点对点穿透。 详细文档请参考：https://github.com/fatedier/frp/blob/master/README_zh.md

frp 支持 macOS, freebsd, windows,linux x64,linux i386, linux arm,Linux arm64, Mips 等不同的系统和 CPU 架构，并分别打包了文件。

因此，为了方便在不同的系统中安装和配置 frp，我基于 docker 对 frp 进行了封装和打包。

但是由于 docker 的限制，目前只支持(amd64, arm32v6, arm32v70, arm64v8, i386)

项目地址：

https://github.com/snowdreamtech/frp

DockerHub：

https://hub.docker.com/r/snowdreamtech/frps

https://hub.docker.com/r/snowdreamtech/frpc

## 二、配置以及使用

将 **frps** 及 **frps.ini** 放到具有公网 IP 的机器上。

将 **frpc** 及 **frpc.ini** 放到处于内网环境的机器上。

### 通过 ssh 访问公司内网机器

1. 修改 frps.ini 文件，这里使用了最简化的配置，设置了 frp 服务器端接收客户端流量的端口：

```
# frps.ini
[common]
bind_port = 7000
```

1. 启动 frps：

```
docker run  --network host -d -v /etc/frp/frps.ini:/etc/frp/frps.ini --name frps snowdreamtech/frps
```

1. 修改 frpc.ini 文件，假设 frps 所在服务器的公网 IP 为 x.x.x.x：

```
# frpc.ini
[common]
server_addr = x.x.x.x
server_port = 7000

[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 6000
```

注意，`local_port`（客户端侦听）和 `remote_port`（服务器端暴露）是用来出入 frp 系统的两端，`server_port` 则是服务器用来与客户端通讯的。

1. 启动 frpc：

```shell
docker run  --network host -d -v /etc/frp/frpc.ini:/etc/frp/frpc.ini --name frpc snowdreamtech/frpc
```

1. 通过 ssh 访问内网机器，假设用户名(客户端内网服务器用户名)为 test：，服务端ip地址：x.x.x.x

```shell
ssh test@x.x.x.x -p 6000
```

到这里你已经完成了一个简单的内网穿透demo，如果想了解更多可以看[frp项目中文文档](https://github.com/fatedier/frp/blob/master/README_zh.md#功能说明)

## 三、问题

在第三方远程ssh登入内网服务器时发生该错误

```
ubuntu@VM-28-88-ubuntu:~$ ssh -p 6001 mumu@xxx.xxx.xxx.xx
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
SHA256:aAfoz7L7j6vNUp7sUwOFiCE/ZF0VbveCDJ6f1/+5ezQ.
Please contact your system administrator.
Add correct host key in /home/ubuntu/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /home/ubuntu/.ssh/known_hosts:3
  remove with:
  ssh-keygen -f "/home/ubuntu/.ssh/known_hosts" -R "[xxx.xxx.xxx.xx]:6001"
ECDSA host key for [xxx.xxx.xxx.xx]:6001 has changed and you have requested strict checking.
Host key verification failed.
```

原因可能是之前有在这个服务器上ssh登入过这台内网服务器，后面因为一些原因调整了这台内网服务器的frp配置导致的

### 解决方案

根据上面给出的提示

```
Add correct host key in /home/ubuntu/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /home/ubuntu/.ssh/known_hosts:3
  remove with:
  ssh-keygen -f "/home/ubuntu/.ssh/known_hosts" -R "[xxx.xxx.xxx.xx]:6001"
ECDSA host key for [xxx.xxx.xxx.xx]:6001 has changed and you have requested strict checking.
```

进入known_hosts文件删除第三行xxx.xxx.xxx.xx:6001配置

```shell
sudo vim /home/ubuntu/.ssh/known_hosts
```

删除完毕，保存退出:wq

这样你就又可以愉快的玩耍了~! ^_^

## 四、感谢大佬

[frp项目中文文档](https://github.com/fatedier/frp/blob/master/README_zh.md)

[frp docker镜像 中文文档](https://www.itcoder.tech/posts/docker-frp/)

