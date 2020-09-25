/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bcdf42a4151a968cdc9dcbe64aa6dd5e"
  },
  {
    "url": "assets/css/0.styles.022c2da7.css",
    "revision": "faf5304c0ed7a56415a6d5aea6068bd9"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/bg.a382c67a.svg",
    "revision": "a382c67ad2cb860076c270502b258bb1"
  },
  {
    "url": "assets/img/blog_build01.4c388b60.png",
    "revision": "4c388b6067791cd24e0e7889be7fc138"
  },
  {
    "url": "assets/img/blog_build02.725718de.png",
    "revision": "725718de948c1728865e0680e644f12d"
  },
  {
    "url": "assets/img/blog_build03.10952a54.png",
    "revision": "10952a54628658965edf4b6eab8ad372"
  },
  {
    "url": "assets/img/blog_build04.755a1e72.png",
    "revision": "755a1e725104e4c8e34ab8235533cf5b"
  },
  {
    "url": "assets/img/blog_build05.45ae6dfb.png",
    "revision": "45ae6dfbe0a1ef6fb486d34214151b9d"
  },
  {
    "url": "assets/img/blog_build06.6601b724.jpg",
    "revision": "6601b724f1136a5d4bafef7861264fdb"
  },
  {
    "url": "assets/img/blog_build07.5b5c76be.png",
    "revision": "5b5c76beacb17d743435509cec99f626"
  },
  {
    "url": "assets/img/blog_build08.3fc85271.png",
    "revision": "3fc85271078c647072c5c55a7f9d278f"
  },
  {
    "url": "assets/img/blog_build09.bec8adc5.jpg",
    "revision": "bec8adc569ad309637a7a6638dd2d5ac"
  },
  {
    "url": "assets/img/blog_build10.f23b2a6a.jpg",
    "revision": "f23b2a6a946c18afaa9ff3021ba93389"
  },
  {
    "url": "assets/img/blog_build11.4c808612.png",
    "revision": "4c808612ca1d4583984574f7676bd0af"
  },
  {
    "url": "assets/img/blog_build12.ff23d483.png",
    "revision": "ff23d4835df48520b861d39ee16096cb"
  },
  {
    "url": "assets/img/blog_build13.600393d1.png",
    "revision": "600393d18adff4fc5b6b404423aff242"
  },
  {
    "url": "assets/img/blog_build14.f3d832ec.png",
    "revision": "f3d832ec30ac887fc3900039d16f6218"
  },
  {
    "url": "assets/img/today.484a4d22.svg",
    "revision": "484a4d22a4aa9be93c18433c5ff3903f"
  },
  {
    "url": "assets/img/tomorrow.81f0b143.svg",
    "revision": "81f0b143cf6df495fb5f1ba4b32da0a4"
  },
  {
    "url": "assets/img/yesterday.8e49f298.svg",
    "revision": "8e49f298844ce8a7235c197d5d12e4c4"
  },
  {
    "url": "assets/js/1.cecc6e5b.js",
    "revision": "b3d0ed462cfb610c5bfd5e642a6985b8"
  },
  {
    "url": "assets/js/10.baf40c74.js",
    "revision": "7abb5ccc814accbb4394e350a857f865"
  },
  {
    "url": "assets/js/11.aae9d3a0.js",
    "revision": "9f6045c101018a5581590dd14c9ed1ec"
  },
  {
    "url": "assets/js/12.768cb4ff.js",
    "revision": "7729a27ae1f71730314f4eb74a8defae"
  },
  {
    "url": "assets/js/13.45ca55f7.js",
    "revision": "a4732972b58fa4d5ad4a9bfcfda515e1"
  },
  {
    "url": "assets/js/14.5facf816.js",
    "revision": "199c8534914b30b443fd3ed619d64536"
  },
  {
    "url": "assets/js/15.aac9699f.js",
    "revision": "163b970ddbf5998a671165986e4c3e6b"
  },
  {
    "url": "assets/js/16.e7b0928e.js",
    "revision": "ebafc129fa5c51c82827552947f0311d"
  },
  {
    "url": "assets/js/17.0e6fe580.js",
    "revision": "ba16b845503d2ce86272ef34b637e656"
  },
  {
    "url": "assets/js/18.8cd7163f.js",
    "revision": "be7e615e8def427350fe60ac41342afb"
  },
  {
    "url": "assets/js/19.0fa55237.js",
    "revision": "4ba35f5e36aff2ee499ebb75a7212083"
  },
  {
    "url": "assets/js/2.c7f26fea.js",
    "revision": "8f82cedfa1431bfab1148db986a2739d"
  },
  {
    "url": "assets/js/20.ff1b6f32.js",
    "revision": "d094c43c555b319feb54d4417b277002"
  },
  {
    "url": "assets/js/21.c55f765e.js",
    "revision": "2ab5bdae084d6bd707b7652ab4415899"
  },
  {
    "url": "assets/js/22.07b5df39.js",
    "revision": "50ea8c127866e2a22f033c1126706c0c"
  },
  {
    "url": "assets/js/23.c5eacb54.js",
    "revision": "6c0edaa97d54240093652eb1272e599a"
  },
  {
    "url": "assets/js/24.90aea81c.js",
    "revision": "dc248188b4895a75b3099463fc1b373f"
  },
  {
    "url": "assets/js/25.022e50fc.js",
    "revision": "7964a5cdb739551cc33be84e7a630ea0"
  },
  {
    "url": "assets/js/26.e63fdcb4.js",
    "revision": "0503c74e43deaa2542145f65c786a057"
  },
  {
    "url": "assets/js/27.23676215.js",
    "revision": "c22eb074f19f463d044b9b1819fd517a"
  },
  {
    "url": "assets/js/28.ac18a13f.js",
    "revision": "501713012589c95feea2b0a2d1dc75ac"
  },
  {
    "url": "assets/js/29.c2bd02e3.js",
    "revision": "0eff3a4218464388f21ea14e098c59c2"
  },
  {
    "url": "assets/js/30.6d356107.js",
    "revision": "080f8fb00b566894e123de844895bfaf"
  },
  {
    "url": "assets/js/31.6debc338.js",
    "revision": "38de821242c3c5409fb90799af7c23e6"
  },
  {
    "url": "assets/js/32.0b6b2291.js",
    "revision": "0e35bad62994be48868e05504207b792"
  },
  {
    "url": "assets/js/33.60264898.js",
    "revision": "14aaaacc4e776db238e881a915f4107f"
  },
  {
    "url": "assets/js/34.effb19b1.js",
    "revision": "4b7edc290c663f8c355a847c9bdb30c0"
  },
  {
    "url": "assets/js/35.d1e67136.js",
    "revision": "4542780b1404396b4c8017b125d5c7ca"
  },
  {
    "url": "assets/js/36.612726b1.js",
    "revision": "408f91c1d4ee9ce81e7e60462ca6c0f5"
  },
  {
    "url": "assets/js/37.8d5db0d4.js",
    "revision": "bf4f0a7ea1d1197a82a923dfb2dfb4f6"
  },
  {
    "url": "assets/js/38.4878618b.js",
    "revision": "f5acd01212593fbf2fe4446580caae42"
  },
  {
    "url": "assets/js/39.9f204b4d.js",
    "revision": "aa3288a65b1f9dd562e68d228e01a878"
  },
  {
    "url": "assets/js/40.7bfba453.js",
    "revision": "ac727ae5e61ee53d582f441f9d351aef"
  },
  {
    "url": "assets/js/41.b40a7267.js",
    "revision": "ee54787bfa0f1e98547fb35da67bed31"
  },
  {
    "url": "assets/js/42.f74c6218.js",
    "revision": "8e13b277be7a367ecd1c9cad0a49e073"
  },
  {
    "url": "assets/js/43.f00e077c.js",
    "revision": "c27c62f1eb17a4b40e132d0a5284c864"
  },
  {
    "url": "assets/js/44.d0fcfc89.js",
    "revision": "f574c3b50e7e78b0651271204b364b2d"
  },
  {
    "url": "assets/js/45.883ba569.js",
    "revision": "6f6b28d744059017ef0f401374270edd"
  },
  {
    "url": "assets/js/46.c101d2d2.js",
    "revision": "17c5cb549a48723c72e2846fa9d30be0"
  },
  {
    "url": "assets/js/47.767c16c1.js",
    "revision": "1e2796db2da63812d9a7363228ad2d9f"
  },
  {
    "url": "assets/js/48.36badc0a.js",
    "revision": "96bf4a015a31bf1e75d84a3a1d110796"
  },
  {
    "url": "assets/js/49.6f30f845.js",
    "revision": "4a9921454c69adff9b02d68249e8c467"
  },
  {
    "url": "assets/js/6.e3961f33.js",
    "revision": "b3aac17e825e720a988e2e06987326bb"
  },
  {
    "url": "assets/js/7.b9258d4e.js",
    "revision": "35c5df81384c405ee2300fe81c6bc769"
  },
  {
    "url": "assets/js/8.e7bde66c.js",
    "revision": "02de89ea70ddeaee69915fa795c556ba"
  },
  {
    "url": "assets/js/9.b0ba6996.js",
    "revision": "9bd0cbcb7fdac7619975c89cf37dd804"
  },
  {
    "url": "assets/js/app.4bde35a3.js",
    "revision": "18fa4ce84cb44dddb4bb5e8790178f9f"
  },
  {
    "url": "assets/js/vendors~docsearch.88bb053f.js",
    "revision": "dcfbd59dc9f0d25d57276e4960df1782"
  },
  {
    "url": "assets/js/vendors~flowchart.4c4d2a29.js",
    "revision": "ceb528b3c502000679967a4375d840e7"
  },
  {
    "url": "categories/index.html",
    "revision": "fd83abf3bde09cdb9679762afec06673"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "ae08a544302ca508f847720e66295bc0"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "80293f386d2b849abf4e07832a5bfcd4"
  },
  {
    "url": "categories/学习/page/3/index.html",
    "revision": "06c6f8b5b896fe59f6254b52078675b3"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "1238cd7c643ab88cdaa10f684f4dbc1d"
  },
  {
    "url": "googleea31ca71997d7a22.html",
    "revision": "e8e6adbd7e5aec4222f1e8f9ea95fdfe"
  },
  {
    "url": "home_page_background.jpg",
    "revision": "eff8b7616f254e6d085a3605eab3da04"
  },
  {
    "url": "icon_vuepress_reco.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "index.html",
    "revision": "9c1c7891854c0a82a907f920139c0fde"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "a22c313aa3708548912a37d564fb83b1"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "c8af1fed1218e7e0b36c43fad10f741f"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "2b545f349f9a74fe492524fa05e8930f"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "bc814f681288878a2d85668644be29e1"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "9a1afd3ecb0802481b626f04cf69c2c9"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "27d2a9483b90023cf7dca00c5b070339"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "d97c859089df193628a71128d41d2802"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "e775c12c65b1ed6d2e2fbf567fb401b3"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "43f6578f74c369a4d92f8458c847f0d2"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "bdbd8e5b5c697e4a227a09aaa26c1a58"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "2b5dc714785de61c01aece7660f89e66"
  },
  {
    "url": "tag/index.html",
    "revision": "542f85be640ffed340d91fe4ffad7678"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "f35c843b7734d6f1b65bb04d58d42bf3"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "c61c1d3bb9eca28f7e79f0aee8569701"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "7545c997e5760e511b2a470196ffa54f"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "83333697581bce9306e12f9128db82a7"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "faeca33647cae8855f661370e26c9478"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "6898f501477485bac7e4d8bb2986e8b0"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "059d1590c8024e22189a1555a3fe6d89"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "c8e380bb5dfb270fc68f9d14f502dfd9"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "65a0b2d24a7726c2d65fe4e9c42031e7"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "2048fea005adeacefd3a29b3cbdd26a1"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "d806d8420e6e4dca4785d6d6b3aae3ad"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "fcee98cb5dcb711c31b9252b3a57e735"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "54cea14a5f833e0e8e1b0ae1b81b967c"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "1d2f3ba54ec5c5baa3067659c662d51b"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "7cceccc91114ccfe9a5db5fa6fbc8044"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "465742df3057962bbbf18a68190e7959"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "f870b07479ec549f090589004fd774ae"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "9c3e913840cab3080533d87a394a62bb"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "dd22bc1a9dc025cc32bb8613a53116d5"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "8fa0f60990db9cb8ca3869a8a9de316f"
  },
  {
    "url": "timeline/index.html",
    "revision": "196f6c4263d982b96965ea1579d29bd7"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "37bb31d32736c8bcb0078bb46081b83b"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "3e42e3a76aba7feb4e45ad622e73f05c"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "81468acae66bf3af23ec37fc273e17c1"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "230baf46c1eda8862a97df9f944a61d0"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "2888f9df1265ec770de59ceb8e5bd7d0"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "b41040a5d8b130ad31eb8fc7f95d986b"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "ed98b22b03e54e37c99e353816445e5f"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "e8f179bf92284153936808e06cb936fb"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "9eccde7174656dbad99006f33a4c557a"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "5d9acc848981401997a2095e44e1a917"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "fb5d74492266cb70969b42496df195c3"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "31143f452b74f256645ec79047cc52fe"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "44962f0d2e190e6d0cd434e8b584ce99"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "bb063f06d84131ce76030c4fb9043495"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "0e2879a1672acd0e216fde362ab6218a"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "ff620d348e783faef98716f975449f61"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "fda70c0cedec7df0abb70e5dba2e4df7"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "7029a4f38385a26279750598af282ed8"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "1334f1ff4def3c910c9962a5d34d7f8a"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "0cd970ffaa379ee86cd9be13885d4c3d"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "5f8471c1a10eaa3a78898dbe87415677"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "989ebc22348193d087beebb246ce6e43"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "b4a823c99edcc1c5f71843edeb553736"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "a32c5f1d5709b720b2f78a8853bb3605"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "b661b3202fe22deb628cd251c239d856"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "b897db4bcda76754f92bc7d08302c42a"
  },
  {
    "url": "views/other/生活.html",
    "revision": "ffa3981350ca102eef983bcfff9a4309"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "561f8b1348c87142350484b177924303"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
