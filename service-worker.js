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
    "revision": "bef4cf481afa7663fdb259e689ca4846"
  },
  {
    "url": "assets/css/0.styles.49fddd74.css",
    "revision": "a298a757e426d1556dec1be42c3e8730"
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
    "url": "assets/js/1.6517b766.js",
    "revision": "809f440c6c8814f7164da219d1d7532f"
  },
  {
    "url": "assets/js/10.d8798d55.js",
    "revision": "62fe844a09b9d71a6c56f93dbc9254c7"
  },
  {
    "url": "assets/js/11.2998a129.js",
    "revision": "c38b27be750c811feac4c5b613362dae"
  },
  {
    "url": "assets/js/12.0c8909d9.js",
    "revision": "551b5336216f16ada2f86470b45c7a40"
  },
  {
    "url": "assets/js/13.8126c3fd.js",
    "revision": "6c98821e6ffa85d188fa6eee3dfbcf72"
  },
  {
    "url": "assets/js/14.bed05d73.js",
    "revision": "de8208cfb3d2786a0fc3e88c0b452300"
  },
  {
    "url": "assets/js/15.86fe3101.js",
    "revision": "78a68a50434e1fdbe012d460ec5cb17d"
  },
  {
    "url": "assets/js/16.14b5be66.js",
    "revision": "f3964bb23c71517cc20fc45d847dad93"
  },
  {
    "url": "assets/js/17.8be5d03b.js",
    "revision": "251147e65c2455b4900a3b48ea2d94c7"
  },
  {
    "url": "assets/js/18.f37e0865.js",
    "revision": "bc0000d678413173a7a83b730b79ada8"
  },
  {
    "url": "assets/js/19.ebf639bb.js",
    "revision": "0731212694a1bfce7e332bd0008c4f71"
  },
  {
    "url": "assets/js/2.f0acd661.js",
    "revision": "187f2b0740311a0d8f0362781b01a2fc"
  },
  {
    "url": "assets/js/20.6b80eb2f.js",
    "revision": "cc5c8ef10a2873e75e0cd423060c2ecb"
  },
  {
    "url": "assets/js/21.9aeea838.js",
    "revision": "cb103df0449551395a4e650a28e26a33"
  },
  {
    "url": "assets/js/22.f00a542a.js",
    "revision": "13b6d045dbaea15b5b0a5e1023275847"
  },
  {
    "url": "assets/js/23.0b7eb136.js",
    "revision": "3598abf5a171da0882f59fec2d26bd05"
  },
  {
    "url": "assets/js/24.24ce8c6d.js",
    "revision": "b1b7a6080cfe6d7039cc7945808f1983"
  },
  {
    "url": "assets/js/25.036d6b87.js",
    "revision": "64bf9248e018ad3ae49c8b7eb87ebde9"
  },
  {
    "url": "assets/js/26.b1b720e6.js",
    "revision": "b61a824d33a43e05fe9c44fde48d4ed4"
  },
  {
    "url": "assets/js/27.5be35b96.js",
    "revision": "14e0275e6b81947618cbb4f4b64bc814"
  },
  {
    "url": "assets/js/28.09f968bb.js",
    "revision": "96d444b5a6bf04e6273843c22b51e8fc"
  },
  {
    "url": "assets/js/29.613e1ed7.js",
    "revision": "df6b649c4cde5ba35c0a8483646a6c3f"
  },
  {
    "url": "assets/js/30.635fa8ee.js",
    "revision": "26b7fbea29e42078110d0e90cc905f33"
  },
  {
    "url": "assets/js/31.ea518f27.js",
    "revision": "8523b31afa4073a29290fae07e79f328"
  },
  {
    "url": "assets/js/32.db9ba0ef.js",
    "revision": "a71e3c621ed9de890e86ff688f1fc797"
  },
  {
    "url": "assets/js/33.b03c3473.js",
    "revision": "23db957bbd1c60fab6c2b26b5737e5e5"
  },
  {
    "url": "assets/js/34.60c7333d.js",
    "revision": "f6fab24f6b5ac9f50216a911cc88364e"
  },
  {
    "url": "assets/js/35.c3ab27c2.js",
    "revision": "8704519581fdada68de260f49f4dba85"
  },
  {
    "url": "assets/js/36.0ef56277.js",
    "revision": "e7bb0fd26cf3a9c78a3e20859b97a6b9"
  },
  {
    "url": "assets/js/37.1319a1d2.js",
    "revision": "cfcea1cedc0066e76861cd8a2994a9b1"
  },
  {
    "url": "assets/js/38.4ce5864e.js",
    "revision": "91ad5d42b0c1b7b7c45a32463edeab4d"
  },
  {
    "url": "assets/js/39.68c077cc.js",
    "revision": "1fad0e2bbc47dd9ab461d01cefd63bd1"
  },
  {
    "url": "assets/js/40.6217c445.js",
    "revision": "a98739ec5f9b5b26d27479d912512458"
  },
  {
    "url": "assets/js/41.cafea8e9.js",
    "revision": "a3f388901e897b9e38f34254259257de"
  },
  {
    "url": "assets/js/42.938af53b.js",
    "revision": "5d1c2a858667db1b2b9b9349f855ce84"
  },
  {
    "url": "assets/js/43.1147d297.js",
    "revision": "25f66514d2ee42e93ef4f4d064423d88"
  },
  {
    "url": "assets/js/44.2397fef5.js",
    "revision": "1a817c05ea41b0379232e1d2db7aa705"
  },
  {
    "url": "assets/js/45.30a17b00.js",
    "revision": "8c366edf36fc6dd43da526d8832f1b98"
  },
  {
    "url": "assets/js/46.46351421.js",
    "revision": "54fdd830f08d423c8717fce07cf07cb6"
  },
  {
    "url": "assets/js/47.812ba76b.js",
    "revision": "b77ed6197b04d634149dc32f94661c85"
  },
  {
    "url": "assets/js/48.54217b6c.js",
    "revision": "3d0eb0335575d56eac99d67c0751d6d4"
  },
  {
    "url": "assets/js/49.67fbfec8.js",
    "revision": "e1ae741dc33773ba17a5342456adb07d"
  },
  {
    "url": "assets/js/5.e77cfad7.js",
    "revision": "d829a16132d8afa3acbbb24d5f1f7a2e"
  },
  {
    "url": "assets/js/6.6c23c031.js",
    "revision": "ed94afa68b364466a504a37444548acb"
  },
  {
    "url": "assets/js/7.723dd93a.js",
    "revision": "ce6c8d024fc79483724bbb83366016df"
  },
  {
    "url": "assets/js/8.1ad4072a.js",
    "revision": "84b7ffe90bcbf79cbc4fee8833fe68f8"
  },
  {
    "url": "assets/js/9.7ac405c1.js",
    "revision": "28651c9d70be01a508f0aa5c4580bbc0"
  },
  {
    "url": "assets/js/app.b89830eb.js",
    "revision": "e19c020bfea68fdba674eb980fc49db6"
  },
  {
    "url": "assets/js/vendors~flowchart.90f3ba1c.js",
    "revision": "a3ffdae094f0883240c116f6c05dd6a1"
  },
  {
    "url": "categories/index.html",
    "revision": "5d67b8dbaf5916b2384a0a47c71862ae"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "ebe25e905e6e73d1af530022e4b02d84"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "84446b821a1f0cb6f2dd8f3d1bc7b588"
  },
  {
    "url": "categories/记录/index.html",
    "revision": "c5ef17c0f81d59a16e27ca929476953f"
  },
  {
    "url": "categories/记录/page/2/index.html",
    "revision": "8bda448a01aa065f476441547d4c08a0"
  },
  {
    "url": "categories/记录/page/3/index.html",
    "revision": "92f4d74b5c3a56620f6c0d4974cc3f1f"
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
    "revision": "f05addcf787f32efa15b7b55a1d908d0"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "31ed61228ce3e4df538921921c2664d2"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "ea53b8e79e1dff34024afe13e5144317"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "92b8b21c512a5e3f88b142be636df76e"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "095b1ea4b7ce65bc4ae721035b1f8261"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "1a8911724a31146ff9fbe5d1d8c3e378"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "2eb686cd6ad6ea0fa8a71998cff097b0"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "61cc0af378d642cf12ebb244a2f57d2f"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "ea9f02f6fab6413ab8d0c91a032754bc"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "0e0bf667a0df0a2a4c19195b71c54ae3"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "39fe6c973eb38c916b2509d8b51ba05f"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "ca083635a1e90af4c37cbc101ca8053c"
  },
  {
    "url": "tag/index.html",
    "revision": "25a27efc671b68de7b6b442143e4484d"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "5b1f7d7f1ef07bdd316dadded9e09e44"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "98a43be1c87c22da8c3c9ccf511680de"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "1764ef9019cf316409cf95c3816cc6e1"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "354b7918d4e9d07fb16c09d3e861b585"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "8dd453fbd0315bd5aaac3f4124365a9b"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "503ee8a2a31324d3d2dc2bedf4734b59"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "cecca0be9544c4dffab017c4351f3c0e"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "ee52ccb83de5926c594f1af752491ef3"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "f0c8530aae469a5b21c676042aab3710"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "b2cebffea5f60e40e475ef84e51337cb"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "6221d6573acd941a2ee26c873cac45a9"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "8facb31ce98d3a6f3d2ca656e63269f3"
  },
  {
    "url": "tag/书籍/index.html",
    "revision": "28eab1f9a7a7ee3e73eeb2fb3bd6a13b"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "b0018b1805f9d1a3926617fdee7c8709"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "dc813522d9b6ff7a6d093a82c9ebf44f"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "f407da3635205570f6d1d01e4dc4375c"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "630e0ec7f49884ee6508208590aa8a71"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "76e7eb74a6dca3136ba0cfa442108343"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "27a8219035bdaf9ed953b1b8759da34e"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "813eb9d68f85b07b256f58b13cbd2f34"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "c20724984fecdfb43f20720e2db11385"
  },
  {
    "url": "timeline/index.html",
    "revision": "c40a39fea74c214dea9c7c079de04e59"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "f4082aed935182e821c632478f12e576"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "4128250ecb8821262d50e40db1749525"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "e06614c060802dc1fc1f408b01060671"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "9cbc39164fab6f37a6ce3f21f09de52b"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "54b851706e1aea7f8c10a6b4166a90a9"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "6da88bea16fc496d4300b9407cff2e7a"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "1d0debcaefbb35eae1163f7a77eb7b98"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "e322d9632382465eb01d25a05cc5c25d"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "dffb0f8df4e4055393e01b5741c4036c"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "3ef0e3fff98047d9e9b9487dbbeb4da2"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "3e9cb87dbcc0e832483e0342066ca217"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "9b159cb66d5cc39253d89afab018b130"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "65c8aee9fa00889543a63d7d4cb9f2dd"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "19ae2782c68e2c457b443c772003e3f2"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "f18dba4dd5f578db086e5171fc5c74e6"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "7eb8fff81fa516a6aa6a95daf5199fe5"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "f6452be4f3801b78789a0ab099052502"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "63f2fc43ad4d270148da8112ea7b9bb0"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "b2b9443b6c36d7a6e443d2d77d6dd83b"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "86c8e3fa5b9388d5e8bb0822f0c3b97c"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "b636d4a7d5c615c17e6b1dbd1c2e465b"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "0dcf88fd885f6435751a0b5034dde7a3"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "13a59d4a415d5017d0504d93e1e1a394"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "64a159b8b1396f4fac418b03b034dab6"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "cb7b4df14c197aa979f1dde047210223"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "ec89fe369eae5565c0a149a0a7a386d4"
  },
  {
    "url": "views/other/生活.html",
    "revision": "e9daf83fc3e41c053203b8426cc268a2"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "cb8ae490d4832e193a8d7ec519ca6010"
  },
  {
    "url": "views/other/读《微服务设计》笔记.html",
    "revision": "dffcd7248d630a0d956230059c468d21"
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
