(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{482:function(a,s,t){"use strict";t.r(s);var e=t(2),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"安装docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[a._v("#")]),a._v(" 安装docker")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker.io "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v("\n")])])]),s("h3",{attrs:{id:"安装jenkins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装jenkins"}},[a._v("#")]),a._v(" 安装jenkins")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--privileged")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" jenkins "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9090")]),a._v(":8080 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("50000")]),a._v(":50000 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/jenkins:/var/jenkins_home "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /var/run/docker.sock:/var/run/docker.sock "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(":/usr/bin/docker "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /root/.docker:/root/.docker "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /etc/sysconfig/docker:/etc/sysconfig/docker "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /usr/bin/docker-current:/usr/bin/docker-current "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /usr/lib/x86_64-linux-gnu/libltdl.so.7:/usr/lib/x86_64-linux-gnu/libltdl.so.7 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /lib64/libgpgme.so.11:/usr/lib/libgpgme.so.11 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /lib64/libcrypto.so.10:/usr/lib/libcrypto.so.10 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\njenkins/jenkins:lts-jdk11\n")])])]),s("h3",{attrs:{id:"初始化jenkins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化jenkins"}},[a._v("#")]),a._v(" 初始化jenkins")]),a._v(" "),s("p",[a._v("获取初始化密码，可以在启动容器日志里找到")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" logs "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v(" jenkins\n")])])]),s("p",[a._v("如果没有找到的话，还可以去挂载出来的文件中找")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /data/jenkins/secrets/initialAdminPassword\n")])])]),s("h3",{attrs:{id:"常用插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用插件"}},[a._v("#")]),a._v(" 常用插件")]),a._v(" "),s("ul",[s("li",[a._v("nodejs")]),a._v(" "),s("li",[a._v("git")]),a._v(" "),s("li",[a._v("gradle")]),a._v(" "),s("li",[a._v("theme")]),a._v(" "),s("li",[a._v("pipeline")])]),a._v(" "),s("h3",{attrs:{id:"问题记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题记录"}},[a._v("#")]),a._v(" 问题记录")]),a._v(" "),s("h4",{attrs:{id:"初始化时一直卡在选择默认插件界面-提示链接超时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化时一直卡在选择默认插件界面-提示链接超时"}},[a._v("#")]),a._v(" 初始化时一直卡在选择默认插件界面，提示链接超时")]),a._v(" "),s("p",[a._v("在选择是否按转默认插件界面直接选择关闭这个界面那么就会掉过初始化流程，进入到jenkins后在去设置里修改admin的密码，已经安装插件，如果插件安装超时可以修改插件下载地址Update Site")]),a._v(" "),s("h4",{attrs:{id:"流水线构建项目-无法识别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流水线构建项目-无法识别"}},[a._v("#")]),a._v(" 流水线构建项目${}无法识别")]),a._v(" "),s("p",[a._v("将项目配置拉到最下方，看是否勾选了这个，将勾选去掉即可${}生效")]),a._v(" "),s("ul",[s("li",[a._v("[ ]  Lightweight checkout")])]),a._v(" "),s("h4",{attrs:{id:"jenkins安装node并在shell中使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jenkins安装node并在shell中使用"}},[a._v("#")]),a._v(" jenkins安装node并在shell中使用")]),a._v(" "),s("h5",{attrs:{id:"_1-下载nodejs插件并在全局工具配置中-global-tool-configuration-配置nodejs版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载nodejs插件并在全局工具配置中-global-tool-configuration-配置nodejs版本"}},[a._v("#")]),a._v(" 1. 下载nodejs插件并在全局工具配置中(Global Tool Configuration)配置nodejs版本")]),a._v(" "),s("h5",{attrs:{id:"_2-在构建流水线中的构建环境勾选-provide-node-npm-bin-folder-to-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-在构建流水线中的构建环境勾选-provide-node-npm-bin-folder-to-path"}},[a._v("#")]),a._v(" 2. 在构建流水线中的"),s("code",[a._v("构建环境")]),a._v("勾选 "),s("code",[a._v("Provide Node & npm bin/folder to PATH")])]),a._v(" "),s("h5",{attrs:{id:"_3-在需要执行shell使用nodejs相关语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-在需要执行shell使用nodejs相关语句"}},[a._v("#")]),a._v(" 3. 在需要执行shell使用nodejs相关语句")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/0a865a321d78",target:"_blank",rel:"noopener noreferrer"}},[a._v("问题详细可查看该文章"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);