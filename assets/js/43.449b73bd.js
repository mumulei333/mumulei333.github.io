(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{651:function(t,s,e){"use strict";e.r(s);var r=e(4),a=Object(r.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"frp实现内网穿透"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frp实现内网穿透"}},[t._v("#")]),t._v(" frp实现内网穿透")]),t._v(" "),e("blockquote",[e("p",[t._v("前提概要：服务器端和客户端都需要预装 docker")])]),t._v(" "),e("h2",{attrs:{id:"一、简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、简介"}},[t._v("#")]),t._v(" 一、简介")]),t._v(" "),e("p",[t._v("frp 是一个可用于内网穿透的高性能的反向代理应用，支持 tcp, udp 协议，为 http 和 https 应用协议提供了额外的能力，且尝试性支持了点对点穿透。 详细文档请参考：https://github.com/fatedier/frp/blob/master/README_zh.md")]),t._v(" "),e("p",[t._v("frp 支持 macOS, freebsd, windows,linux x64,linux i386, linux arm,Linux arm64, Mips 等不同的系统和 CPU 架构，并分别打包了文件。")]),t._v(" "),e("p",[t._v("因此，为了方便在不同的系统中安装和配置 frp，我基于 docker 对 frp 进行了封装和打包。")]),t._v(" "),e("p",[t._v("但是由于 docker 的限制，目前只支持(amd64, arm32v6, arm32v70, arm64v8, i386)")]),t._v(" "),e("p",[t._v("项目地址：")]),t._v(" "),e("p",[t._v("https://github.com/snowdreamtech/frp")]),t._v(" "),e("p",[t._v("DockerHub：")]),t._v(" "),e("p",[t._v("https://hub.docker.com/r/snowdreamtech/frps")]),t._v(" "),e("p",[t._v("https://hub.docker.com/r/snowdreamtech/frpc")]),t._v(" "),e("h2",{attrs:{id:"二、配置以及使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、配置以及使用"}},[t._v("#")]),t._v(" 二、配置以及使用")]),t._v(" "),e("p",[t._v("将 "),e("strong",[t._v("frps")]),t._v(" 及 "),e("strong",[t._v("frps.ini")]),t._v(" 放到具有公网 IP 的机器上。")]),t._v(" "),e("p",[t._v("将 "),e("strong",[t._v("frpc")]),t._v(" 及 "),e("strong",[t._v("frpc.ini")]),t._v(" 放到处于内网环境的机器上。")]),t._v(" "),e("h3",{attrs:{id:"通过-ssh-访问公司内网机器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过-ssh-访问公司内网机器"}},[t._v("#")]),t._v(" 通过 ssh 访问公司内网机器")]),t._v(" "),e("ol",[e("li",[t._v("修改 frps.ini 文件，这里使用了最简化的配置，设置了 frp 服务器端接收客户端流量的端口：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# frps.ini\n[common]\nbind_port = 7000\n")])])]),e("ol",[e("li",[t._v("启动 frps：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker run  --network host -d -v /etc/frp/frps.ini:/etc/frp/frps.ini --name frps snowdreamtech/frps\n")])])]),e("ol",[e("li",[t._v("修改 frpc.ini 文件，假设 frps 所在服务器的公网 IP 为 x.x.x.x：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# frpc.ini\n[common]\nserver_addr = x.x.x.x\nserver_port = 7000\n\n[ssh]\ntype = tcp\nlocal_ip = 127.0.0.1\nlocal_port = 22\nremote_port = 6000\n")])])]),e("p",[t._v("注意，"),e("code",[t._v("local_port")]),t._v("（客户端侦听）和 "),e("code",[t._v("remote_port")]),t._v("（服务器端暴露）是用来出入 frp 系统的两端，"),e("code",[t._v("server_port")]),t._v(" 则是服务器用来与客户端通讯的。")]),t._v(" "),e("ol",[e("li",[t._v("启动 frpc：")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("docker run  --network "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" -d -v /etc/frp/frpc.ini:/etc/frp/frpc.ini --name frpc snowdreamtech/frpc\n")])])]),e("ol",[e("li",[t._v("通过 ssh 访问内网机器，假设用户名(客户端内网服务器用户名)为 test：，服务端ip地址：x.x.x.x")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" test@x.x.x.x -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6000")]),t._v("\n")])])]),e("p",[t._v("到这里你已经完成了一个简单的内网穿透demo，如果想了解更多可以看"),e("a",{attrs:{href:"https://github.com/fatedier/frp/blob/master/README_zh.md#%E5%8A%9F%E8%83%BD%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"}},[t._v("frp项目中文文档"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"三、问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、问题"}},[t._v("#")]),t._v(" 三、问题")]),t._v(" "),e("p",[t._v("在第三方远程ssh登入内网服务器时发生该错误")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('ubuntu@VM-28-88-ubuntu:~$ ssh -p 6001 mumu@xxx.xxx.xxx.xx\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nIT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!\nSomeone could be eavesdropping on you right now (man-in-the-middle attack)!\nIt is also possible that a host key has just been changed.\nThe fingerprint for the ECDSA key sent by the remote host is\nSHA256:aAfoz7L7j6vNUp7sUwOFiCE/ZF0VbveCDJ6f1/+5ezQ.\nPlease contact your system administrator.\nAdd correct host key in /home/ubuntu/.ssh/known_hosts to get rid of this message.\nOffending ECDSA key in /home/ubuntu/.ssh/known_hosts:3\n  remove with:\n  ssh-keygen -f "/home/ubuntu/.ssh/known_hosts" -R "[xxx.xxx.xxx.xx]:6001"\nECDSA host key for [xxx.xxx.xxx.xx]:6001 has changed and you have requested strict checking.\nHost key verification failed.\n')])])]),e("p",[t._v("原因可能是之前有在这个服务器上ssh登入过这台内网服务器，后面因为一些原因调整了这台内网服务器的frp配置导致的")]),t._v(" "),e("h3",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),e("p",[t._v("根据上面给出的提示")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Add correct host key in /home/ubuntu/.ssh/known_hosts to get rid of this message.\nOffending ECDSA key in /home/ubuntu/.ssh/known_hosts:3\n  remove with:\n  ssh-keygen -f "/home/ubuntu/.ssh/known_hosts" -R "[xxx.xxx.xxx.xx]:6001"\nECDSA host key for [xxx.xxx.xxx.xx]:6001 has changed and you have requested strict checking.\n')])])]),e("p",[t._v("进入known_hosts文件删除第三行xxx.xxx.xxx.xx:6001配置")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /home/ubuntu/.ssh/known_hosts\n")])])]),e("p",[t._v("删除完毕，保存退出:wq")]),t._v(" "),e("p",[t._v("这样你就又可以愉快的玩耍了~! ^_^")]),t._v(" "),e("h2",{attrs:{id:"四、感谢大佬"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、感谢大佬"}},[t._v("#")]),t._v(" 四、感谢大佬")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/fatedier/frp/blob/master/README_zh.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("frp项目中文文档"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.itcoder.tech/posts/docker-frp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("frp docker镜像 中文文档"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);