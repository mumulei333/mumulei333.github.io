---
title:      Ubuntu安装MongoDB
date:       2020-09-09
isShowComments: true

tags:
 - Ubuntu
 - MongoDB
 - 数据库
 
categories:
  - 学习
---

## Ubuntu安装MongoDB

1. ### 安装MongoDB

   ```shell
   # 1. 更新
   sudo apt-get update
   # 2. 安装
   sudo apt-get install mongodb-org
   # 3. 添加至开机自启(可不配置)
   sudo systemctl enable mongod
   ```


2. ### 常用指令

   - #### 查看运行状态

     ```shell
     sudo service  mongodb status
     ```

   - #### 启动服务

     ```shell
     sudo service  mongodb start
     ```

   - #### 停止服务

     ```shell
     sudo service  mongodb stop
     ```

   - #### 重启服务

     ```shell
     sudo service  mongodb restart
     ```

     或者

     ```shell
     sudo mongod -auth
     ```

   

   3. ### 相关配置

     - #### 配置远程连接

       ```shell
       sudo vim /etc/mongod.conf
       ```

       将 bind_ip: 127.0.0.1 修改为：bind_ip: 0.0.0.0 即可

       ```shell
       ...
       logappend=true
       
       bind_ip = 127.0.0.1
       #port = 27017
       
       # Enable journaling, http://www.mongodb.org/display/DOCS/Journaling
       journal=true
       
       # Enables periodic logging of CPU utilization and I/O wait
       #cpu = true
       
       # Turn on/off security.  Off is currently the default
       #noauth = true
       auth = true
       
       # Verbose logging output.
       #verbose = true
       ...
       
       ```

       修改完:wq保存退出并且重启服务即可

     - #### 添加超级管理员

       ```shell
       mongo   # 进入mongo shell
       ```

       进入mongo内

       ```shell
       
       > show dbs   # 显示所有数据库
       > use admin  # 进入admin数据库
       > db.createUser(
         {
           user: "admin",
           pwd: "abc123",
           roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
         }
       )     # 创建一个用户，身份是超级管理员
       ```

       完成后会提示Successfully added user相关信息

       ```shell
       > db.auth("admin","abc123")
       1
       ```

       若返回为1，则认证成功！现在，我们超级管理员也创建好了，可以为其他数据库创建用户了

       MongoDB基本的角色：
       1.**数据库用户角色**：read、readWrite;
       2.**数据库管理角色**：dbAdmin、dbOwner、userAdmin；
       3.**集群管理角色**：clusterAdmin、clusterManager、clusterMonitor、hostManager；
       4.**备份恢复角色**：backup、restore；
       5.**所有数据库角色**：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
       6.**超级用户角色**：root
       还有几个角色间接或直接提供了系统超级用户的访问（dbOwner 、userAdmin、userAdminAnyDatabase）

       其中MongoDB默认是没有开启用户认证的，也就是说游客也拥有超级管理员的权限。userAdminAnyDatabase：有分配角色和用户的权限，但没有查写的权限
       

       

       

     

