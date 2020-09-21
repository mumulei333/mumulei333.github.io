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
    "revision": "58b106c04185409be39417e134068226"
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
    "url": "assets/js/1.a140cc86.js",
    "revision": "213e00e06030c054188cccac7e179c61"
  },
  {
    "url": "assets/js/10.6684bcab.js",
    "revision": "a048a2b7935b6e85db1cca5e432b9885"
  },
  {
    "url": "assets/js/11.c2403b2e.js",
    "revision": "565d3be5f03ce45d1a4c8f30b6290362"
  },
  {
    "url": "assets/js/12.b8206a8b.js",
    "revision": "8e4775729e2379e9a9c95673bd9bb598"
  },
  {
    "url": "assets/js/13.6822f171.js",
    "revision": "43be6618f8620545349760aa80c9aa54"
  },
  {
    "url": "assets/js/14.195d445a.js",
    "revision": "0f72442a713499b8da75c1754f56f268"
  },
  {
    "url": "assets/js/15.19b757a5.js",
    "revision": "532ee4a4603b5fe4047616adfa21097c"
  },
  {
    "url": "assets/js/16.7770d159.js",
    "revision": "835701724e4652e88adb267246c383da"
  },
  {
    "url": "assets/js/17.d6eee69f.js",
    "revision": "509fdc77654e20078934c16031cb9131"
  },
  {
    "url": "assets/js/18.9d0f38c7.js",
    "revision": "8093de1c0833b9adc7a9792d74ca37f8"
  },
  {
    "url": "assets/js/19.99063d74.js",
    "revision": "0e37fd0684209c140904f7218d129c43"
  },
  {
    "url": "assets/js/2.2b809728.js",
    "revision": "dffff16e76cb4c08a79a5819ac053ce5"
  },
  {
    "url": "assets/js/20.772255e7.js",
    "revision": "77e2dd26d82b211dcb9903b6865ea9ba"
  },
  {
    "url": "assets/js/21.d3fc02fb.js",
    "revision": "844753a83e154b3a42a7ad27347c17d7"
  },
  {
    "url": "assets/js/22.9a38c30a.js",
    "revision": "650f8407d8ce50094da2ae7cb3db7e19"
  },
  {
    "url": "assets/js/23.8d23bfc3.js",
    "revision": "5a8d3a1ab4076923042656f2c26b62eb"
  },
  {
    "url": "assets/js/24.50be9650.js",
    "revision": "f73b51a06dfbd8a9080820622f687a05"
  },
  {
    "url": "assets/js/25.02747c18.js",
    "revision": "ffe94a1ae5198c1a3d87a926248eb78c"
  },
  {
    "url": "assets/js/26.716a8a9b.js",
    "revision": "0d3acc005dc06363f0f836e2ada37bab"
  },
  {
    "url": "assets/js/27.711dbb5d.js",
    "revision": "b2f7e277eb2be1cf177c7aba2539668a"
  },
  {
    "url": "assets/js/28.913572f8.js",
    "revision": "c6a3d4fd9d67ad25dd78344018ddc14d"
  },
  {
    "url": "assets/js/29.a93f6a61.js",
    "revision": "76844ebae98a46a3c04403f04058075b"
  },
  {
    "url": "assets/js/30.d4d5d7af.js",
    "revision": "30fe5a4da4233cea77ace8ccbb1d08c4"
  },
  {
    "url": "assets/js/31.f09ead1f.js",
    "revision": "f1bf99a22293cf8235077ef401c6ef70"
  },
  {
    "url": "assets/js/32.3d5e940d.js",
    "revision": "198fe0b2236a152f68494ddeed95c532"
  },
  {
    "url": "assets/js/33.c380f517.js",
    "revision": "5ed2b155e6874a3ce12f4594246671ea"
  },
  {
    "url": "assets/js/34.0cb785f6.js",
    "revision": "a044023f9655fd85fceac8e05ba11a1e"
  },
  {
    "url": "assets/js/35.92771b07.js",
    "revision": "41d3145214d485daf59b7d1bfd00a429"
  },
  {
    "url": "assets/js/36.9aff34ea.js",
    "revision": "6e1a00dd304de533cd3f5d8e9b493f96"
  },
  {
    "url": "assets/js/37.427e803c.js",
    "revision": "b3dab2bf1ae636f42174d404e3511a5b"
  },
  {
    "url": "assets/js/38.f526a462.js",
    "revision": "5ca89daf6e4414985a33219a6194d0a2"
  },
  {
    "url": "assets/js/39.708299f3.js",
    "revision": "ec170f886813baf43db202505c527975"
  },
  {
    "url": "assets/js/40.ace3cae5.js",
    "revision": "0cfb8400267bd6ad5bee937599802159"
  },
  {
    "url": "assets/js/41.846f553d.js",
    "revision": "bccdf8c3d02b89277adb16710a77d354"
  },
  {
    "url": "assets/js/42.f681a460.js",
    "revision": "fd3d73950fdc3ac7202c74c931f98887"
  },
  {
    "url": "assets/js/43.449b73bd.js",
    "revision": "4f33158c1b04625f351ad7c03458c29b"
  },
  {
    "url": "assets/js/44.5d18e48c.js",
    "revision": "63682635d9fa6269f79cd9293aa08e36"
  },
  {
    "url": "assets/js/45.092a7700.js",
    "revision": "da671d20691b32c2d450b74d216bd8fc"
  },
  {
    "url": "assets/js/46.fc20f6fb.js",
    "revision": "d8043b57bb3e614644ce61bc2538cd35"
  },
  {
    "url": "assets/js/47.ee038197.js",
    "revision": "db8eccbb35aafe5557cce0c632d95bef"
  },
  {
    "url": "assets/js/48.7ac8b830.js",
    "revision": "4b4a07be82c2dbb626d5604821ec4e15"
  },
  {
    "url": "assets/js/6.a7729020.js",
    "revision": "c8721557e417f288ecfff33978a5b102"
  },
  {
    "url": "assets/js/7.08e4e7f4.js",
    "revision": "7ee979ec925d2454059c1f968c9e4fb6"
  },
  {
    "url": "assets/js/8.a3a7cd3b.js",
    "revision": "17810d59d095078f6273ddf46a3a73d7"
  },
  {
    "url": "assets/js/9.58725af0.js",
    "revision": "a930d058bc3b9ec49611fddcbcc67b14"
  },
  {
    "url": "assets/js/app.05802f9a.js",
    "revision": "c972c55e31a89d47e595b012ee43056f"
  },
  {
    "url": "assets/js/vendors~docsearch.873febc0.js",
    "revision": "87a6bcf2bfcce1fd22e9050a337331f3"
  },
  {
    "url": "assets/js/vendors~flowchart.dd8599e2.js",
    "revision": "27dc321253b69584c1bc0aacb29c24d5"
  },
  {
    "url": "blogImages/Leecason.png",
    "revision": "7c60fbffa793a1cb7dd2aacb913050b6"
  },
  {
    "url": "categories/index.html",
    "revision": "09cf2183d3ceeaf51ae4fa84e882e6f0"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "e58d2f7c363ba8a774b96eb316b42ae1"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "cc95689cfff35d3c74ebc84a3ba6ce51"
  },
  {
    "url": "categories/学习/page/3/index.html",
    "revision": "6334d092db38b4613752a8b3ffa938bd"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e924cea8863d6d7aff1215fefd0e1e68"
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
    "revision": "13e7ad67f72111dfe1c223def70b8a41"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "575faf6e29b8f24e5f607f8b9fae7e6b"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "3000e898cc772825df98480bd37bfa0b"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "e9676d5630da2db9046764c6c4e7ee9f"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "bca7919cae178f2c5510f557f3639e7c"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "d9922f076dbf51d38d588f628d3c69d9"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "c58a9c793b3357bd8de3e81056b1e4ea"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "7d140c69d5f6a1a6907ec862714e6ae9"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "dd918839ad262d3e46158202dee9d97b"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "acf92ae7beebf81117c4736ae179c6d3"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "3d0c04ea9fa52ee9c5bdf61113a196e9"
  },
  {
    "url": "tag/index.html",
    "revision": "57a85de3cd6456718ce52a530e291084"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "fbd50d34b74db4f7a817ab91b15a765c"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "adfe1559bfe684f9256906574723256e"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "b0b120840ae7480d6e16d21499f31c59"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "f9cfd41b9bd966772c53f6c3ce522e9c"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "1db85fbda24c7d76fb7b51c4635030c5"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "a35dbf7add7aaaefd425ce75e9b23aa9"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "b157dafeb702771a36e56a3f7950083b"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "e529a17f84dc67170a8a8860682aeeca"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "bb8d7c71fa64c95db720c01937a5ba63"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "e1bf0235b790dc81bd5cf5d0a6421ee9"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "2333c12c41a6229ea3f1ce190d2b8510"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "facb3cb751960c54ea6b0c25950d732d"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "7d8b8ab2ead1064939084229a733a5d9"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "18ade34fa0e6d55a09afd2ab0d6e72bc"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "d6c2298df6e223d3673c2f6214f1e60f"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "ee237d044948acc4701396ddbd154320"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "24f0fb78ce862cb6a8125ec127fcde28"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "1b2c2dad3020d5098f38abbea227c019"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "288db29cc3d16c811ad7aed183611c9c"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "93e342c8333341bbe4796b68cb339098"
  },
  {
    "url": "timeline/index.html",
    "revision": "30f671829e31d711f0b4681254a7d120"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "f75044167311edb06c078aeb1b174c16"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "3a7d9036c0e8a7966fc2453649439459"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "bc82fe7372e861d55ce2cd9722290729"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "d60cb335b66f015cbba058a1edde1b47"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "63fe53de4549f3298cca7126298d63e4"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "c812dae0f40d1f1aaae2e78bf4e10913"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "347b9b443bb781b794f300e8a89c41b7"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "05258df17de32aae533a3f718e77f83d"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "74a94f86b2f73409a79e86a9916be843"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "a9fe475b4cea2b0eb0cf8a44b10f0175"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "9616c02a5483ca6a820cfaa437262c0a"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "df40c938ea1ecaa003bcb9fe6c7afffb"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "a79c417f8384db5be808f4b68dab4e5e"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "3af0ee7f765fa0a0178846e5f402cd51"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "2216cae4209048b24804b0a6054898cf"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "3f4f1ee9a49cda12b344f8d484bed98a"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "211af8ae316c5f4dca4d2ab93c664a73"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "5ec09cc13947d0cbe8522503f7c1eea9"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "cd8ce8eca71480739ae3bb46f8fbd6c9"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "15e068c8a3a02e8bfde336b44210f06c"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "b0ca081889abfd7b1d13b8f144579c1f"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "a2b13121c680ae0719661a023918c7b5"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "9f53536f0d629472e34ac495f493b815"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "1a93b6b4bb22a4f8592686c35e2593fc"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "95e492a5ebc46501305854ef6843b7ea"
  },
  {
    "url": "views/other/生活.html",
    "revision": "d6ac9b15bb57eb3ec07ec3159c3ec9f3"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "94df9d219992bcf50d92bf8d166274a5"
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
