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
    "revision": "f89156f69f92dd4b1596df636070ccd5"
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
    "url": "assets/js/13.c3a1f8d3.js",
    "revision": "9679de7f7410a151fb4c56ce35952d02"
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
    "url": "assets/js/18.19be3148.js",
    "revision": "b45c0a7936db3f0388f9b626d6c6e0f7"
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
    "url": "assets/js/22.0e1b8203.js",
    "revision": "40eca22eae8387b55c4734732bf78d28"
  },
  {
    "url": "assets/js/23.91456c9d.js",
    "revision": "8b775e4f7eba1041681006de38226373"
  },
  {
    "url": "assets/js/24.92bcd089.js",
    "revision": "f0f8f5374f9168a1307746e7a025c15b"
  },
  {
    "url": "assets/js/25.de978e68.js",
    "revision": "e7ffb0166dd0ecc86344eae1a16080ff"
  },
  {
    "url": "assets/js/26.95ed57a4.js",
    "revision": "6a05e447be81186fc27844846385ebae"
  },
  {
    "url": "assets/js/27.d273f622.js",
    "revision": "2172d423529817fdd6979b7847eb711e"
  },
  {
    "url": "assets/js/28.d4bfba66.js",
    "revision": "3b8156a8f8d0919ed213527091462274"
  },
  {
    "url": "assets/js/29.d66f7c07.js",
    "revision": "0886d6edba969aa5d7f6ca8a965ae020"
  },
  {
    "url": "assets/js/30.688f1473.js",
    "revision": "308b3bfa0b0ec940cbbd66b175a738c9"
  },
  {
    "url": "assets/js/31.f5415ae7.js",
    "revision": "118cecd4b5e2f79bd5165334b1c42f75"
  },
  {
    "url": "assets/js/32.296fbc1a.js",
    "revision": "433ab0e50be679258d42b6789414c8fe"
  },
  {
    "url": "assets/js/33.c52fb9e4.js",
    "revision": "3f2580c5e6bb3475872f23fe2f2be90a"
  },
  {
    "url": "assets/js/34.45705e33.js",
    "revision": "9ecc168677c52e548010f19e06d35257"
  },
  {
    "url": "assets/js/35.72c15226.js",
    "revision": "af1ada79d5cb20af0ac3d6e0f86faa80"
  },
  {
    "url": "assets/js/36.7013acd3.js",
    "revision": "01aa76400825f096d163e3614e80e280"
  },
  {
    "url": "assets/js/37.8db553ff.js",
    "revision": "da555b863344f9f33488b0503cc89655"
  },
  {
    "url": "assets/js/38.13d5ef37.js",
    "revision": "7c7a14ba847d6a076db755f0a6f414b3"
  },
  {
    "url": "assets/js/39.cb29381f.js",
    "revision": "31371f983181fd5433b6156edd92dc80"
  },
  {
    "url": "assets/js/40.7a590378.js",
    "revision": "4f1091c6102edb768092a045dd8c91ce"
  },
  {
    "url": "assets/js/41.1c8fbb87.js",
    "revision": "7fceba736176d374b888206b4205480e"
  },
  {
    "url": "assets/js/42.570cbb67.js",
    "revision": "febfb0a35dd1d0d832b3bc5e10be8d22"
  },
  {
    "url": "assets/js/43.088bc739.js",
    "revision": "d7fbb3733bef3a2e478e57c6001a7dec"
  },
  {
    "url": "assets/js/44.0bdc1ce9.js",
    "revision": "9a5069eb584478eb95c428ee9a345c55"
  },
  {
    "url": "assets/js/45.462f7907.js",
    "revision": "fe6a7ee325cce138ddfd525e34e72c4b"
  },
  {
    "url": "assets/js/46.490f8263.js",
    "revision": "60b878d6c5c23cadfb51157c632afee6"
  },
  {
    "url": "assets/js/47.2ee4d933.js",
    "revision": "af29c8688ff9ebdf0f0dad98ae04bda8"
  },
  {
    "url": "assets/js/48.18a3afb1.js",
    "revision": "d23b6646953df85a0cd58a8e01518362"
  },
  {
    "url": "assets/js/49.03bd2fd0.js",
    "revision": "2eae9ed476044ebb5e7b6dff7626cb41"
  },
  {
    "url": "assets/js/50.b23aae47.js",
    "revision": "480b83142bab2719fe300ebc9cbed48f"
  },
  {
    "url": "assets/js/51.b511390d.js",
    "revision": "d1f00c63259ceedaaf270cc0e6941b84"
  },
  {
    "url": "assets/js/52.137d9a1b.js",
    "revision": "a10e29900261a3b61be769853ee84393"
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
    "url": "assets/js/app.c18196b5.js",
    "revision": "dfb1aac9d5f92d0f0f97bbcabb300624"
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
    "revision": "8630e8c6f7850761878218071efdeee7"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "08f8fc748231a921a2d6cf863c486311"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "a7400ce95dbe88fc968cd1cf469d9e3b"
  },
  {
    "url": "categories/学习/page/3/index.html",
    "revision": "dff0d72dd8e9b5956f01b663c9f13618"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "89f53edde3f2e87d6c0e7fab7b4138d9"
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
    "revision": "007931f47f0c3e8d2bc1418022e038e6"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "84c96b0ce94712556abc4161e2141005"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "ef7f33f6830bf22b1f960d7177c2693a"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "459b5d85551aaab83ca67f4ce043747e"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "84e9348d3836ce1c286d303e2b7cea10"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "0b5dacdf92c404254f91cb631eb57939"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "31a5914fb542db0fb73829eaf0b7b43e"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "8ce5b2529d6584137d597f7544feb0f6"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "da98079f3001d1f8650271d1d593f162"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "0b7dfbf7ceff7bbcaacbb4743e15720e"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "5117d1fd088dda298eb1a1bee78f6b91"
  },
  {
    "url": "tag/index.html",
    "revision": "18ea534708d48468f2988e91505e70b8"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "57160290bb3f1da1d9517155edc05ebc"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "e0d193b25beedf499f1895cc532b3192"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "f8a493d43e8406a6844e07d02a028091"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "e8aa139ddfc87abbe137c42b6d145cdf"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "2d5adb6fa1fd7cb81fb393aff351b443"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "f79921308cb740afa579fa434992c7dc"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "a7200e689adf0582245ddfeec02f2e09"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "6d0f09656f6dd93e73833747d17cf2fd"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "80e1e9ee7773a322f839d640030c79f6"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "a3738e676bc0a41cd358ea8c0a142d15"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "283fc12faee22f4358c183daaf706960"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "8d023cf70c4df1c6f32433c97386c5a7"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "e4a0a7e47b1407253ef1d97d3a127ac1"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "135e09bea6e6219ba445a6b3b12eb142"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "9d48bb55956e79f70efd8456c23d208d"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "68e1a476b6ff8aa993c1bc0fe5e41fbb"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "5e1985b9f2f7fbba44df0904b67ada2b"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "5129ca33266e01fe438e7076d926fac7"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "38c32d9cee347450a745e772b1328824"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "0cf774fe1cde54e4362486c4599507b8"
  },
  {
    "url": "timeline/index.html",
    "revision": "0275a679b11943614db32b314b3e7046"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "8c33a5f0094926a244b12c5d5c73d233"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "af50f8be02fb3f77a844ed217a7b5daf"
  },
  {
    "url": "views/blog/index.html",
    "revision": "0f54d987513625f03313a5c6441ec41d"
  },
  {
    "url": "views/docker/index.html",
    "revision": "ea88d128e9dc16deef12589a8b8b6b59"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "5fef2bfa0028a4b419aad370dcf4bcc2"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "1d8319fd74ba891b90af232c9b75d805"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "3a08e98122b1f0550ed7018d4a9a87db"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "08537a12ebc898b0d0cdc606f0abacf7"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "ab8ecfc5187824b85140e36aa7d00c82"
  },
  {
    "url": "views/idea/index.html",
    "revision": "2352da63f1a5f78d6c5ff5bcbb674c86"
  },
  {
    "url": "views/kubernetes/index.html",
    "revision": "6eef59d2ace5f2a88e929906bb176cce"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "86b0e4fd1dc5b532a777bd14f7571bac"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "3881e4953a33313ba7cf43049046621d"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "cd0aa12a6c4acd11f96711074c2c0e7d"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "e90dd5cdf4d965ee519129089cc07cd0"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "e6dd71c84e210bec07f709b8a3359b96"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "66641b16ae6e550d34ce503852909e9e"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "05069ae8b08934623cb50e461450938c"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "bf2759e1f587c2085c277d00a3b69df5"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "f65b889ce3a024d82a1526bdedc82f6e"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "7a1918f9cc47fd3cdc6d744a26516810"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "f981447a4363d8c7c0e3bcaebea19ede"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "8af1853ef69689803415b2ddb533b447"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "dcabacd0a4326bc5b04d1eae3d0033f0"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "c03f61f5fccac6eb1a775848dd2d8449"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "680fff3675c0a71ed4dfef93fb31d26d"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "1dad38030cfeac5fabf80c51c0522108"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "20e8e035c5225ea0221f200101201e26"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "5e6f2671dc72c333f404a6b339294b7d"
  },
  {
    "url": "views/other/生活.html",
    "revision": "81c7cd25aa27de06bbf3d7428995a41c"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "bbe1bab512e39f29095305e2a7848f54"
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
