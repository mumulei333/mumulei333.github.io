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
    "revision": "2593bc19dbce7b09612a142d820f6bc7"
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
    "url": "assets/js/28.d852621a.js",
    "revision": "95c42c7db82b1819cd8d5d263cf97bf6"
  },
  {
    "url": "assets/js/29.216ff3fc.js",
    "revision": "05c2135a11b41e793af8f2262c6aff6c"
  },
  {
    "url": "assets/js/30.dfcab6d9.js",
    "revision": "07f95b5ffbc284d82e0f8843f9088b4c"
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
    "url": "assets/js/app.28a0c3a5.js",
    "revision": "838ceff45e7d99a768ae4ab0574698f3"
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
    "revision": "a7af33db46fa7648298c00a81a1196e4"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "89e9ed4291c444308e22621437cb5cbd"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "4f65e363196f0f7a7e724299d96ab1ba"
  },
  {
    "url": "categories/学习/page/3/index.html",
    "revision": "9e08fbd471ebff82e3cee7eb08e156f6"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "beba6e1047edc056d2f8f3be9c1d4e4c"
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
    "revision": "1e40b3e0b44aadd00d06e8a0952d746e"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "db69f373ade9e680198fee3d0dbd07e0"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "774ad2e0e83ba4d9111adef9189bf61e"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "f7ac108f642e310d45ba1170cf141795"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "2027ab286c92a69503c7196347b22b3c"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "287d9106e49cec3c3ce5b03ed44cf127"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "86765f8f230e3880ddd767c19eccaff6"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "2a259d1b9522229f364fb34264a1a47e"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "0b9b752d2f64be9dc92e2d0d685ea83a"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "3b440b0ff32640fbfda3c0f0d0823108"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "337446fa1e2be29b91612cb37678eec1"
  },
  {
    "url": "tag/index.html",
    "revision": "5bfcd305cee425d4839b851d2f5abed8"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "7b700188d8126baadea376d6aabd477e"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "90891a14c38fa14a4479058559ed660b"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "eb76f59adb9464c4f9ec1d3322ceb575"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "9a7188e88151d3229b32d250b1cd0b29"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "83ac655c30769cc494dd03c4ca949297"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "fceaa46247fb72ef497c1fbb56a675a8"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "8c0a5b69d46d337e7fa11f17e53d8c18"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "50bdf7e3a75f2241b91870b4b539784d"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "cf4788f27c21b51fbebb7e8e17456c58"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "e6b536194c17e2df59f2f4c61faf7cab"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "afae9e396e2cc4d56cb17abb369317d5"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "69ebf72e214347b5551f74ddf8388d32"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "7a8c651a49263e555672168cdabe8824"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "4d92fbcb799903e6ece41aaa8ef1a66a"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "08f7827c7079c097944afb8ae32ac577"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "dbe3ca42e8ee276adc084190177518b6"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "1325e7c8064a72aae5ee7c69b78e68c8"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "b820cde6fa34147ca3b19877a8a6c62b"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "62f4499b8fb3c4829529037465a7705c"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "f0d03161a899c50cfaa50363e6dc2d12"
  },
  {
    "url": "timeline/index.html",
    "revision": "5b0c3955f392e9c32fbdd1222aafa8f5"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "c1fcc01c483765a6574f0f89b493cbb6"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "b0e83c8a30e6076fdbd72faa48737eb7"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "225dc7da6c2d879699fef94fce4b0df1"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "e040721e65a50fcc81c59a233c3910bf"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "eb6124030bc4aad5fc29a5e3d442c217"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "4b6bf6b325ca570e2edf09a9c3249674"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "a99eace61d941489346b49c6756c680d"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "d666e80a41f420d8c6ef4f8dc374c1ee"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "659cd74b4b708da66f3a6ea365889788"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "04201469144101fa45dbaf8c686fb078"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "57a8484384a4be18b68af4fd8ed67df1"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "7d4cd7b58317d7ce85de4b4213fd686b"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "b70941e46ad9bb88273564343ecfa096"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "032e4b4de4b1f89f98118409d9fce5e7"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "a7787e499905c370a5f5f6516593f734"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "d067e7d7ed24278a0be7791125e1b12c"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "6311242d71713f8760ebbf6ee63abf0c"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "003951cfc5d95b42f1d96d1410cede0e"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "bc5c16b02e037e34b5066d053659b60c"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "3b877b544f5c2bca96554a1c54114776"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "c3e5789590d0cb6ba166a7f297a7ac7b"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "de58896b10170669136321a268ec7c58"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "a429a86dcadd50fd8197fedc0ae257b6"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "6886b563254d636197b2d1d5b4b234fb"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "9cdcf68f96d96f5501230d24874f7ed8"
  },
  {
    "url": "views/other/生活.html",
    "revision": "0d679b11c67745fcc6fee7aeece9437d"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "c7a2e6d358ff1fcb90a6eb1edfc749b6"
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
