---
title:      Mac便捷指令
date:       2020-09-09
isShowComments: true

tags:
 - Mac
    
categories:
  - 记录
---

### mac上传下载服务器文件

```
# 下载文件夹 
sudo scp [-P port] -r 远程登录服务器用户名@远程服务器ip地址:/下载文件夹的目录 本地目录

# 下载文件
sudo scp [-P port] 远程登录服务器用户名@远程服务器ip地址:/下载文件的目录 本地目录

# 上传文件夹
sudo scp [-P port] -r  本地目录 远程登录服务器用户名@远程服务器ip地址:/上传文件夹的目录 

# 上传文件
sudo scp [-P port] 本地目录  远程登录服务器用户名@远程服务器ip地址:/上传文件的目录 
```
如果用ssh连接远程服务器需要指定端口的话（如不指定默认22号端口），那么用scp拷贝远程文件时也需要指定端口


#### 问题1

`/data/cert/`为服务器目录，`3338763__matafy.com_nginx`为上传的文件

```shell
scp: /data/cert/3338763__matafy.com_nginx: Permission denied
```

这是因为上传到服务器的目录没有权限`/data/cert`，登入到服务器上去使用该命令

```shell
sudo chmod 777 /data/cert
```

