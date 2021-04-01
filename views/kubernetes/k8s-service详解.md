---
title:      k8s-service详解
date:       2020-09-09
isShowComments: true

tags:
 - Devops
 - k8s
    
categories:
  - 记录
---

## 1.Service 设计理念

> ​		service这个概念存在的意义重要，首先由于重新调度等原因，pod在kubernetes中的ip地址不是固定的，因此需要一个代理来确保需要使用的pod的应用不需要知晓pod的真实IP地址。还有一个原因是当使用replication controller创建了多个pod的副本时，需要一个代理来为这些pod做负载均衡。service这个名称的含义其实挺能引起误解的，或许改为proxy或者router更为贴切。
>
> ​		service主要由一个IP地址和一个label selector组成。在创建之初，每个service便被分配了一个独一无二的IP地址，该IP地址与serivce的生命周期相同且不再更改(pod IP地址与此不同，会随着pod的生命周期产生和消亡)。

## 2.nginx-deployment 创建

因为service只是用来负责代理和转发的，所以这边需要先定义一个转发对象。

### 定义nginx-deployment.yaml

```yaml
apiVersion: apps/v1 # 1.9.0前使用 apps/v1beta2
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 2 # 副本数
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.7.9
        ports:
        - containerPort: 80
```

### 部署nginx-deployment

```sh
kubectl apply -f nginx-deployment.yaml
```

## 3.nginx-service 创建

service 通常分为3种类型，分别为ClusterIP，NodePort和LoadBalancer。其中ClusterIP是最基本的类型，即在默认情况下只能在集群内部进行访问；另外两种则与实现从集群外部路由有着密不可分的联系。

### ClusterIP

集群内部IP，只供内部集群调用

可以通过访问 service名称.命名空间(同命名空间可参略):servicePort

示例：`nginx-service.my-namespace:8080`

#### 定义nginx-service.yaml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  type: ClusterIP
  selector: # 标签选择器，通过标签匹配关联的pod
    app: nginx
  ports:
    - port: 8080 # 指定service端口
      targetPort: 80 # 容器端口，转发到对应Pod容器端口
      protocol: TCP # service使用协议 默认TCP
```

#### 部署nginx-service

```shell
kubectl apply -f nginx-service.yaml
```

### NodePort

集群内部IP，对外开放可直接访问

可以通过访问 集群NodeIP:serviceNodePort

示例：`192.168.199.151:30080`

#### 定义nginx-nodeport-service.yaml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-nodeport
spec:
  type: NodePort
  selector: # 标签选择器，通过标签匹配关联的pod
    app: nginx
  ports:
    - port: 8080 # 转发到机器内部service端口
      nodePort: 30080 # 节点端口
```

#### 部署nginx-nodeport-service

```shell
kubectl apply -f nginx-nodeport-service.yaml
```

### 查看service

前面部署的yaml时没有指明是部署到那个命名空间中的，所以默认部署到了default中，查询的时候可以直接不写命名空间

```shell
kubectl get service 
```

如果指定了部署的命名空间

```shell
kubectl get service -n my-namespace
```

