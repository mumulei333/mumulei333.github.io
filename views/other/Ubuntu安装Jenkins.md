---
title:      Ubuntu安装Jenkins
date:       2020-09-09
isShowComments: true

tags:
 - Docker
 - Jenkins
 - Devops
 - Ubuntu
 
categories:
  - 记录
---

# **Ubuntu 安装Jenkins**

1. ## **介绍**

   [Jenkins](https://jenkins.io/)是一个开源自动化服务器，可以自动执行持续集成和交付软件所涉及的重复技术任务。Jenkins是基于Java的，可以从Ubuntu软件包安装，也可以通过下载和运行其Web应用程序存档（WAR）文件来安装 - 该文件是构成在服务器上运行的完整Web应用程序的文件集合。

   在本教程中，您将通过添加其Debian软件包存储库来安装Jenkins，并使用该存储库来安装具有`apt`的软件包。

   ## **1.环境准备**

   要学习本教程，您需要：

   - 一个服务器(本机系统版本：Ubuntu 18.04.4)，需要一个sudo权限的非root 用户(默认Ubuntu用户)和防火墙。我们建议从至少1 GB的RAM开始。具体硬件详情可以看到[JenKins硬件](https://jenkins.io/doc/book/hardware-recommendations/)。
   
     查看自己的系统版本
   
     ```shell
     cat /etc/issue
     ```
   
   - 安装Java 8，遵循我们在Ubuntu 18.04上安装特定版本的OpenJDK的指导原则。
   
     查看系统是否安装jdk
   
     ```shell
     java -version
     ```
   
     如没有可使用以下命令(包含jdk)
   
     ```shell
     sudo apt-get install openjdk-8-jre
     ```
   
     配置jdk环境, 进入 `/etc/profile`添加配置文件，:wq保存退出
   
     ```shell
     #set jdk environment 
     export JAVA_HOME=/usr/lib/jvm/Java-8-openjdk-amd64 
     export JRE_HOME=$JAVA_HOME/jre 
     export CLASSPATH=$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH 
     export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
     ```
   
     刷新配置文件使其生效
   
     ```shell
     source /etc/profile
     ```
   
     

   ## **2.安装Jenkins**

   默认Ubuntu软件包中包含的Jenkins版本通常位于项目本身的最新可用版本之后。要利用最新的修补程序和功能，您可以使用项目维护的软件包来安装Jenkins。

   首先，将存储库密钥添加到系统：

   ```shell
   wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
   ```

   添加密钥后，系统将返回`OK`。接下来，将Debian软件包存储库地址附加到服务器的`sources.list`上：

   ```shell
   sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
   ```

   当这两个都到位时，运行`update`以便`apt`使用新的存储库：

   ```shell
   sudo apt update
   ```

   最后，安装Jenkins及其依赖项：

   ```shell
   sudo apt install jenkins
   ```

   现在Jenkins及其依赖项已经到位，我们将启动Jenkins服务器。

   ## **第2步 - 启动Jenkins**

   让我们用 `systemctl`启动Jenkins：

   ```shell
   sudo systemctl start jenkins
   ```

   由于`systemctl`不显示输出，您可以使用其`status`命令来验证Jenkins是否已成功启动：

   ```shell
   sudo systemctl status jenkins
   ```

  如果不出意外的话你可以看到已经正在运行了**active**

   ```shell
   ● jenkins.service - LSB: Start Jenkins at boot time
      Loaded: loaded (/etc/init.d/jenkins; generated)
      Active: active (exited) since Mon 2018-07-09 17:22:08 UTC; 6min ago
        Docs: man:systemd-sysv-generator(8)
       Tasks: 0 (limit: 1153)
      CGroup: /system.slice/jenkins.service
   ```

   **注意**：

​	Jenkins默认端口是8080，但是如果本机上已经有8080端口在使用了，那么可以修改 `/etc/default/jenkins`中的HTTP_PORT参数

```shell
...
#   If commented out, the value from the OS is inherited,  which is normally 022 (as of Ubuntu 12.04,
#   by default umask comes from pam_umask(8) and /etc/login.defs

# UMASK=027

# port for HTTP connector (default 8080; disable with -1)
HTTP_PORT=8080


# servlet context, important if you want to use apache proxying
PREFIX=/$NAME

# arguments to pass to jenkins.

...
```

​	

   ## **4.打开防火墙**

   默认情况下，Jenkins在端口`8080`上运行，所以让我们使用`ufw`命令打开该端口：

   ```shell
   sudo ufw allow 8080
   ```

   检查`ufw`的状态以确认新规则：

   ```shell
   sudo ufw status
   ```

   您将看到流量被允许从任何地方移植到端口`8080`：

   ```shell
   Status: active
   
   To                         Action      From
   --                         ------      ----
   OpenSSH                    ALLOW       Anywhere
   8080                       ALLOW       Anywhere
   OpenSSH (v6)               ALLOW       Anywhere (v6)
   8080 (v6)                  ALLOW       Anywhere (v6)
   ```

   **注意：**如果防火墙处于非活动(**inactive**)状态，则以下命令将允许OpenSSH并启用防火墙：

   ```shell
   sudo ufw allow OpenSSH
   sudo ufw enable
   ```

   安装Jenkins并配置防火墙后，我们可以完成初始设置。

   ## 5. 初始化Jenkins

 此时就可以用web页面初始化Jenkins了，登入http:localhost:8080，开始初始化

根据提示在终端使用`cat`命令显示密码：

   ```javascript
   sudo cat /var/lib/jenkins/secrets/initialAdminPassword
   ```

输入**管理员密码**后开始next时刻

#### 常用插件
- nodejs
- git
- gradle
- theme
- pipeline




   

   