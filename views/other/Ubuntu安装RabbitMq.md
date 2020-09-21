---
title:      Ubuntu安装RabbitMq
date:       2020-09-09
isShowComments: true

tags:
 - RabbitMq
 - Ubuntu
 - 消息中间件
 
categories:
  - 学习
---

# **Ubuntu安装RabbitMQ**

## 1.环境准备

由于RabbitMQ采用的Erlang语言编写的，故需先安装Erlang

- 更新软件列表

  ```shell
  sudo apt-get update
  ```

- 安装Erlang

  ```shell
  sudo apt-get install erlang-nox 
  ```

## **2.安装**RabbitMQ

- 添加rabbitmq的仓库列表配置文件

  ```
  echo 'deb http://www.rabbitmq.com/debian/ testing main' | sudo tee /etc/apt/sources.list.d/rabbitmq.list
  ```

- 加入rabbitmq signing key

  ```
  wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
  ```

- 更新软件列表

  ```
  sudo apt-get update
  ```

- 安装RabbitMq，安装完之后rabbitmq默认已启动

  ```
  sudo apt-get install rabbitmq-server
  ```

## 3.启用插件管理功能

- 启用web管理插件

  ```
  sudo rabbitmq-plugins enable rabbitmq_management
  ```

- 重启rabbitmq服务(这一步容易发生错误，第6步有本人安装过程中发生的错误不知道对大家是否有帮助)

  ```
  sudo systemctl restart rabbitmq-server
  ```

## 4.添加账号配置权限

### 4.1.账号

- 添加账号，这里的账号是admin，密码是19961225

  ```shell
  sudo rabbitmqctl add_user admin 19961225
  ```

- 可以使用该条命令查看账号列表，其中(guest)为默认游客账户，账号密码都是guest

  ```shell
  sudo rabbitmqctl list_users
  ```

### 4.2.权限

- 授权

  ```shell
  sudo rabbitmqctl  set_permissions -p / admin '.*' '.*' '.*'
  ```

- 查看权限列表

  ```shell
  sudo rabbitmqctl list_permissions -p /
  ```

- 赋予administrator角色

  ```shell
  sudo rabbitmqctl set_user_tags admin administrator
  ```

## 5.常用命令

- 启动rabbitMq服务

  ```shell
  sudo rabbitmq-server start
  ```

  后台运行启动

  ```shell
  sudo rabbitmq-server -detached
  ```

- 停止rabbitMq服务

  ```shell
  sudo rabbitmq-server stop
  ```

- 重启rabbitMq服务

  ```shell
  sudo rabbitmq-server restart
  ```

## 6.问题

