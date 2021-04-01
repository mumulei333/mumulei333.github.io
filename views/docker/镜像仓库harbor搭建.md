---
title:      镜像仓库harbor搭建
date:       2020-09-09
isShowComments: true

tags:
 - Docker
 - Harbor
 - Ubuntu
    
categories:
  - 记录
---

### 环境配置

#### 安装docker

```
sudo apt update
sudo apt install docker.io -y
```

#### 安装docker-compose

下载

```powershell
curl -L "https://github.com/docker/compose/releases/download/1.26.0-rc4/docker-compose-Linux-x86_64" -o /usr/local/bin/docker-compose
```

赋权

```shell
chmod +x /usr/local/bin/docker-compose
```

查看版本，验证是否安装成功

```shell
docker-compose --version
```

#### 配置证书

- **生成自签名证书**

  可查看 
  [openssl生成自签名证书](https://mumulei.com/2020/09/09/openssl生成自签名证书/)

  > **注意**：这种方式生成的自签名的证书，如果需要访问的话需要在本机上配置，例如安装完后想使用浏览器去访问harbor的视图界面，那么需要在访问的机器上进行配置(过于麻烦这里就不详讲QAQ)，否则会出现不安全访问，如果浏览器是使用的谷歌那么是访问不了的，如果你不想配置但是又想访问那么你可以选择火狐浏览器，如果既想使用谷歌浏览器访问又不想配置，那么你可以使用下面那种方式配置证书。

- **上传域名证书(推荐)**

  氪金大法好

  在某云平台购买域名，配置域名的DNS，添加一条A纪录指向该台服务器IP；并且购买域名SSL证书并绑定域名，证书申请成功后将证书下载，下载pem格式的证书将其后缀名改成crt文件最后上传服务器即可

### 安装harbor

#### 下载离线包

下载harbor离线包 https://github.com/goharbor/harbor/releases

```
wget https://github.com/goharbor/harbor/releases/download/v2.0.0/harbor-offline-installer-v2.0.0.tgz
```

解压

```
tar zxf harbor-offline-installer-v2.0.0.tgz -C /data
```

#### 准备配置文件

`harbor`是harbor-offline-installer-v2.0.0.tgz解压后的文件

```text
cd /data/harbor
cp harbor.yml.tmpl harbor.yml
```

配置关键信息，主要修改IP、证书、管理员UI登录的密码、data数据目录

```yaml
# Configuration file of Harbor

# The IP address or hostname to access admin UI and registry service.
# hostname设置访问地址，可以使用ip、域名，不可以设置为127.0.0.1或localhost
hostname: 192.168.199.160

# http related config
http:
  # port for http, default is 80. If https enabled, this port will redirect to https port
  port: 80

# https related config
https:
  # https port for harbor, default is 443
  port: 443
  # 证书路径
  certificate: /data/cert/server.crt
  private_key: /data/cert/server.key

# # Uncomment following will enable tls communication between all harbor components
# internal_tls:
#   # set enabled to true means internal tls is enabled
#   enabled: true
#   # put your cert and key files on dir
#   dir: /etc/harbor/tls/internal

# Uncomment external_url if you want to enable external proxy
# And when it enabled the hostname will no longer used
# external_url: https://reg.mydomain.com:8433

# The initial password of Harbor admin
# It only works in first time to install harbor
# 启动Harbor后，管理员UI登录的密码，默认是Harbor12345
harbor_admin_password: mumu282828

# Harbor DB configuration
database:
  # The password for the root user of Harbor DB. Change this before any production use.
  password: root123
  # The maximum number of connections in the idle connection pool. If it <=0, no idle connections are retained.
  max_idle_conns: 50
  # The maximum number of open connections to the database. If it <= 0, then there is no limit on the number of open connections.
  # Note: the default number of connections is 100 for postgres.
  max_open_conns: 100

# 数据存储路径
data_volume: /data/harbor/data

# Harbor Storage settings by default is using /data dir on local filesystem
# Uncomment storage_service setting If you want to using external storage
# storage_service:
#   # ca_bundle is the path to the custom root ca certificate, which will be injected into the truststore
#   # of registry's and chart repository's containers.  This is usually needed when the user hosts a internal storage with self signed certificate.
#   ca_bundle:

#   # storage backend, default is filesystem, options include filesystem, azure, gcs, s3, swift and oss
#   # for more info about this configuration please refer https://docs.docker.com/registry/configuration/
#   filesystem:
#     maxthreads: 100
#   # set disable to true when you want to disable registry redirect
#   redirect:
#     disabled: false

# Clair configuration
clair:
  # The interval of clair updaters, the unit is hour, set to 0 to disable the updaters.
  updaters_interval: 12

# Trivy configuration
trivy:
  # ignoreUnfixed The flag to display only fixed vulnerabilities
  ignore_unfixed: false
  # skipUpdate The flag to enable or disable Trivy DB downloads from GitHub
  #
  # You might want to enable this flag in test or CI/CD environments to avoid GitHub rate limiting issues.
  # If the flag is enabled you have to manually download the `trivy.db` file and mount it in the
  # /home/scanner/.cache/trivy/db/trivy.db path.
  skip_update: false
  #
  # insecure The flag to skip verifying registry certificate
  insecure: false
  # github_token The GitHub access token to download Trivy DB
  #
  # Trivy DB contains vulnerability information from NVD, Red Hat, and many other upstream vulnerability databases.
  # It is downloaded by Trivy from the GitHub release page https://github.com/aquasecurity/trivy-db/releases and cached
  # in the local file system (/home/scanner/.cache/trivy/db/trivy.db). In addition, the database contains the update
  # timestamp so Trivy can detect whether it should download a newer version from the Internet or use the cached one.
  # Currently, the database is updated every 12 hours and published as a new release to GitHub.
  #
  # Anonymous downloads from GitHub are subject to the limit of 60 requests per hour. Normally such rate limit is enough
  # for production operations. If, for any reason, it's not enough, you could increase the rate limit to 5000
  # requests per hour by specifying the GitHub access token. For more details on GitHub rate limiting please consult
  # https://developer.github.com/v3/#rate-limiting
  #
  # You can create a GitHub token by following the instuctions in
  # https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  #
  # github_token: xxx

jobservice:
  # Maximum number of job workers in job service
  max_job_workers: 10

notification:
  # Maximum retry count for webhook job
  webhook_job_max_retry: 10

chart:
  # Change the value of absolute_url to enabled can enable absolute url in chart
  absolute_url: disabled

# Log configurations
log:
  # options are debug, info, warning, error, fatal
  level: info
  # configs for logs in local storage
  local:
    # Log files are rotated log_rotate_count times before being removed. If count is 0, old versions are removed rather than rotated.
    rotate_count: 50
    # Log files are rotated only if they grow bigger than log_rotate_size bytes. If size is followed by k, the size is assumed to be in kilobytes.
    # If the M is used, the size is in megabytes, and if G is used, the size is in gigabytes. So size 100, size 100k, size 100M and size 100G
    # are all valid.
    rotate_size: 200M
    # The directory on your host that store log
    location: /var/log/harbor

  # Uncomment following lines to enable external syslog endpoint.
  # external_endpoint:
  #   # protocol used to transmit log to external endpoint, options is tcp or udp
  #   protocol: tcp
  #   # The host of external endpoint
  #   host: localhost
  #   # Port of external endpoint
  #   port: 5140

#This attribute is for migrator to detect the version of the .cfg file, DO NOT MODIFY!
_version: 2.0.0

# Uncomment external_database if using external database.
# external_database:
#   harbor:
#     host: harbor_db_host
#     port: harbor_db_port
#     db_name: harbor_db_name
#     username: harbor_db_username
#     password: harbor_db_password
#     ssl_mode: disable
#     max_idle_conns: 2
#     max_open_conns: 0
#   clair:
#     host: clair_db_host
#     port: clair_db_port
#     db_name: clair_db_name
#     username: clair_db_username
#     password: clair_db_password
#     ssl_mode: disable
#   notary_signer:
#     host: notary_signer_db_host
#     port: notary_signer_db_port
#     db_name: notary_signer_db_name
#     username: notary_signer_db_username
#     password: notary_signer_db_password
#     ssl_mode: disable
#   notary_server:
#     host: notary_server_db_host
#     port: notary_server_db_port
#     db_name: notary_server_db_name
#     username: notary_server_db_username
#     password: notary_server_db_password
#     ssl_mode: disable

# Uncomment external_redis if using external Redis server
# external_redis:
#   host: redis
#   port: 6379
#   password:
#   # db_index 0 is for core, it's unchangeable
#   registry_db_index: 1
#   jobservice_db_index: 2
#   chartmuseum_db_index: 3
#   clair_db_index: 4
#   trivy_db_index: 5
#   idle_timeout_seconds: 30

# Uncomment uaa for trusting the certificate of uaa instance that is hosted via self-signed cert.
# uaa:
#   ca_file: /path/to/ca

# Global proxy
# Config http proxy for components, e.g. http://my.proxy.com:3128
# Components doesn't need to connect to each others via http proxy.
# Remove component from `components` array if want disable proxy
# for it. If you want use proxy for replication, MUST enable proxy
# for core and jobservice, and set `http_proxy` and `https_proxy`.
# Add domain to the `no_proxy` field, when you want disable proxy
# for some special registry.
proxy:
  http_proxy:
  https_proxy:
  no_proxy:
  components:
    - core
    - jobservice
    - clair
    - trivy
```

### 安装

配置文件后，查看同路径下有一个`install.sh`文件，执行该文件即可安装

```
./install.sh
```

### 客户端使用

**注意**：如果是自签名的证书那么客户端服务器需要配置以下

`192.168.199.160`自签名的服务器IP

```
mkdir -p /etc/docker/certs.d/192.168.199.160
```

将自签名生成的证书文件`server.crt`上传至客户端服务器的该路径

#### 验证

在客户端服务器上登入仓库

```shell
sudo docker login -u admin -p mumu282828 192.168.199.160
```

### 运维

#### 启动

```
cd /data/harbor
docker-compose up -d
```

或者

```
cd /data/harbor
./install.sh
```

#### 关闭

```
cd /data/harbor
docker-compose down -v
```

#### 问题

- goharbor/nginx-photon:v2.0.0 启动失败

  查看`harbor.yml`文件的证书路径是否配置正确

- sudo docker push 推镜像访问资源权限不够

  查看推送的仓库路径项目是否已经创建，如果没有的话可以使用浏览器登入到harbor创建

- sudo docker pull 镜像拉取失败

  1. 使用docker login 验证一下该台服务器是否可以登入到仓库
  2. 登入到harbor查看该镜像是否存在
  3. 查看仓库项目的访问级别是否为开放

### 感谢

- [harbor搭建](https://jdkhome.github.io/pages/d9266c/) jdkhome
- [Harbor仓库搭建及简单使用](https://blog.csdn.net/qq_40378034/article/details/90752212) 邋遢的流浪剑客

