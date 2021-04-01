---
title:      k8s部署Dashboard
date:       2020-09-09
isShowComments: true

tags:
 - Devops
 - Dashboard
 - k8s
    
categories:
  - 记录
---

## 前言

Kubernetes Dashboard 是 Kubernetes 的官方 Web UI。

功能介绍

- 向 Kubernetes 集群部署容器化应用
- 诊断容器化应用的问题
- 管理集群的资源
- 查看集群上所运行的应用程序
- 创建、修改Kubernetes 上的资源（例如 Deployment、Job、DaemonSet等）
- 展示集群上发生的错误

例如：您可以伸缩一个 Deployment、执行滚动更新、重启一个 Pod 或部署一个新的应用程序

### 1. 准备安装kubernetes dashboard的yaml文件

执行以下命令获取kubernetes dashboard的官方Yaml文件

```shell
wget https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-beta4/aio/deploy/recommended.yaml
```

如果获取不到可以直接上github官网`https://github.com/kubernetes/dashboard/blob/master/aio/deploy/recommended.yaml`打开这个页面复制其中的内容，然后在服务器中创建一个名为recommended.yaml的文件，然后将内容复制进去就行了

##### 使用NodePort部署，修改 recommended.yaml文件

nodePort: 8080可以省略，缺省则为随机端口，服务启动后使用`kubectl get svc -n kubernetes-dashboard`查看端口

```yaml
kind: Service
apiVersion: v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kubernetes-dashboard
spec:
  type: NodePort
  ports:
    - port: 443
      targetPort: 8443
      nodePort: 8080
  selector:
    k8s-app: kubernetes-dashboard
```


### 2.创建 serviceaccount

前面获取的recommended.yaml的同路径下创建一个名为dashboard-sa.yaml的文件，复制以下内容

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: dashboard-admin
  namespace: kubernetes-dashboard 
```

### 3. 创建clusterrolebinding为dashboard sa授权集群权限cluster-admin

还是在同路径下创建一个名为dashboard-clusterrolebinding.yaml的文件，复制以下内容

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: dashboard-admin
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: dashboard-admin
  namespace: kubernetes-dashboard
```

### 4.启动服务

依次启动一下服务

```shell
kubectl apply -f  recommended.yaml
kubectl apply -f  dashboard-sa.yaml
kubectl apply -f  dashboard-clusterrolebinding.yaml
```

### 5.访问dashboard

- ##### 生成自定义证书

由于k8s旧版本可能存在此问题，使用Firefox浏览器添加例外可能可以跳过证书问题，但这里我们使用重新制作自签证书，重建secret，更新证书，解决此错误

```shell
$ sudo openssl genrsa -out ca.key 2048
$ sudo openssl req -new -x509 -key ca.key -out ca.crt -days 3650 -subj "/C=CN/ST=HB/L=WH/O=DM/OU=YPT/CN=CA"
$ sudo openssl genrsa -out dashboard.key 2048
$ sudo openssl req -new -sha256 -key dashboard.key -out dashboard.csr -subj "/C=CN/ST=HB/L=WH/O=DM/OU=YPT/CN=192.168.1.1"
$ sudo sudo cat <<EOF >dashboard.cnf
extensions = san
[san]
keyUsage = digitalSignature
extendedKeyUsage = clientAuth,serverAuth
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid,issuer
subjectAltName = IP:192.168.1.1,IP:127.0.0.1,DNS:192.168.1.1,DNS:localhost
EOF
$ sudo openssl x509 -req -sha256 -days 3650 -in dashboard.csr -out dashboard.crt -CA ca.crt -CAkey ca.key -CAcreateserial -extfile dashboard.cnf
$ sudo rm -f dashboard.csr dashboard.cnf ca.srl ca.key
```

其中`192.168.1.1`是你需要申请证书的服务器ip

- ##### 修改kubernetes-dashboard服务配置，重新部署

删除原kubernetes-dashboard服务，因为之前部署的kubernetes-dashboard服务中有kubernetes-dashboard-certs服务。

```shell
kubectl delete -f recommended.yaml
```

修改`recommended.yaml`配置文件，删除kubernetes-dashboard-certs部分配置

```tsx
---
apiVersion: v1
kind: Secret
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard-certs
  namespace: kubernetes-dashboard
type: Opaque
---
```

重新部署

```sh
kubectl apply -f  recommended.yaml
```

- ##### 创建dashboard的kubernetes-dashboard-certs服务

  ```sh
  kubectl create secret generic kubernetes-dashboard-certs --from-file=dashboard.key --from-file=dashboard.crt
  ```

### 6.获取验证token登入dashboard

```shell
kubectl describe secret -n kubernetes-dashboard $(kubectl get secret -n kubernetes-dashboard | grep dashboard-admin | awk '{print $1}')
```