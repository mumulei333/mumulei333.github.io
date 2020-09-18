---
title:      Ubuntu安装Redis
date:       2020-09-09
isShowComments: true

tags:
 - Ubuntu
 - Redis
 - 数据库
 
categories:
 - 学习
---

## Ubuntu系统下安装Redis

#### 1.安装

```
$sudo apt-get update
$sudo apt-get install redis-server
```

#### 2.启动redis

```
$ redis-server
```

#### 3.查看redis是否启动

```
$ redis-cli
```
以上命令将打开以下终端：

```
127.0.0.1:6379> 
```
127.0.0.1是本机IP ，6379是redis默认服务端口，现在我们输入 PING 命令

```
127.0.0.1:6379> ping
PONG
```
以上说明我们已经成功安装了redis

#### 4.基本操作语句

- ###### 查询redis运行状态

```
$ /etc/init.d/redis-server status
```
运行后可以看到一下redis运行情况

```
● redis-server.service - Advanced key-value store
   Loaded: loaded (/lib/systemd/system/redis-server.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2019-09-24 20:50:31 CST; 19h ago
     Docs: http://redis.io/documentation,
           man:redis-server(1)
  Process: 6845 ExecStopPost=/bin/run-parts --verbose /etc/redis/redis-server.post-down.d (code=exited, status=0/SUCCESS)
  Process: 6841 ExecStop=/bin/kill -s TERM $MAINPID (code=exited, status=0/SUCCESS)
  Process: 6836 ExecStop=/bin/run-parts --verbose /etc/redis/redis-server.pre-down.d (code=exited, status=0/SUCCESS)
  Process: 6861 ExecStartPost=/bin/run-parts --verbose /etc/redis/redis-server.post-up.d (code=exited, status=0/SUCCESS)
  Process: 6857 ExecStart=/usr/bin/redis-server /etc/redis/redis.conf (code=exited, status=0/SUCCESS)
  Process: 6852 ExecStartPre=/bin/run-parts --verbose /etc/redis/redis-server.pre-up.d (code=exited, status=0/SUCCESS)
 Main PID: 6860 (redis-server)
   CGroup: /system.slice/redis-server.service
           └─6860 /usr/bin/redis-server 0.0.0.0:6379

Sep 24 20:50:31 iZwz9hcv8qx067qki0x16qZ systemd[1]: redis-server.service: Service hold-off time over, scheduling restart.
Sep 24 20:50:31 iZwz9hcv8qx067qki0x16qZ systemd[1]: Stopped Advanced key-value store.
Sep 24 20:50:31 iZwz9hcv8qx067qki0x16qZ systemd[1]: Starting Advanced key-value store...
Sep 24 20:50:31 iZwz9hcv8qx067qki0x16qZ run-parts[6852]: run-parts: executing /etc/redis/redis-server.pre-up.d/00_example
Sep 24 20:50:31 iZwz9hcv8qx067qki0x16qZ run-parts[6861]: run-parts: executing /etc/redis/redis-server.post-up.d/00_example
Sep 24 20:50:31 iZwz9hcv8qx067qki0x16qZ systemd[1]: Started Advanced key-value store.
```
其中Active 属性就是运行状态


- ###### 重启redis

```
$ /etc/init.d/redis-server restart
```
运行后显示

```
[ ok ] Restarting redis-server (via systemctl): redis-server.service.
```


- ###### 停止redis

```
$ /etc/init.d/redis-server stop
```
运行后显示

```
[ ok ] Stopping redis-server (via systemctl): redis-server.service.
```
停止后可以使用redis-server status语句查看redis运行状态已经死亡

