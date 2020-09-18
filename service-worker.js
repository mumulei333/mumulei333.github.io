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
    "revision": "0084c1ea5bc6d390e3e4e84d3718c7f5"
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
    "url": "assets/js/41.e30fdb54.js",
    "revision": "fe7fefe6e18642efbbda32d7ae7b39b5"
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
    "url": "assets/js/app.4c314fc9.js",
    "revision": "5d7c5861d54cf5a9e3e33a61b28b760d"
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
    "revision": "af170e642a25984389dc937a13692225"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "20fe867f73a3b72c625f9ce90611757a"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "3979062266cd0598aa49b3bf84d3dea8"
  },
  {
    "url": "categories/学习/page/3/index.html",
    "revision": "f5053afc5b8635008c57f4f99a91aed9"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "1f32604461c1165cb46cb72a2da31dfa"
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
    "revision": "a12cd8992b03e9d833e052e2e3e622de"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "b8d504810c262060e20e647e67715f2d"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "8a77793a2dcb91491e51ff0bdd3c2d80"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "a8e59ab498ae73c563d2b31c979c8ebe"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "74ab1c46055ca89ddf9172c0c751668f"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "d6dbd4d031a8fcb41624d414e6213115"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "afc75a9e36037a1b853f016a89cf92de"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "a691285e6f451f7a6ce127feb2d11ea0"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "0d32263496746ac9321b0bd075b1bd2a"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "1d41b5b27cce8014072726c7c428bdcc"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "15d9ac8d89a581290facfbdb592585cc"
  },
  {
    "url": "tag/index.html",
    "revision": "6d9465babd5c7e830932d251a29974a9"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "7f032e9b09d08bfd787c67ca37832d97"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "a04fa5d4cf2fcc697eb9b20572fc1d97"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "9aa457e0f3b1e31d8e24b88a908d9885"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "7e8953910964a29a9731d2ea6a2e81c3"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "9dceaf021e7a1a2fceb2feb00e8fc0e7"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "760fd8efd3564f5158709eb645d4f35b"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "fdfcfda2a73fa36acd188d90fdb556ce"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "943abc45683909384fca8e4e39e49a7d"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "478d70ce77e00d3f942723ee69e182ad"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "cbcb8902fb1d9d5a0c888b09429ac0cd"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "04068981d74540d7f0d8ceeb5a7f6de9"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "5277c208a027970e0064e2a59f0eaaa0"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "20c33ac90e63a46b1f2c8e230cca12ff"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "f8e3f39756c1a7d369995259fb6e5fe3"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "7898392fa532ccdaea0fea944d1e9d99"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "3c848cc4332065a4e93bf40b685f1727"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "260bfbed6f32791702157f2d09655259"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "2a15798e09e3d1c96d69f18872c038e6"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "d8623981fef4e3e5695a4f0a22abc5d5"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "7836914dd580515a13e8ad7bab335aad"
  },
  {
    "url": "timeline/index.html",
    "revision": "d8054c51a4f80943ccda5e8234f6031c"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "2fca5b85218c7ab31d640d9b31b015a7"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "0b8941a9aee8a86ebf4c7cf6af694669"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "91a0a1b8f475e566d276d08b6434bf9b"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "29744381f6a3560f5672022cc3d6d911"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "164100882eed2b7d10ef807a5d66d1ee"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "66158b4230741bdae64d4b82696ac1a9"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "6f4a0a0a6abeec58c98823db55868e40"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "df29577103391586c814a1e6cd22863a"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "8072d6fcd1e5566a1377ca16a78f18c1"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "4d008db38964df38efc08ceb5454b44c"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "bcc28d9047e78bbca857ec927d02159b"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "79e607d0f07d9c077e9d0a5fee4128e6"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "7c44b895e232fcb9d2976bb29ea2836d"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "202861a6cffc38232c2f26b846f77c09"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "70265af098a5d801b8f52e6b81f8f342"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "fc630bd1f8bfab44c7254624b6e3df4d"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "5516e631028dd3040d72d44f2dfe17b9"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "4d8b56d1c0e76509b0752094ff221071"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "4bcfdf173745821b9bc6f2f9aaa65f3d"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "a67e7dc4ff6e3e11efe92c81acaa3606"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "8bae006a676bba2a2a11b63a27012c43"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "14c8cea8547cb9ae1c3af83852cf69e6"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "a0ac92994032e9e291becf8cb689226d"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "b76b813c8b4fef0976fb6d1791dbc042"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "f3c526a8512d89d076e9b3f1e1158c86"
  },
  {
    "url": "views/other/生活.html",
    "revision": "eeeb708722f3d13f1ed6d17049649342"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "583d99e03f3d685f43df495e889c17ff"
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
