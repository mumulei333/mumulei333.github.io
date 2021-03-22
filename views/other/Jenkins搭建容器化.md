---
title:      Jenkins搭建容器化
date:       2020-09-09
isShowComments: true

tags:
 - Docker
 - Jenkins
 - Devops
 
categories:
  - 学习
---

### 安装docker

```shell
sudo apt update
sudo apt install docker.io -y
```

### 安装jenkins

```shell
sudo docker run -d \
--restart=always \
--privileged=true \
--name jenkins \
-p 9090:8080 \
-p 50000:50000 \
-v /data/jenkins:/var/jenkins_home \
-v /var/run/docker.sock:/var/run/docker.sock \
-v $(which docker):/usr/bin/docker \
-v /root/.docker:/root/.docker \
-v /etc/sysconfig/docker:/etc/sysconfig/docker \
-v /usr/bin/docker-current:/usr/bin/docker-current \
-v /usr/lib/x86_64-linux-gnu/libltdl.so.7:/usr/lib/x86_64-linux-gnu/libltdl.so.7 \
-v /lib64/libgpgme.so.11:/usr/lib/libgpgme.so.11 -u 0 \
-v /lib64/libcrypto.so.10:/usr/lib/libcrypto.so.10 -u 0 \
jenkins/jenkins:lts-jdk11
```

### 初始化jenkins

获取初始化密码，可以在启动容器日志里找到

```shell
sudo docker logs -f --tail 100 jenkins
```

如果没有找到的话，还可以去挂载出来的文件中找

```shell
sudo cat /data/jenkins/secrets/initialAdminPassword
```



### 常用插件

- nodejs
- git
- gradle
- theme
- pipeline



### 问题记录

#### 初始化时一直卡在选择默认插件界面，提示链接超时

在选择是否按转默认插件界面直接选择关闭这个界面那么就会掉过初始化流程，进入到jenkins后在去设置里修改admin的密码，已经安装插件，如果插件安装超时可以修改插件下载地址Update Site

#### 流水线构建项目${}无法识别

将项目配置拉到最下方，看是否勾选了这个，将勾选去掉即可${}生效

- [ ]  Lightweight checkout   

#### jenkins安装node并在shell中使用

[jenkins安装node并在shell中使用](https://www.jianshu.com/p/0a865a321d78)



