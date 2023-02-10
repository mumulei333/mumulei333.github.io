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
    "revision": "6019a91364ec8d01abfaa19b478ee9e1"
  },
  {
    "url": "assets/css/0.styles.19765b75.css",
    "revision": "e9ac9aec1fa6facb65bc34e078bdb5e1"
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
    "url": "assets/img/blog_build15.cc686a5b.jpeg",
    "revision": "cc686a5b728a7d8d75f649f5ca511efd"
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
    "url": "assets/js/1.475dc6c1.js",
    "revision": "83aa48a2fb48079134e335cb93456680"
  },
  {
    "url": "assets/js/10.34a2629c.js",
    "revision": "15afef1e8fa83b27c74bab3e6cc79170"
  },
  {
    "url": "assets/js/11.d731b2bc.js",
    "revision": "0578080bdf1ab58684beedff3a2fc895"
  },
  {
    "url": "assets/js/12.7463f4d6.js",
    "revision": "3853d0aeda83691e0ea8016a11d2429d"
  },
  {
    "url": "assets/js/13.f687cf14.js",
    "revision": "15a6948d4408ead2e8ddb5abec2a2c2e"
  },
  {
    "url": "assets/js/14.ad779485.js",
    "revision": "0a2fef6403a5bb9ffdee0a84a683e001"
  },
  {
    "url": "assets/js/15.b391e693.js",
    "revision": "9314591a39f5aad04516c950aa54decb"
  },
  {
    "url": "assets/js/16.beb01408.js",
    "revision": "eab8f4aa790b1428b91ab93c2ca93dc9"
  },
  {
    "url": "assets/js/17.ff574e63.js",
    "revision": "f83715df0af956f1f69c1e1648e37359"
  },
  {
    "url": "assets/js/18.467ed774.js",
    "revision": "9cb084cc1ec2839b85d305f74c47cdd7"
  },
  {
    "url": "assets/js/19.0b77251d.js",
    "revision": "e564a4494c82179aefea688515f7e38e"
  },
  {
    "url": "assets/js/2.61a1e39c.js",
    "revision": "6757ee1169f2e5f3ce455ee65fe9bd8b"
  },
  {
    "url": "assets/js/20.dd14c086.js",
    "revision": "0ecd67d34dbdf396344de22cdc470e49"
  },
  {
    "url": "assets/js/21.aded83d1.js",
    "revision": "f51d03baa3ef041decf73b5bda035243"
  },
  {
    "url": "assets/js/22.1e94d6ee.js",
    "revision": "a329ffda728643df6c1370173c544f2a"
  },
  {
    "url": "assets/js/23.f2f939e7.js",
    "revision": "9bbc208248ddeb790b809532fc5a4807"
  },
  {
    "url": "assets/js/24.110bfab3.js",
    "revision": "881f3f6cd3754f429fcc97b9246b20df"
  },
  {
    "url": "assets/js/25.14c21b47.js",
    "revision": "4d0e3f3bbfcee01d00ff8826339e83d0"
  },
  {
    "url": "assets/js/26.6e4af5d7.js",
    "revision": "01acb763b5481b8f3b8c9742cc94c011"
  },
  {
    "url": "assets/js/27.c8f75348.js",
    "revision": "8b68ca1623fe69b6cef9538502914cff"
  },
  {
    "url": "assets/js/28.5407dc39.js",
    "revision": "5e010ed296ae0a9f60f83fca15e00804"
  },
  {
    "url": "assets/js/29.c3354083.js",
    "revision": "daee6affe43bef978cfacb094e1346b7"
  },
  {
    "url": "assets/js/30.7f90e78b.js",
    "revision": "6f829451a5a439d51233c1f4203f94be"
  },
  {
    "url": "assets/js/31.cbaab500.js",
    "revision": "ca046832a00fe43ea306cc68943392d0"
  },
  {
    "url": "assets/js/32.8dc0260a.js",
    "revision": "299444855b4415ae5d1e0b4106deb787"
  },
  {
    "url": "assets/js/33.8f70706c.js",
    "revision": "6fff3c4951061d9e08d89fe9902bbc12"
  },
  {
    "url": "assets/js/34.285b8b4d.js",
    "revision": "91ed673b6e61fcbf83f7df74d5e5d46b"
  },
  {
    "url": "assets/js/35.14dc2f2a.js",
    "revision": "c0bbfb655814544e2be114e3c9f751cd"
  },
  {
    "url": "assets/js/36.d1fbc46e.js",
    "revision": "c4484861b64ea44f57e6fe738c7ceb9e"
  },
  {
    "url": "assets/js/37.9fa743a7.js",
    "revision": "c10c90f662d81fd85eb67c0eb723ade8"
  },
  {
    "url": "assets/js/38.134c1097.js",
    "revision": "d117b8e6a6e3b24a41d6d765fb67b74e"
  },
  {
    "url": "assets/js/39.2ab378dd.js",
    "revision": "2a00a9599d8d554b6fe1061f085762bb"
  },
  {
    "url": "assets/js/40.55c423ff.js",
    "revision": "5fbe5fb1a6b930ee28eb26104a4eaf8f"
  },
  {
    "url": "assets/js/41.775c8b25.js",
    "revision": "4bbdf41dc67d8523633d5c217820e647"
  },
  {
    "url": "assets/js/42.b02703ea.js",
    "revision": "3b11c59084390ce8ea14c97ccfb91f26"
  },
  {
    "url": "assets/js/43.30df6a88.js",
    "revision": "99b72df8c7bec469981b48dbb79c76e7"
  },
  {
    "url": "assets/js/44.18c3b109.js",
    "revision": "392a1a738652f6183ff790cdbf6a12c7"
  },
  {
    "url": "assets/js/45.ac4911d0.js",
    "revision": "9bc32cb23602fe7dfce60049008b4df1"
  },
  {
    "url": "assets/js/46.3de9b612.js",
    "revision": "9921aa401284997609423f297d3bedfc"
  },
  {
    "url": "assets/js/47.016a6161.js",
    "revision": "33f1f454d4002fd29a4718fe46b4a564"
  },
  {
    "url": "assets/js/48.6d90fbe6.js",
    "revision": "cc407cac655e032f2488c7b2412e401b"
  },
  {
    "url": "assets/js/49.68f0b0dd.js",
    "revision": "8fd45ed3480febb94da7cf26e8defbdc"
  },
  {
    "url": "assets/js/5.fab1ffba.js",
    "revision": "d234618d46a8b9863778c80ee754ab94"
  },
  {
    "url": "assets/js/6.6eb05d2f.js",
    "revision": "c9dd093874e29a9103aafa4acbb76282"
  },
  {
    "url": "assets/js/7.df1557b5.js",
    "revision": "6dfd46b7d506959519699f11ec80fe15"
  },
  {
    "url": "assets/js/8.cbead6a8.js",
    "revision": "6f4bbfb7edf1a413c1c28c5dbb115f95"
  },
  {
    "url": "assets/js/9.9038ddcc.js",
    "revision": "ee9cd11c3a782fc44f3430542a84a458"
  },
  {
    "url": "assets/js/app.581179a0.js",
    "revision": "639611ecd4f00ebd70b50ebc8bb5d276"
  },
  {
    "url": "assets/js/vendors~flowchart.0494dadd.js",
    "revision": "311caf44442f6570fdb993077981e75c"
  },
  {
    "url": "categories/index.html",
    "revision": "8708b5fdacbb6b4b565a6394b9231c13"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "15b96612681e9ee3a0e7686456138b96"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "dada1947cdf6a7cca2375e7375599e0e"
  },
  {
    "url": "categories/记录/index.html",
    "revision": "1a7dc7ca73968432b1f6d0974e3d1ac5"
  },
  {
    "url": "categories/记录/page/2/index.html",
    "revision": "c101d93a1164e27be174db9959e52e38"
  },
  {
    "url": "categories/记录/page/3/index.html",
    "revision": "d2edc57db3cb0189e9b32abe88b12a1f"
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
    "revision": "252cecd4580745c6b189f034a29ae16b"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "7b73e9cf2a7f01b7eb1ea89331d73a60"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "2c4770f96159c6507a553ead80505d07"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "2e164aa1ee3ce6853b29beae2fece5f2"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "3c0696c7cf64861622aa05a8b5ff2846"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "52c9bb61289e7f046ff5809ccc7fb58e"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "2f1a99998935da70a4e004b3c59dedb1"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "4726f02985efa0683d8eb03dd3565b27"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "d9259164498839ccfb15cd14ea12b038"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "f0bbc0004273c3dceee9f64138384830"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "0c6b6382b8db83743ad779c63173a235"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "d93553ead55fed7dbd01b6b14f455475"
  },
  {
    "url": "tag/index.html",
    "revision": "4f49a43a67458fa413f41a348503428e"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "6e42684eb4f2e722b4a5546bea03aa55"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "46cd02c49d8c296c3a4eba857829ae2b"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "0f4e042518eba4a0115e6b93f78131af"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "7f32b29f9b93bce7a72669ac5b80f441"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "fcaf2fea6e37b3ca1b185286a25bbe6c"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "83d25921e0e30c9c13a1a06bca1f34fe"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "36d056f7a0975f59a7d899e86a2e7d6e"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "b3524f1a8b603de135a70596b341fad1"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "68c53565ed7a012f7ac1d2111584f3f3"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "31515f6cc1e76f93cb718b5eb5090cc7"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "9e9ad3777a28d38dffc420d74dc1864a"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "b7f8f1b4fc8f3528c4d704e56754c445"
  },
  {
    "url": "tag/书籍/index.html",
    "revision": "acb9ac006708dd26f408b7634343cd4b"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "cec15a02fa5d42946ed103ff58f4cf4e"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "6651653f5c6a0ba0d2ebb6e6af208b64"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "b8249910925a9ff03c8e0209e087fd01"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "2af562f9ad02bfdce2dfa3dec3982df1"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "60ffe09b1bd3446a5ab7ce49d89f4e8f"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "ba9a7d84f4dc7bd32b88edc5d53b8d69"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "34d29112c5b10a858bbe46072100b054"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "b4739ac30d50a8f5e305da632288f041"
  },
  {
    "url": "timeline/index.html",
    "revision": "4512bdf0734cb49ca1a8e83cad178609"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "111557af667bd18679b5902fcd694813"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "811a32da7b9fc166ced888af95126fb9"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "07fa3add6ceacbbf08fe12fbba646d7e"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "c01d666f33096b37ea8518bcd1b36fa2"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "9ae0599cd1b4bc1aefd94835b8b47369"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "df5e76d5587c563d2f275cb33ce80491"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "d2d57720bbf998c833f6a076689ecb4d"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "64d47ca0618e9a15fbc386214fddf8da"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "6256e3ad7c9dad7cb275b70b6a1351a8"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "bb7d1a0058eecfdc4ea1645c147c2f59"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "a8a791fb5ec648bcfbc64e45867956f5"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "794ccf13ace86ae7119fb4342529fb72"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "66a754f2e98717fe1168e71c12e84979"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "2aa2c2b17801f885482ab56316aa4ca9"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "0e2b64b2579b7a105b59ce9d04d4f01e"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "b43d7e0a95d08404a072093f5d442aaa"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "574f10f927325bc2ba269f3ee2810c68"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "6aba42d0d32d7d625e3d8eb2f96f9fea"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "8d546ebc087511482ef84303e210c399"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "15d05dfe329b90179dfeedc02dd4c1aa"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "a6822a6cab5762b9fbf9d8f07005bd94"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "c8b4091ca345ce6a626053739652555c"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "fb70c73b0a086c35d9b3dbe9c58ccefe"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "eb8f59956d5c80b1e0dbb53f51789091"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "0d01f5165810ba0fd78b9d7e9f1205c6"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "0119948d3af034db504ee976f3205f69"
  },
  {
    "url": "views/other/生活.html",
    "revision": "9f7dfb7264a24c4b03a074c1975fffc4"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "4c097b191f2ea2b17d70aea9cada86e7"
  },
  {
    "url": "views/other/读《微服务设计》笔记.html",
    "revision": "35f875e20f1d5f6e99b27994fbf51824"
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
