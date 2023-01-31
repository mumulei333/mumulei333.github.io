(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{479:function(a,s,t){"use strict";t.r(s);var e=t(2),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),s("p",[a._v("Kubernetes Dashboard 是 Kubernetes 的官方 Web UI。")]),a._v(" "),s("p",[a._v("功能介绍")]),a._v(" "),s("ul",[s("li",[a._v("向 Kubernetes 集群部署容器化应用")]),a._v(" "),s("li",[a._v("诊断容器化应用的问题")]),a._v(" "),s("li",[a._v("管理集群的资源")]),a._v(" "),s("li",[a._v("查看集群上所运行的应用程序")]),a._v(" "),s("li",[a._v("创建、修改Kubernetes 上的资源（例如 Deployment、Job、DaemonSet等）")]),a._v(" "),s("li",[a._v("展示集群上发生的错误")])]),a._v(" "),s("p",[a._v("例如：您可以伸缩一个 Deployment、执行滚动更新、重启一个 Pod 或部署一个新的应用程序")]),a._v(" "),s("h3",{attrs:{id:"_1-准备安装kubernetes-dashboard的yaml文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备安装kubernetes-dashboard的yaml文件"}},[a._v("#")]),a._v(" 1. 准备安装kubernetes dashboard的yaml文件")]),a._v(" "),s("p",[a._v("执行以下命令获取kubernetes dashboard的官方Yaml文件")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-beta4/aio/deploy/recommended.yaml\n")])])]),s("p",[a._v("如果获取不到可以直接上github官网"),s("code",[a._v("https://github.com/kubernetes/dashboard/blob/master/aio/deploy/recommended.yaml")]),a._v("打开这个页面复制其中的内容，然后在服务器中创建一个名为recommended.yaml的文件，然后将内容复制进去就行了")]),a._v(" "),s("h5",{attrs:{id:"使用nodeport部署-修改-recommended-yaml文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用nodeport部署-修改-recommended-yaml文件"}},[a._v("#")]),a._v(" 使用NodePort部署，修改 recommended.yaml文件")]),a._v(" "),s("p",[a._v("nodePort: 8080可以省略，缺省则为随机端口，服务启动后使用"),s("code",[a._v("kubectl get svc -n kubernetes-dashboard")]),a._v("查看端口")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Service\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("k8s-app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubernetes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dashboard\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubernetes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dashboard\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubernetes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dashboard\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" NodePort\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("targetPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8443")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("nodePort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("k8s-app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubernetes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dashboard\n")])])]),s("h3",{attrs:{id:"_2-创建-serviceaccount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建-serviceaccount"}},[a._v("#")]),a._v(" 2.创建 serviceaccount")]),a._v(" "),s("p",[a._v("前面获取的recommended.yaml的同路径下创建一个名为dashboard-sa.yaml的文件，复制以下内容")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ServiceAccount\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dashboard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("admin\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubernetes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dashboard \n")])])]),s("h3",{attrs:{id:"_3-创建clusterrolebinding为dashboard-sa授权集群权限cluster-admin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建clusterrolebinding为dashboard-sa授权集群权限cluster-admin"}},[a._v("#")]),a._v(" 3. 创建clusterrolebinding为dashboard sa授权集群权限cluster-admin")]),a._v(" "),s("p",[a._v("还是在同路径下创建一个名为dashboard-clusterrolebinding.yaml的文件，复制以下内容")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" rbac.authorization.k8s.io/v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ClusterRoleBinding\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dashboard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("admin\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("roleRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" rbac.authorization.k8s.io\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ClusterRole\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" cluster"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("admin\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("subjects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ServiceAccount\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dashboard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("admin\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubernetes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dashboard\n")])])]),s("h3",{attrs:{id:"_4-启动服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动服务"}},[a._v("#")]),a._v(" 4.启动服务")]),a._v(" "),s("p",[a._v("依次启动一下服务")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl apply "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v("  recommended.yaml\nkubectl apply "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v("  dashboard-sa.yaml\nkubectl apply "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v("  dashboard-clusterrolebinding.yaml\n")])])]),s("h3",{attrs:{id:"_5-访问dashboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-访问dashboard"}},[a._v("#")]),a._v(" 5.访问dashboard")]),a._v(" "),s("ul",[s("li",[s("h5",{attrs:{id:"生成自定义证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成自定义证书"}},[a._v("#")]),a._v(" 生成自定义证书")])])]),a._v(" "),s("p",[a._v("由于k8s旧版本可能存在此问题，使用Firefox浏览器添加例外可能可以跳过证书问题，但这里我们使用重新制作自签证书，重建secret，更新证书，解决此错误")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" openssl genrsa "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-out")]),a._v(" ca.key "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2048")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" openssl req "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-x509")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-key")]),a._v(" ca.key "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-out")]),a._v(" ca.crt "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-days")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3650")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-subj")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/C=CN/ST=HB/L=WH/O=DM/OU=YPT/CN=CA"')]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" openssl genrsa "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-out")]),a._v(" dashboard.key "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2048")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" openssl req "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-sha256")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-key")]),a._v(" dashboard.key "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-out")]),a._v(" dashboard.csr "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-subj")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/C=CN/ST=HB/L=WH/O=DM/OU=YPT/CN=192.168.1.1"')]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),s("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("dashboard.cnf")]),a._v("\nextensions = san\n[san]\nkeyUsage = digitalSignature\nextendedKeyUsage = clientAuth,serverAuth\nsubjectKeyIdentifier = hash\nauthorityKeyIdentifier = keyid,issuer\nsubjectAltName = IP:192.168.1.1,IP:127.0.0.1,DNS:192.168.1.1,DNS:localhost\nEOF")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" openssl x509 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-req")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-sha256")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-days")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3650")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-in")]),a._v(" dashboard.csr "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-out")]),a._v(" dashboard.crt "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-CA")]),a._v(" ca.crt "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-CAkey")]),a._v(" ca.key "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-CAcreateserial")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-extfile")]),a._v(" dashboard.cnf\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" dashboard.csr dashboard.cnf ca.srl ca.key\n")])])]),s("p",[a._v("其中"),s("code",[a._v("192.168.1.1")]),a._v("是你需要申请证书的服务器ip")]),a._v(" "),s("ul",[s("li",[s("h5",{attrs:{id:"修改kubernetes-dashboard服务配置-重新部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改kubernetes-dashboard服务配置-重新部署"}},[a._v("#")]),a._v(" 修改kubernetes-dashboard服务配置，重新部署")])])]),a._v(" "),s("p",[a._v("删除原kubernetes-dashboard服务，因为之前部署的kubernetes-dashboard服务中有kubernetes-dashboard-certs服务。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl delete "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" recommended.yaml\n")])])]),s("p",[a._v("修改"),s("code",[a._v("recommended.yaml")]),a._v("配置文件，删除kubernetes-dashboard-certs部分配置")]),a._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("\napiVersion"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" v1\nkind"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Secret\nmetadata"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n  labels"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    k8s"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("app"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" kubernetes"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("dashboard\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" kubernetes"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("dashboard"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("certs\n  namespace"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" kubernetes"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("dashboard\ntype"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Opaque\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("\n")])])]),s("p",[a._v("重新部署")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("kubectl apply "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v("  recommended.yaml\n")])])]),s("ul",[s("li",[s("h5",{attrs:{id:"创建dashboard的kubernetes-dashboard-certs服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建dashboard的kubernetes-dashboard-certs服务"}},[a._v("#")]),a._v(" 创建dashboard的kubernetes-dashboard-certs服务")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("kubectl create secret generic kubernetes-dashboard-certs --from-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("dashboard.key --from-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("dashboard.crt\n")])])])])]),a._v(" "),s("h3",{attrs:{id:"_6-获取验证token登入dashboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-获取验证token登入dashboard"}},[a._v("#")]),a._v(" 6.获取验证token登入dashboard")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl describe secret "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" kubernetes-dashboard "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("kubectl get secret "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" kubernetes-dashboard "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" dashboard-admin "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print $1}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);