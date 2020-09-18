---
title:      k8s-deployment详解
date:       2020-09-09
isShowComments: true

tags:
 - Devops
 - k8s
 
categories:
 - 学习
---

### 概念

#### Deployment 是什么？

Deployment 为 Pod 和 Replica Set（二代 Replication Controller）提供声明式更新，替代以前的 ReplicationController 来方便的管理应用。你只需要在 Deployment 中描述你想要的目标状态是什么，Deployment controller 就会帮你将 Pod 和 Replica Set 的实际状态改变到你的目标状态。你可以定义一个全新的 Deployment，也可以创建一个新的替换旧的 Deployment。

#### Deployment能做什么？

- 定义 Deployment 来创建 ReplicaSet 和 pod
- 滚动升级和回滚应用
- 扩容和缩容
- 暂停和继续 Deployment

### 使用

#### 创建 Deployment

nginx-deployment.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
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

执行以上文件创建或者覆盖deployment

```shell
kubectl create -f nginx-deployment.yaml --record -n mynamespace
```

参数`record`可选，加上的话会记录这个Deployment的执行命令，后续可以使用 Deployment revision 查看该资源执行了哪些命令

参数`n`或者 `namespace` 可选，选择部署到那个命名空间，如果不写那么会部署到默认default命名空间

#### 更新 Deployment

- 直接使用命令更新

  kubectl set image deployment/nginx-deployment nginx=nginx:1.9.1

  `deployment/nginx-deployment` 是deployment文件部署后的名称

  `nginx=nginx:1.9.1` 修改容器名称叫做nginx的镜像版本

- 直接修改配置更新

  ```shell
  kubectl edit deployment/nginx-deployment
  ```

  `deployment/nginx-deployment` 是deployment文件部署后的名称

#### 回退 Deployment

- 回退当前的 rollout 到之前的版本

  ```shell
  kubectl rollout undo deployment/nginx-deployment
  ```

- 回退到指定某个历史版本

  ```shell
  kubectl rollout undo deployment/nginx-deployment --to-revision=2
  ```

  参数`to-revision`是可以使用以下命令获取

  ```shell
  $ kubectl rollout history deployment/nginx-deployment
  deployments "nginx-deployment":
  REVISION    CHANGE-CAUSE
  1           kubectl create -f docs/user-guide/nginx-deployment.yaml --record
  2           kubectl set image deployment/nginx-deployment nginx=nginx:1.9.1
  3           kubectl set image deployment/nginx-deployment nginx=nginx:1.91
  ```

  这里可以看到因为我们创建 Deployment 的时候使用了 `—recored` 参数可以记录命令，我们可以很方便的查看每次 revison 的变化。

  **注意：** 只要 Deployment 的 rollout 被触发就会创建一个 revision。也就是说当且仅当 Deployment 的 Pod template（如 `.spec.template`）被更改，例如更新 template 中的 label 和容器镜像时，就会创建出一个新的 revision。其他的更新，比如**扩容 Deployment 不会创建 revision**——因此我们可以很方便的手动或者自动扩容。这意味着当你回退到历史 revision 时，只有 Deployment 中的 Pod template 部分才会回退。

#### 扩容Deployment

- 扩(缩)容到指定份数

  ```shell
  kubectl scale deployment/nginx-deployment --replicas 10
  ```

- 弹性扩容，基于当前 Pod 的 CPU 利用率选择最少和最多的 Pod 数

  ```shell
  kubectl autoscale deployment/nginx-deployment --min=10 --max=15 --cpu-percent=80
  ```

#### 查看详情 describe

-  查看deployment详情信息

  ```shell
  kubecetl describe deployment/nginx-deployment
  ```

- 查看pod详细信息

  ```shell
  kubecetl describe pod/nginx-deployment-59cf5847f6-5kfjc
  ```

#### 手动重启pod

如果你是使用的deployment部署的pod，那么可以直接delete删除你要重启的pod，此时deployment会检测到期望的pod数量少了，那么他会马上又启动一个新pod

```shell
kubectl delete pod/nginx-deployment-59cf5847f6-5kfjc
```

### 说明

#### Pod Template

`.spec.template` 是 `.spec` 中唯一要求的字段。

`.spec.template` 是 pod template 它跟 Pod类型一模一样，除了它是嵌套的并且不需要 `apiVersion` 和 `kind` 字段。另外为了划分 Pod 的范围，Deployment 中的 pod template 必须指定适当的 label（不要跟其他 controller 重复了）和适当的重启策略。

`.spec.template.spec.restartPolicy`可以设置为 `Always` , 如果不指定的话这就是默认配置。

#### Replicas

`.spec.replicas` 是可以选字段，指定期望的 pod 数量，默认是 1。

#### Selector

`.spec.selector` 是可选字段，用来指定 label selector ，圈定 Deployment 管理的 pod 范围。

如果被指定， `.spec.selector` 必须匹配 `.spec.template.metadata.labels`，否则它将被 API 拒绝。如果 `.spec.selector` 没有被指定， `.spec.selector.matchLabels` 默认是 `.spec.template.metadata.labels`。

在 Pod 的 template 跟 `.spec.template` 不同或者数量超过了 `.spec.replicas` 规定的数量的情况下，Deployment 会杀掉 label 跟 selector 不同的 Pod。

**注意：** 你不应该再创建其他 label 跟这个 selector 匹配的 pod，或者通过其他 Deployment，或者通过其他 Controller，例如 ReplicaSet 和 ReplicationController。否则该 Deployment 会被把它们当成都是自己创建的。Kubernetes 不会阻止你这么做。

如果你有多个 controller 使用了重复的 selector，controller 们就会互相打架并导致不正确的行为。

