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
    "revision": "7b7124878d3f43fdfb4e6449e2a065b8"
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
    "url": "assets/js/app.b48c2754.js",
    "revision": "5f1d379748e8c50bcb01e3392715c418"
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
    "revision": "cd43faa46dbb96845ddde6352e778bf4"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "1d8f9894f4b5fd91a18db70200ebfbaf"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "aca53b10f50b1aaf0c6b4ccc25d7d722"
  },
  {
    "url": "categories/学习/page/3/index.html",
    "revision": "243229c125000b9b6a97788c1be0fa80"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e1c0a3a8d866e913fe4bb704f0cdc764"
  },
  {
    "url": "googleea31ca71997d7a22.html",
    "revision": "e8e6adbd7e5aec4222f1e8f9ea95fdfe"
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
    "revision": "f350f98c1da717ba5ed3009a527d693b"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "1a372b001ea1a828a4c205f9b9086318"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "d828a93dd1b5ab57f0818ab6dc8e31cc"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "1161931e3dd7fab5f009a6f62ade1ee3"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "eec12b25296056582b1ecbaa7d3ad162"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "e01e5b21a5225d653f0e9745a47edc90"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "79f5eb17895e3557497c31069bca48ac"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "29762e973738ef8375de22830bb8a5e6"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "ad4506fd064a1768d36440a87cb6e6f3"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "5d0598027977a3c8b00bee64d465482b"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "d39e5839008af3724a8b969f62905d2f"
  },
  {
    "url": "tag/index.html",
    "revision": "74cf3a9a42a84899cec82b43eddb6ac9"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "b36794246536ccb6ee31ea65170ddae5"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "44bc7aadb59cb43a4f27f36ba6c1bb7c"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "4b9acc08fcefe88cac447bd0e17c8458"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "3876403784210abcc56d09a4bb7c2b02"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "dc4d933a95cfd2b34fe0dcaf85f647a1"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "f81040bfb0e13660bbb5d29a0ca847a0"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "c93f0c3ac923bc3f8df2fea41d4d8c7a"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "daee6f32c89f416616bb49f6ec056ad7"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "047c8b3c4c2a086e45e61318dd63c9a4"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "cf1dde26c3661aef9e8ac0e4be3c2477"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "b99adf09ae6c5de821949ee126401113"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "c7ead209398e3d1d5f95bbaf7577c562"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "a371cbf56f80491aac446e500b4e703e"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "4be92cd0356337ed88f223253c5d9b51"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "26d315a1e7aac792a69d0e318fd96ba5"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "d12153e3b28e2a037b6ecf29f4c10e5a"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "c6d3e97b798f1f3f6eafd805a1ee4d6d"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "354dc12ad45775892a5d69321e43c1b2"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "75dd25de1f2ff12ba08135ba341dc693"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "c648e18129aca2c50726084d7d1160b0"
  },
  {
    "url": "timeline/index.html",
    "revision": "dec4d1defd119eefeae4ba09dc685977"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "223a4bbe2ca3d1545346ba733f35d4c8"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "d4ccd00b04bb4884f274212e3d075f2a"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "16cac4455f44b4f12fb0fccb4ec531fc"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "18592d4766aa8fe951d08320f5685953"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "eabf19ac7f9e46b8ed1756b12fd34f73"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "48218efe758bd744b9792319f02f8b58"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "1deb44afe9146a84714e6a24f4b69bfe"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "dd6af883b1de0cf48d0e56cdf0316afd"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "2eca886f1872e46f3191fc90eb768317"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "3237ac8fe5f6c70d62b9f0e530f8d900"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "adaae754c2f2adf810aadaec4a6fd50e"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "69523f61ac125090e91272e77eb6eb69"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "2b8f7ae8c338e48d322e26c80c526d68"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "fc710434948374aca1737d3243519655"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "0a214af3c67fe8ac49190f9cd09eac8c"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "a1833c7e9ba2acdb8d5e568897b2272f"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "4b913ad865e2ed278488bb0456bc65b3"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "6c624b27f6022c8f0c19e1fb13f6c5a7"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "8dd021f5d6ce2c7dfef06c7ab1a556a9"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "f22b38a2cb79b53101e540dac4a4c9b7"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "658791c2fe3236917b817d9e7bc9520d"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "0280bd42928d1af394c446ffe250f887"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "33071ccd2091e108bfcb2085a5674121"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "7ebb379241262a64c62924cfb3cd071f"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "a60aa90695653b6fb277574db9b1a88c"
  },
  {
    "url": "views/other/生活.html",
    "revision": "c1ffa573183ac19e8de84fc47c555b2a"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "20531e90ee3c524a872a592e6edc8d7f"
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
