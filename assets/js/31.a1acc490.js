(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{650:function(s,a,t){"use strict";t.r(a);var e=t(4),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"k8s依赖环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#k8s依赖环境配置"}},[s._v("#")]),s._v(" k8s依赖环境配置")]),s._v(" "),t("p",[s._v("准备了三台ubuntu18 虚拟机")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("IP")]),s._v(" "),t("th",[s._v("ROTE")]),s._v(" "),t("th",[s._v("Hostname")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("192.168.199.151")]),s._v(" "),t("td",[s._v("master")]),s._v(" "),t("td",[s._v("master")])]),s._v(" "),t("tr",[t("td",[s._v("192.168.199.152")]),s._v(" "),t("td",[s._v("worker")]),s._v(" "),t("td",[s._v("worker1")])]),s._v(" "),t("tr",[t("td",[s._v("192.168.199.153")]),s._v(" "),t("td",[s._v("worker")]),s._v(" "),t("td",[s._v("worker2")])])])]),s._v(" "),t("h3",{attrs:{id:"设置主机名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置主机名"}},[s._v("#")]),s._v(" 设置主机名")]),s._v(" "),t("p",[s._v("依次设置各节点主机名")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" hostnamectl set-hostname master\n")])])]),t("h3",{attrs:{id:"添加本地域名解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加本地域名解析"}},[s._v("#")]),s._v(" 添加本地域名解析")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/hosts\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])])]),t("h3",{attrs:{id:"关闭swap交换空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭swap交换空间"}},[s._v("#")]),s._v(" 关闭swap交换空间")]),s._v(" "),t("h4",{attrs:{id:"不重启电脑-禁用启用swap-立刻生效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不重启电脑-禁用启用swap-立刻生效"}},[s._v("#")]),s._v(" 不重启电脑，禁用启用swap，立刻生效")]),s._v(" "),t("p",[s._v("查看内存情况")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" -h\n")])])]),t("p",[s._v("停掉所有交换空间")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" swapoff -a\n")])])]),t("p",[s._v("查看所有的交换空间 如果没有任何输出则说明关成功了")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("swapon")]),s._v(" -s\n")])])]),t("p",[s._v("查看内存情况")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" -h\n")])])]),t("h4",{attrs:{id:"重新启动电脑-永久禁用swap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重新启动电脑-永久禁用swap"}},[s._v("#")]),s._v(" 重新启动电脑，永久禁用Swap")]),s._v(" "),t("p",[s._v("用vim修改/etc/fstab文件，在swap分区这行前加 # 禁用掉，保存退出")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/fstab\n")])])]),t("p",[s._v("重启节点(如果执行了上一个步骤，那么也可以不用马上重启，因为目前生效了)")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n")])])]),t("p",[s._v("查看内存")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" -h\n")])])]),t("h3",{attrs:{id:"关闭-selinux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭-selinux"}},[s._v("#")]),s._v(" 关闭 SeLinux")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("setenforce "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/SELINUX=enforcing/SELINUX=disabled/g"')]),s._v(" /etc/selinux/config\n")])])]),t("h3",{attrs:{id:"安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[s._v("#")]),s._v(" 安装docker")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker.io -y\n")])])]),t("h2",{attrs:{id:"安装k8s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装k8s"}},[s._v("#")]),s._v(" 安装k8s")]),s._v(" "),t("h3",{attrs:{id:"master-额外执行下面命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#master-额外执行下面命令"}},[s._v("#")]),s._v(" Master 额外执行下面命令")]),s._v(" "),t("p",[s._v("创建/etc/sysctl.d/k8s.conf文件，添加如下内容")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cat > /etc/sysctl.d/k8s.conf"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nnet.ipv4.ip_forward = 1\nEOF")]),s._v("\n")])])]),t("p",[s._v("执行命令使修改生效")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" modprobe br_netfilter\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" sysctl -p /etc/sysctl.d/k8s.conf\n")])])]),t("h3",{attrs:{id:"各节点安装-kubeadm-kubelet-kubectl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#各节点安装-kubeadm-kubelet-kubectl"}},[s._v("#")]),s._v(" 各节点安装 kubeadm, kubelet, kubectl")]),s._v(" "),t("h4",{attrs:{id:"更新数据源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新数据源"}},[s._v("#")]),s._v(" 更新数据源")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y apt-transport-https\n")])])]),t("h4",{attrs:{id:"获取国内数据源库阿里云更新key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取国内数据源库阿里云更新key"}},[s._v("#")]),s._v(" 获取国内数据源库阿里云更新key")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n")])])]),t("h4",{attrs:{id:"配置国内数据源阿里云k8s下载路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置国内数据源阿里云k8s下载路径"}},[s._v("#")]),s._v(" 配置国内数据源阿里云k8s下载路径")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cat > /etc/apt/sources.list.d/kubernetes.list"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\ndeb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main\nEOF")]),s._v("\n")])])]),t("h4",{attrs:{id:"安装kubeadm-kubelet-kubectl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装kubeadm-kubelet-kubectl"}},[s._v("#")]),s._v(" 安装kubeadm, kubelet, kubectl")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("kubelet")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.16")]),s._v(".1-00 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("kubeadm")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.16")]),s._v(".1-00 kubectl\n")])])]),t("h2",{attrs:{id:"配置k8s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置k8s"}},[s._v("#")]),s._v(" 配置k8s")]),s._v(" "),t("h3",{attrs:{id:"查看kubeadm需要的镜像版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看kubeadm需要的镜像版本"}},[s._v("#")]),s._v(" 查看kubeadm需要的镜像版本")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubeadm config images list\n")])])]),t("p",[s._v("可以看到kubeadm默认拉去的镜像是从"),t("code",[s._v("k8s.gcr.io")]),s._v("仓库拉去镜像，但是这个仓库在国外，如果没有科学上网的条件的话可以参考一下，如果可以科学上网(如:用的国外服务器)的可以省略以下步骤")]),s._v(" "),t("h3",{attrs:{id:"制作离线镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#制作离线镜像"}},[s._v("#")]),s._v(" 制作离线镜像")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker pull mirrorgooglecontainers/kube-apiserver-amd64:v1.16.1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker pull mirrorgooglecontainers/kube-controller-manager-amd64:v1.16.1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker pull mirrorgooglecontainers/etcd-amd64:3.3.15-0\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker pull mirrorgooglecontainers/kube-scheduler-amd64:v1.16.1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker pull mirrorgooglecontainers/kube-proxy-amd64:v1.16.1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker pull mirrorgooglecontainers/pause:3.1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker pull coredns/coredns:1.6.2\n")])])]),t("p",[s._v("这里我们通过国内的镜像仓库"),t("code",[s._v("mirrorgooglecontainers")]),s._v("拉取的镜像，然后通过docker tag将拉下来的镜像名改成k8s.gcr.io下的镜像，这样就可以在kubeadm init能够正常执行了。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker tag mirrorgooglecontainers/kube-apiserver-amd64:v1.16.1 k8s.gcr.io/kube-apiserver:v1.16.1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker tag mirrorgooglecontainers/kube-controller-manager-amd64:v1.16.1 k8s.gcr.io/kube-controller-manager:v1.16.1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker tag mirrorgooglecontainers/kube-scheduler-amd64:v1.16.1 k8s.gcr.io/kube-scheduler:v1.16.1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker tag mirrorgooglecontainers/kube-proxy-amd64:v1.16.1 k8s.gcr.io/kube-proxy:v1.16.1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker tag mirrorgooglecontainers/etcd-amd64:3.3.15-0 k8s.gcr.io/etcd:3.3.15-0\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker tag mirrorgooglecontainers/pause:3.1 k8s.gcr.io/pause:3.1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker tag coredns/coredns:1.6.2 k8s.gcr.io/coredns:1.6.2\n")])])]),t("p",[s._v("可以删除之前拉取的"),t("code",[s._v("mirrorgooglecontainers")]),s._v("下的重复镜像")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker rmi mirrorgooglecontainers/kube-apiserver-amd64:v1.16.1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker rmi mirrorgooglecontainers/kube-controller-manager-amd64:v1.16.1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker rmi mirrorgooglecontainers/etcd-amd64:3.3.15-0\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker rmi mirrorgooglecontainers/kube-scheduler-amd64:v1.16.1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker rmi mirrorgooglecontainers/kube-proxy-amd64:v1.16.1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker rmi mirrorgooglecontainers/pause:3.1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker rmi coredns/coredns:1.6.2\n")])])]),t("h3",{attrs:{id:"初始化master"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化master"}},[s._v("#")]),s._v(" 初始化Master")]),s._v(" "),t("p",[t("strong",[s._v("注意:以下骤仅在Master节点执行")])]),s._v(" "),t("h4",{attrs:{id:"kubeadm初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubeadm初始化"}},[s._v("#")]),s._v(" kubeadm初始化")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" kubeadm init --pod-network-cidr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".0.0/16\n")])])]),t("p",[s._v("如果Master初始化成功，那你现在可以大声呼叫 “去吧 皮卡丘！”，看到输出的最后一行，这就是Worker加入Master的命令，这里可以先记下，待会再去Worker节点站斗")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" kubeadm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".199.151:6443 --token tearz2.rvquwsv5gd7ds8tn "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --discovery-token-ca-cert-hash sha256:dd0674653ecc31f204a8f81d0eb91a14664a005fb05a61f56532fd977f14c7a4 \n")])])]),t("p",[s._v("注意：kubeadm init生成的token有效期只有1天，如果你的node节点在使用kubeadm join时出现如下错误")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("preflight"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" FYI: You can "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("look")]),s._v(" at this config "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" with "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kubectl -n kube-system get cm kubeadm-config -oyaml'")]),s._v("\nerror execution phase preflight: unable to fetch the kubeadm-config ConfigMap: failed to get config map: Unauthorized\n")])])]),t("p",[s._v("请到master上检查你所使用的token是否有效，"),t("code",[s._v("kubeadm token list")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("49y4v3.jxq5w76jj5hh028u   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("invalid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-04-13T15:00:47-04:00   authentication,signing   The default bootstrap token generated by "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kubeadm init'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("   system:bootstrappers:kubeadm:default-node-token\n8jxvj4.5lop20zjbu48h6kl   23h         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-04-25T10:21:41-04:00   authentication,signing   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                                                     system:bootstrappers:kubeadm:default-node-token\n")])])]),t("p",[s._v("如果token忘记了或者过期了，也不需要担心执行以下命令，生产不过期token")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubeadm token create --print-join-command --ttl "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),t("h4",{attrs:{id:"普通用户使用kubectl命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#普通用户使用kubectl命令"}},[s._v("#")]),s._v(" 普通用户使用"),t("code",[s._v("kubectl")]),s._v("命令")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -i /etc/kubernetes/admin.conf "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -u"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -g"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n")])])]),t("p",[s._v("而需要这些配置命令的原因是: Kubernetes 集群默认需要加密方式访问。所以，这几条命令，就是将刚刚部署生成的 Kubernetes 集群的安全配置文件，保存到当前用户的.kube 目录下， kubectl 默认会使用这个目录下的授权信息访问 Kubernetes 集群。")]),s._v(" "),t("h4",{attrs:{id:"部署网络插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署网络插件"}},[s._v("#")]),s._v(" 部署网络插件")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubectl apply -f "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://cloud.weave.works/k8s/net?k8s-version='),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("kubectl version "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" base64 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])])]),t("p",[t("strong",[s._v("现在可以使用"),t("code",[s._v("kubectl")]),s._v("查看pod状态了")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubectl get pods -n kube-system\n")])])]),t("h3",{attrs:{id:"部署worker节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署worker节点"}},[s._v("#")]),s._v(" 部署Worker节点")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("worker")]),s._v("节点下执行")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" kubeadm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".199.151:6443 --token tearz2.rvquwsv5gd7ds8tn "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --discovery-token-ca-cert-hash sha256:dd0674653ecc31f204a8f81d0eb91a14664a005fb05a61f56532fd977f14c7a4 \n")])])]),t("p",[s._v("在"),t("code",[s._v("master")]),s._v(" 执行，查看worker节点是否成功加入")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubectl get nodes\n")])])]),t("h3",{attrs:{id:"kubeadm常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubeadm常用命令"}},[s._v("#")]),s._v(" kubeadm常用命令")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("        Help about any "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" \n  init        Run this "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" order to "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" up the Kubernetes control plane. "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# master上执行，初始化所有的master组件")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v("        Run this on any machine you wish to "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" an existing cluster "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# node上执行，加入master")]),s._v("\n  reset       Run this to revert any changes made to this "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" by "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kubeadm init'")]),s._v(" or "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kubeadm join'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清理 init，join的环境")]),s._v("\n  token       Manage bootstrap tokens. "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# token的增删查")]),s._v("\n  upgrade     Upgrade your cluster smoothly to a newer version with this command. "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新集群")]),s._v("\n  version     Print the version of kubeadm\n")])])]),t("h3",{attrs:{id:"感谢大佬"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#感谢大佬"}},[s._v("#")]),s._v(" 感谢大佬")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/chenzhenqi/p/10695959.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("国内环境安装k8s"),t("OutboundLink")],1),s._v(" chenzhenqi")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/eastonliu/p/11637929.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用 kubeadm 安装 kubernetes v1.16.0"),t("OutboundLink")],1),s._v(" eastonliu")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.jdkhome.com/pages/0da669/",target:"_blank",rel:"noopener noreferrer"}},[s._v("国内环境 ubuntu18 安装 k8s"),t("OutboundLink")],1),s._v(" 良师益友 jdkhome")])])])}),[],!1,null,null,null);a.default=r.exports}}]);