- 在操作RabbitMq服务时出现error，无论是启动，重启，停止，都会出现以下问题

  ```shell
  ERROR: node with name "rabbit" already running on "xxxxxxxxx"
  ```

  **解决方法**

  `ps -ef|grep rabbit`找到RabbitMq进程，全部kill，然后再重启`rabbitmq-server start`

  ```
  root@xxxxxxxxx:/etc/rabbitmq# ps -ef|grep rabbit
  rabbitmq  4328     1  0 15:30 ?        00:00:00 /bin/sh /usr/sbin/rabbitmq-server
  rabbitmq  4333  4328  0 15:30 ?        00:00:00 /bin/sh /usr/lib/rabbitmq/bin/rabbitmq-server
  rabbitmq  4485     1  0 15:30 ?        00:00:00 /usr/lib/erlang/erts-9.2/bin/epmd -daemon
  rabbitmq  4589  4333  0 15:30 ?        00:00:04 /usr/lib/erlang/erts-9.2/bin/beam.smp -W w -A 64 -P 1048576 -t 5000000 -stbt db -zdbbl 32000 -K true -B i -- -root /usr/lib/erlang -progname erl -- -home /var/lib/rabbitmq -- -pa /usr/lib/rabbitmq/lib/rabbitmq_server-3.6.10/ebin -noshell -noinput -s rabbit boot -sname rabbit@xxxxxxxxx -boot start_sasl -kernel inet_default_connect_options [{nodelay,true}] -sasl errlog_type error -sasl sasl_error_logger false -rabbit error_logger {file,"/var/log/rabbitmq/rabbit@xxxxxxxxx.log"} -rabbit sasl_error_logger {file,"/var/log/rabbitmq/rabbit@xxxxxxxxx-sasl.log"} -rabbit enabled_plugins_file "/etc/rabbitmq/enabled_plugins" -rabbit plugins_dir "/usr/lib/rabbitmq/plugins:/usr/lib/rabbitmq/lib/rabbitmq_server-3.6.10/plugins" -rabbit plugins_expand_dir "/var/lib/rabbitmq/mnesia/rabbit@xxxxxxxxx-plugins-expand" -os_mon start_cpu_sup false -os_mon start_disksup false -os_mon start_memsup false -mnesia dir "/var/lib/rabbitmq/mnesia/rabbit@xxxxxxxxx" -kernel inet_dist_listen_min 25672 -kernel inet_dist_listen_max 25672
  rabbitmq  4714  4589  0 15:30 ?        00:00:00 erl_child_setup 65536
  rabbitmq  4769  4714  0 15:30 ?        00:00:00 inet_gethost 4
  rabbitmq  4770  4769  0 15:30 ?        00:00:00 inet_gethost 4
  root      6940  3172  0 15:57 pts/0    00:00:00 grep --color=auto rabbit
  root@xxxxxxxxx:/etc/rabbitmq# kill 4328
  root@xxxxxxxxx:/etc/rabbitmq# kill 4333
  -bash: kill: (4333) - No such process
  root@xxxxxxxxx:/etc/rabbitmq# kill 4485
  -bash: kill: (4485) - No such process
  root@xxxxxxxxx:/etc/rabbitmq# ps -ef|grep rabbit
  rabbitmq  7225     1  0 15:58 ?        00:00:00 /usr/lib/erlang/erts-9.2/bin/epmd -daemon
  root      7256  3172  0 15:58 pts/0    00:00:00 grep --color=auto rabbit
  root@xxxxxxxxx:/etc/rabbitmq# kill 7225
  root@xxxxxxxxx:/etc/rabbitmq# ps -ef|grep rabbit
  root      7258  3172  0 15:58 pts/0    00:00:00 grep --color=auto rabbit
  root@xxxxxxxxx:/etc/rabbitmq# sudo rabbitmq-server start
  
                RabbitMQ 3.6.10. Copyright (C) 2007-2017 Pivotal Software, Inc.
    ##  ##      Licensed under the MPL.  See http://www.rabbitmq.com/
    ##  ##
    ##########  Logs: /var/log/rabbitmq/rabbit@xxxxxxxxx.log
    ######  ##        /var/log/rabbitmq/rabbit@xxxxxxxxx-sasl.log
    ##########
                Starting broker...
   completed with 6 plugins.
  ```

  [感谢大佬解答](https://blog.csdn.net/qq_27383857/article/details/105143928)
  
- 启动rabbitmq报错Failed to start RabbitMQ broker

  ```sh
  Jun 21 17:11:12 sf206152 rabbitmq-server[31112]: {bad_return,
  Jun 21 17:11:12 sf206152 rabbitmq-server[31112]: {{rabbit,start,[normal,[]]},
  Jun 21 17:11:12 sf206152 rabbitmq-server[31112]: {'EXIT',
  Jun 21 17:11:12 sf206152 rabbitmq-server[31112]: {rabbit,failure_during_boot,
  Jun 21 17:11:12 sf206152 rabbitmq-server[31112]: {error,
  Jun 21 17:11:12 sf206152 rabbitmq-server[31112]: {schema_integrity_check_failed,
  Jun 21 17:11:12 sf206152 rabbitmq-server[31112]: [{table_attributes_mismatch,rabbit_user,
  Jun 21 17:11:12 sf206152 rabbitmq-server[31112]: [username,password_hash,tags],
  Jun 21 17:11:12 sf206152 rabbitmq-server[31112]: [username,password_hash,tags,
  Jun 21 17:11:12 sf206152 rabbitmq-server[31112]: hashing_algorithm]}]}}}}}}}
  Jun 21 17:11:12 sf206152 rabbitmq-server[31112]: Log files (may contain more information):
  Jun 21 17:11:12 sf206152 rabbitmq-server[31112]: /var/log/rabbitmq/rabbit@sf206152.log
  Jun 21 17:11:12 sf206152 rabbitmq-server[31112]: /var/log/rabbitmq/rabbit@sf206152-sasl.log
  Jun 21 17:11:13 sf206152 rabbitmq-server[31112]: {"init terminating in do_boot",{rabbit,failure_during_boot,{could_not_start,rabbit,{bad_return,{{rabbit,start,[normal,[]]},{'EXIT',{rabbit,failure_du
  Jun 21 17:11:14 sf206152 rabbitmq-server[31112]: Crash dump was written to: erl_crash.dump
  Jun 21 17:11:14 sf206152 rabbitmq-server[31112]: init terminating in do_boot ()
  Jun 21 17:11:14 sf206152 systemd[1]: rabbitmq-server.service: main process exited, code=exited, status=1/FAILURE
  Jun 21 17:11:14 sf206152 rabbitmqctl[31207]: Stopping and halting node rabbit@sf206152 ...
  Jun 21 17:11:14 sf206152 rabbitmqctl[31207]: Error: unable to connect to node rabbit@sf206152: nodedown
  Jun 21 17:11:14 sf206152 rabbitmqctl[31207]: DIAGNOSTICS
  Jun 21 17:11:14 sf206152 rabbitmqctl[31207]: ===========
  Jun 21 17:11:14 sf206152 rabbitmqctl[31207]: attempted to contact: [rabbit@sf206152]
  Jun 21 17:11:14 sf206152 rabbitmqctl[31207]: rabbit@sf206152:
  Jun 21 17:11:14 sf206152 rabbitmqctl[31207]: * connected to epmd (port 4369) on sf206152
  Jun 21 17:11:14 sf206152 rabbitmqctl[31207]: * epmd reports: node 'rabbit' not running at all
  Jun 21 17:11:14 sf206152 rabbitmqctl[31207]: no other nodes on sf206152
  Jun 21 17:11:14 sf206152 rabbitmqctl[31207]: * suggestion: start the node
  Jun 21 17:11:14 sf206152 rabbitmqctl[31207]: current node details:
  Jun 21 17:11:14 sf206152 rabbitmqctl[31207]: - node name: rabbitmqctl31207@sf206152
  Jun 21 17:11:14 sf206152 rabbitmqctl[31207]: - home dir: /var/lib/rabbitmq
  Jun 21 17:11:14 sf206152 rabbitmqctl[31207]: - cookie hash: cmvEv4p7/gNkQVUvRdn10w==
  Jun 21 17:11:14 sf206152 systemd[1]: rabbitmq-server.service: control process exited, code=exited status=2
  Jun 21 17:11:14 sf206152 systemd[1]: Failed to start RabbitMQ broker.
  -- Subject: Unit rabbitmq-server.service has failed
  -- Defined-By: systemd
  -- Support: http://lists.freedesktop.org/mailman/listinfo/systemd-devel
  --
  -- Unit rabbitmq-server.service has failed.
  --
  -- The result is failed.
  ```

  **解决方案：**

  /var/lib/rabbitmq/mnesia 目录下存在rabbit@ubuntu.pid、rabbit@ubuntu、rabbit@ubuntu-plugins-expand，删除这3项后，再使用systemctl start rabbitmq-server启动，不过这样这样的话原来的账号密码就会被初始化掉，所以这边需要重新设置账号密码以及权限

