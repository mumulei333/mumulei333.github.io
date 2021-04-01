---
title:      openssl生成自签名证书
date:       2020-09-09
isShowComments: true

tags:
 - SSL证书
 - Ubuntu
 - Openssl
    
categories:
  - 记录
---

### 生成 CA 根证书密钥

创建证书文件夹(方便管理)

```shell
mkdir -p /data/cert && cd /data/cert
```

生成根证书密钥

```shell
sudo openssl genrsa -out ca.key 2048 
```

### 生成根证书

这一步会需要你填写一些信息，除了 Country Name 选项需要记住的(可以填CN)，其他的都可以直接回车忽略

```
sudo openssl req -x509 -new -nodes -key ca.key -days 10000 -out ca.crt -subj "/CN=Server-ca"
```

如果遇到报错:

```text
Can't load /root/.rnd into RNG
140598752473536:error:2406F079:random number generator:RAND_load_file:Cannot open file:../crypto/rand/randfile.c:88:Filename=/root/.rnd
```

解决方案：

```text
cd /root
sudo openssl rand -writerand .rnd
```

### 生成证书请求文件（CSR）

这一步还会需要你填写一些信息，除了 Country Name 和生产根证书一样，其他的也可以回车忽略

```
sudo openssl req -newkey rsa:4096 -nodes -sha256 -keyout server.key -out server.csr
```

### 签署 CSR 请求，生成证书

添加证书配置`192.168.199.155`需要生成证书的服务器IP

```
sudo bash -c "cat > extfile.cnf" << EOF
subjectAltName = IP:192.168.199.155
EOF
```

生成证书

```
sudo openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -days 365 -extfile extfile.cnf -out server.crt
```

到这里自签名证书生成完成，得到所需要：server.key 和 server.crt

### 氪金大法

在某云平台购买域名，配置域名的DNS，添加一条A纪录指向该台服务器IP；并且购买域名SSL证书并绑定域名，证书申请成功后将证书下载，下载pem格式的证书将其后缀名改成crt文件最后上传服务器即可