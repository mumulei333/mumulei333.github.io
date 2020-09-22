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
    "revision": "e5756a5ea4069124f2e289c453a79e42"
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
    "url": "assets/js/app.a13aad33.js",
    "revision": "228a256c3650638632a5575b0a1757c4"
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
    "revision": "d180f5e4c13a582137f83b1a65055006"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "89451f32e046d866a4a1ecb13f83043f"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "e1b901cf35b4518265745456b752d140"
  },
  {
    "url": "categories/学习/page/3/index.html",
    "revision": "08b10a98aa7b252f41d23b3dbc47c530"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "45d18cb75d45121367e54fa685a2d07c"
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
    "revision": "3b73572f7b877824c1f651b646318da3"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "c3923747cb99f90b8b90d25c99fdc190"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "245df9423ba9f9deab6bc61694dc7483"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "49a1333980ad13d4d67ca3424e3911d0"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "f8f0ab8b376227a2932f14e76c3885a3"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "4759b9d525f1e7c214acc84e2baa6a51"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "d92af2a404f0fc6666c9fc7c1be9f011"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "bd20100c4c5951c8c2e50f15542b10a6"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "ff9f707ef11cae1dcc539eff5366731d"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "6b546d2363da4a5886f3d4307d109cc4"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "44ad93c1657a1ea9af88ba6e93436373"
  },
  {
    "url": "tag/index.html",
    "revision": "d4fcd7b881ebc1157b01e8fe75507465"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "1504664f04daeb9fbeb82f6064c05ffa"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "17fc4150a4b5f212be9a6d2d74a1a831"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "daca4efa7664ddc0505e8b40819a0e17"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "e1addd9e00123c6d7ff89a51a307ae59"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "28f1d7088ba3a72fb3bd674116364015"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "6047c086aaccfd246ac0e4de2d3b1483"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "4accf1c2d0ebc8a7f5431fe3bf23e577"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "082238edd756f3ecf3cf1e85deb54fe9"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "d7608b03caabce60987b98ce55e1e704"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "06792daff5d9aad41295de97ff7c3f48"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "28abc99e903f0d681f42ffc6aaa8d6ed"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "2dea9d4b9e9896c005d58af9a6c4a250"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "6587a3995a4edd1042b0047f693f9c30"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "72d2982901a9f947ffa2c33f62667437"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "7bba950a8e7c02fa071b31feb4c18ff6"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "3f3707b4792bf4fb2058886aa338df68"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "eb47b021b73145ccdcfe47028def40f7"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "82ebc46b6f766d06421383961593ee51"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "29fdc82a6b371b1454f41ffd22d5ac0b"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "14b9e543646b4fcc3a2146e67d3e1bd9"
  },
  {
    "url": "timeline/index.html",
    "revision": "85c11b53d215454f707f479645a48f9b"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "1617f82177aebe4ea8f792e90b5f8a66"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "c176fc4a84a3a8e8d5d35d642baadabf"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "0e1d5c2db558b749340df32644d4459e"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "edbffef9526e6f17288d55e68bc9a5e0"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "72d9df63427cb5f4d585880f22be3b7a"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "5e00e2bfc7527b700432ac9ba7bd2fb7"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "85146fe65f530461ff021a0b4e24305b"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "ec5e31b376196140c895f299f3c6b6ae"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "43abb941853dc007ad326e7449855016"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "6d2c1d80405dd6d8c7bcc56238f11b0f"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "97d102335f9d5ecc066857cdee9cded0"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "1d2141cb2591710f01d0343ffbfd5d11"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "e0a7d0ce93fdf9cd3e7daed14d26dfc4"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "42cc8425c343401b7ad30b7f4ae82728"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "734fc23dd74d4700e6bc5d93547b51bd"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "8dd98009052007cd50a08f45795f0341"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "3bd23f37d827e396703c334e89700df8"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "61f02462d9bc5706a62a8b2491dbedff"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "2d24b77183d0341158443a048d63afef"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "84ebcf90baa3c34343e59eb2213ef1a8"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "4fdadeb985c5e868358fe1c9711d10a1"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "14708c7d497a66141bdf3d8c3e7686bf"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "08a427eceddec4925fcd9d85b5fd983f"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "96e33f691f77ebaa153dabf0b6ad3e30"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "03c1dafaed13db399e37ffb1ac96439c"
  },
  {
    "url": "views/other/生活.html",
    "revision": "d507e8bb80ea944d27a05e86069c7d17"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "dd756b322e90d0b909e673f92b2c4335"
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