```
● redis-server.service - Advanced key-value store
   Loaded: loaded (/lib/systemd/system/redis-server.service; enabled; vendor preset: enabled)
   Active: inactive (dead) since Wed 2019-09-25 16:41:48 CST; 40s ago
     Docs: http://redis.io/documentation,
           man:redis-server(1)
  Process: 7931 ExecStopPost=/bin/run-parts --verbose /etc/redis/redis-server.post-down.d (code=exited, status=0/SUCCESS)
  Process: 7926 ExecStop=/bin/kill -s TERM $MAINPID (code=exited, status=0/SUCCESS)
  Process: 7922 ExecStop=/bin/run-parts --verbose /etc/redis/redis-server.pre-down.d (code=exited, status=0/SUCCESS)
  Process: 7806 ExecStartPost=/bin/run-parts --verbose /etc/redis/redis-server.post-up.d (code=exited, status=0/SUCCESS)
  Process: 7802 ExecStart=/usr/bin/redis-server /etc/redis/redis.conf (code=exited, status=0/SUCCESS)
  Process: 7796 ExecStartPre=/bin/run-parts --verbose /etc/redis/redis-server.pre-up.d (code=exited, status=0/SUCCESS)
 Main PID: 7805 (code=exited, status=0/SUCCESS)

Sep 25 16:38:28 iZwz9hcv8qx067qki0x16qZ systemd[1]: Starting Advanced key-value store...
Sep 25 16:38:28 iZwz9hcv8qx067qki0x16qZ run-parts[7796]: run-parts: executing /etc/redis/redis-server.pre-up.d/00_example
Sep 25 16:38:28 iZwz9hcv8qx067qki0x16qZ run-parts[7806]: run-parts: executing /etc/redis/redis-server.post-up.d/00_example
Sep 25 16:38:28 iZwz9hcv8qx067qki0x16qZ systemd[1]: Started Advanced key-value store.
Sep 25 16:39:27 iZwz9hcv8qx067qki0x16qZ systemd[1]: Started Advanced key-value store.
Sep 25 16:41:48 iZwz9hcv8qx067qki0x16qZ systemd[1]: Stopping Advanced key-value store...
Sep 25 16:41:48 iZwz9hcv8qx067qki0x16qZ run-parts[7922]: run-parts: executing /etc/redis/redis-server.pre-down.d/00_example
Sep 25 16:41:48 iZwz9hcv8qx067qki0x16qZ run-parts[7931]: run-parts: executing /etc/redis/redis-server.post-down.d/00_example
Sep 25 16:41:48 iZwz9hcv8qx067qki0x16qZ systemd[1]: Stopped Advanced key-value store.
```


- ###### 启动redis

```
$ /etc/init.d/redis-server start
```
运行后显示

```
[ ok ] Starting redis-server (via systemctl): redis-server.service.
```

#### 5.redis相关配置

- ###### 外部访问权限
```
$ vi /etc/redis/redis.conf
```
打开redis配置文件，找到bind 127.0.0.1将只允许本地访问改为bind 0.0.0.0无访问限制

```
...
...
# By default Redis listens for connections from all the network interfaces
# available on the server. It is possible to listen to just one or multiple
# interfaces using the "bind" configuration directive, followed by one or
# more IP addresses.
#
# Examples:
#
# bind 192.168.1.100 10.0.0.1
bind 127.0.0.1
...
...
```
更改并保持后重启redis服务，可使用redis-server restart 语句重启服务

---
**注意要点**
如果服务器是在阿里云或某某云上的话那还需要在设置实例安全组
![image](https://note.youdao.com/favicon.ico)

---

- ###### redis设置连接密码

打开redis配置文件，找到文件中被注释的这一行#requirepass foobared，去掉(#)注释后foobared就是初始密码，可自行更改;

```
...
...
# Require clients to issue AUTH <PASSWORD> before processing any other
# commands.  This might be useful in environments in which you do not trust
# others with access to the host running redis-server.
#
# This should stay commented out for backward compatibility and because most
# people do not need auth (e.g. they run their own servers).
#
# Warning: since Redis is pretty fast an outside user can try up to
# 150k passwords per second against a good box. This means that you should
# use a very strong password otherwise it will be very easy to break.
#
# requirepass foobared
...
...

```
更改后保存退出后重启redis服务就行了



#### 6.redis卸载

```
$ sudo apt-get purge --auto-remove redis-server
```


#### 7.使用wget安装包安装redis(通用版适用于各linux版本的安装方式)

具体详情：https://www.cnblogs.com/marvinn/p/11081106.html






