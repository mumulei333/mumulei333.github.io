---
title:      Ubuntu安装Mysql
date:       2020-09-09
isShowComments: true

tags:
 - Ubuntu
 - Mysql
 - 数据库
 
categories:
  - 记录
---

## Ubuntu安装Mysql

1. ### 安装Mysql

目前Ubuntu下安装Mysql有两种方式，一种是源码包进行安装，另一种是APT安装，相比而言APT安装比较简单，因此也推荐APT进行安装。

- #### APT安装

  APT安装时，需要安装两个软件，分别为Mysql客户端和服务，代码如下：
  首先安装客户端工具mysql-client

  ```shell
  sudo apt install mysql-client  #也可表示为mysql-client-x.x来指定版本，例如mysql-client-5.7
  ```

  再安装mysql服务mysql-server

  ```shell
  sudo apt install mysql-server  #也可表示为mysql-server-x.x来指定版本，例如mysql-server-5.7
  ```

  一些旧的版本可能会再安装过程中需要你设置root初始密码

- #### 源码包安装

  源码包安装比较复杂这里就不介绍了，需要的可以百度一哈



2. ### 常用指令

   - #### 查看运行状态

     ```shell
     sudo service mysql status
     ```

   - #### 启动服务

     ```shell
     sudo service mysql start
     ```

   - #### 关闭服务

     ```shell
     sudo service mysql stop
     ```

   - #### 重启服务

     ```shell
     sudo service mysql restart
     ```




3. ### 卸载Mysql

   ```shell
   #也可表示为mysql-server-x.x来指定版本，例如mysql-server-5.7
   sudo apt-get autoremove --purge mysql-server
   sudo apt-get remove mysql-common
   sudo rm -rf /etc/mysql/  /var/lib/mysql
   #清理残留数据
   dpkg -l |grep ^rc|awk '{print $2}' |sudo xargs dpkg -P  
   sudo apt autoremove
   sudo apt autoreclean
   ```

   查看是否卸载成功

   ```shell
   netstat -tap | grep mysql
   ```




4. ### 	设置Root密码

   安装时如果没有设置初始密码的话，使用该命令查看默认密码

   ```shell
   sudo cat /etc/mysql/debian.cnf
   ```

   运行后得到以下内容，获取其中client密码

   ```shell
   # Automatically generated for Debian scripts. DO NOT TOUCH!
   [client]
   host     = localhost
   user     = debian-sys-maint
   password = edPL7A8WJ8mXLOTM
   socket   = /var/run/mysqld/mysqld.sock
   [mysql_upgrade]
   host     = localhost
   user     = debian-sys-maint
   password = edPL7A8WJ8mXLOTM
   socket   = /var/run/mysqld/mysqld.sock
   ```

   使用client的默认密码登入mysql

   ```shell
   sudo mysql -u root -p
   ```

   进入mysql后更新root密码，这里注意每一句命令后的";"不要漏掉

   ```shell
   use mysql;
   update user set authentication_string=password("需要设置的密码") where user="root";
   flush privileges;
   ```

   大功告成！使用ctrl+D退出



5. ### 设置远程访问
 登入mysql,如何获取密码可以看上一小节

   ```shell
   sudo mysql -u root -p
   ```
   
   登入后执行
   
   ```shell
   GRANT ALL PRIVILEGES ON *.* TO 'root'@'%'IDENTIFIED BY '远程访问密码' WITH GRANT OPTION;
   flush privileges;
   ```
   
   其中 ‘root’@’%’ 中的root表示远程访问数据库的账户，%表示所有IP均可访问，'远程访问密码’表示远程访问mysql时需要的密码
   
   修改mysql配置文件
   
   ```shell
   sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf
   ```
   
   注释掉bind-address这一行
   
   ```shell
   user            = mysql
   pid-file        = /var/run/mysqld/mysqld.pid
   socket          = /var/run/mysqld/mysqld.sock
   port            = 3306
   basedir         = /usr
   datadir         = /var/lib/mysql
   tmpdir          = /tmp
   lc-messages-dir = /usr/share/mysql
   skip-external-locking
   #
   # Instead of skip-networking the default is now to listen only on
   # localhost which is more compatible and is not less secure.
   # bind-address          = 127.0.0.1    注释掉这一行
   #
   # * Fine Tuning
   #
   key_buffer_size         = 16M
   max_allowed_packet      = 16M
   thread_stack            = 192K
   thread_cache_size       = 8
   
   ```
   
   修改完:wq退出
   
   重启mysql服务
   
   ```shell
   sudo service mysql restart
   ```
   
   大功告成！快去试试吧！

