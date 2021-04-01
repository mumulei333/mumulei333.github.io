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
    "revision": "cb0ebfb4b7d5a79beefb143cc95a76af"
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
    "url": "assets/js/20.f68786f1.js",
    "revision": "b748b173c8917346f37ec202bf8e80e4"
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
    "url": "assets/js/app.993e840e.js",
    "revision": "8ac66b73126054bac3c29d5a307ec8c3"
  },
  {
    "url": "assets/js/vendors~flowchart.90f3ba1c.js",
    "revision": "a3ffdae094f0883240c116f6c05dd6a1"
  },
  {
    "url": "categories/index.html",
    "revision": "e216b91ff69db9869be5bf251f2050c7"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "36d6432c589a7163c2f10f730e4da52b"
  },
  {
    "url": "categories/记录/index.html",
    "revision": "f2d152aa5e7fa13175669f176f3ca461"
  },
  {
    "url": "categories/记录/page/2/index.html",
    "revision": "2d4d478780016ecd6c2b8b2f6d44aba8"
  },
  {
    "url": "categories/记录/page/3/index.html",
    "revision": "5d4652382d7e5cde9f0fc555c06e498f"
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
    "revision": "15197f34440fe9c9744745ed2e85ba5d"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "619297b7708de65e43ba5a41ac874996"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "a150cb586f294d607c09155ab5cbc61c"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "8ee35ede7e0e474afd3f52d22c386edc"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "dd6bb3e6d28db4b4757bf3163514b68b"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "f6d4e4ad572ea24dd36f8fc1a6d108f9"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "4e3f75d37e763b7781cd10a69bcf365e"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "414091217305120ec53679bcdbd13609"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "5575cc5e7a8b81d6b3a0f77bd87e6530"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "d4d744545090f3156e4efff8a1b28029"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "a842af783ae30e01a6ea9a065b5e8833"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "3d27b0aaafb37c67a5fed4426583b7e5"
  },
  {
    "url": "tag/index.html",
    "revision": "638ff5ebf21b38a35f9f1d31be298aa2"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "8a92f63051441bab74b6c76686a49224"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "d92c815e7e058e087fe56fd74b0526e8"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "1302b8853af2bec72c177049e3195269"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "f88e529c8987a94f612a5eb9bf4edc16"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "a1f713ed627c8b959660b1021df5a783"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "6eaa232babfa810911455e0f3ae06685"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "103bcf8f42f6d2ab548692887e2329ff"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "f56350cbc970ac115a4e4e5826a94347"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "b7e562efb800c7e73bbde60710f6ca28"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "ade2b9417709b1c2d134e0ec693e2227"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "34ae0d292fcb9b9ccf14e53879be4e08"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "8fc9f5636cf0cbc3026ba9b447e1c166"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "fedb46a0df8a94165aea4536e1443b65"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "92f3cf0ce12cefe7e67c331af2f37d4f"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "1ff75de840ae7b884f7cdff671fb3220"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "575897a76dcd786d92a189d731eeeade"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "22e203af865296c8f83daa1d7dbe1302"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "2aeb34d6a1e3ae9c9f657cce256f8b19"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "812a910c8cebd4f0f88fefa2adeb0a84"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "1829776602f9e890daac6114bdbf1273"
  },
  {
    "url": "timeline/index.html",
    "revision": "47ef86b0b3a51302ca4d39bcdd6f364c"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "eb3d5e84425621a580215306cf1b1c8b"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "cfc4f1577b21b7f8b76b53d5246dc1d5"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "fc4d532fa349ccc34a6cb0fa7798adec"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "034a0bd2fc56995b6418908a8e3dffae"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "765a2cefc8ab1baf97c80f77c844fc26"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "e6539a1497115b792835d0ecfa464ca7"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "7b6f751c00b9081358a860c3e4af59ba"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "3a99cac3d546b3db88851f8812aa7948"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "1a2298efc98cc2883b8ec6f4a1b23c2f"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "cbb5ec1aadc2c21e6a5726748179ce5a"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "9aaba3d9e097a89247de05aba90810c2"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "641f25076599cc75d8e9b5a211587be6"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "aca96fa8d8233a94cc1922b9bc6130c4"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "93c3bec1916c8504fdeb4c5a83f0ee06"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "64d0ae1b4c914f81e474e3d9745e2904"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "d57b885ba074de569f55fbd5513a2ad7"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "1e0c5c1852579552658496cab0e763a5"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "0709674e38198a72c3f4e5b58b36a11d"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "b001ebedfc2ca82c70666a02c7cbf4c1"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "2696d5ad90c0632f6e3e2a87be2d7c65"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "c7c5acc657b1d134853215955db894d8"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "d231700fb94ee5cfef297187f5e9c80c"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "7200f8cd99106f234cc9531be846b297"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "78acebf5532276cb5f2c7f0ad460db8b"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "ac4d23fce71787322e564751aa34b08b"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "104267276964e3172c95150e8b077097"
  },
  {
    "url": "views/other/生活.html",
    "revision": "749f27cd2c5c0ef74cca89e1488f8f49"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "72500ff3a367d218d7df4b5a09c5763a"
  },
  {
    "url": "views/other/读《微服务设计》笔记.html",
    "revision": "1b5298070ada87f611b446ba82622aa4"
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
