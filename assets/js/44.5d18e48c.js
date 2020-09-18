(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{652:function(a,e,s){"use strict";s.r(e);var t=s(4),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"生成-ca-根证书密钥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成-ca-根证书密钥"}},[a._v("#")]),a._v(" 生成 CA 根证书密钥")]),a._v(" "),s("p",[a._v("创建证书文件夹(方便管理)")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /data/cert "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /data/cert\n")])])]),s("p",[a._v("生成根证书密钥")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" openssl genrsa -out ca.key "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2048")]),a._v(" \n")])])]),s("h3",{attrs:{id:"生成根证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成根证书"}},[a._v("#")]),a._v(" 生成根证书")]),a._v(" "),s("p",[a._v("这一步会需要你填写一些信息，除了 Country Name 选项需要记住的(可以填CN)，其他的都可以直接回车忽略")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('sudo openssl req -x509 -new -nodes -key ca.key -days 10000 -out ca.crt -subj "/CN=Server-ca"\n')])])]),s("p",[a._v("如果遇到报错:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Can't load /root/.rnd into RNG\n140598752473536:error:2406F079:random number generator:RAND_load_file:Cannot open file:../crypto/rand/randfile.c:88:Filename=/root/.rnd\n")])])]),s("p",[a._v("解决方案：")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd /root\nsudo openssl rand -writerand .rnd\n")])])]),s("h3",{attrs:{id:"生成证书请求文件-csr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成证书请求文件-csr"}},[a._v("#")]),a._v(" 生成证书请求文件（CSR）")]),a._v(" "),s("p",[a._v("这一步还会需要你填写一些信息，除了 Country Name 和生产根证书一样，其他的也可以回车忽略")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo openssl req -newkey rsa:4096 -nodes -sha256 -keyout server.key -out server.csr\n")])])]),s("h3",{attrs:{id:"签署-csr-请求-生成证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#签署-csr-请求-生成证书"}},[a._v("#")]),a._v(" 签署 CSR 请求，生成证书")]),a._v(" "),s("p",[a._v("添加证书配置"),s("code",[a._v("192.168.199.155")]),a._v("需要生成证书的服务器IP")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('sudo bash -c "cat > extfile.cnf" << EOF\nsubjectAltName = IP:192.168.199.155\nEOF\n')])])]),s("p",[a._v("生成证书")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -days 365 -extfile extfile.cnf -out server.crt\n")])])]),s("p",[a._v("到这里自签名证书生成完成，得到所需要：server.key 和 server.crt")]),a._v(" "),s("h3",{attrs:{id:"氪金大法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#氪金大法"}},[a._v("#")]),a._v(" 氪金大法")]),a._v(" "),s("p",[a._v("在某云平台购买域名，配置域名的DNS，添加一条A纪录指向该台服务器IP；并且购买域名SSL证书并绑定域名，证书申请成功后将证书下载，下载pem格式的证书将其后缀名改成crt文件最后上传服务器即可")])])}),[],!1,null,null,null);e.default=r.exports}}]);