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
    "revision": "809d80f24654f7a5d87d63038d1f2952"
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
    "url": "assets/js/20.441cfae3.js",
    "revision": "6a5bb3d08f8f482d83444cbfbe59aa48"
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
    "url": "assets/js/app.5a157042.js",
    "revision": "18bf9a2cbf5f17cfc20d23bc7eb5acb8"
  },
  {
    "url": "assets/js/vendors~flowchart.90f3ba1c.js",
    "revision": "a3ffdae094f0883240c116f6c05dd6a1"
  },
  {
    "url": "categories/index.html",
    "revision": "0a8acd1873f9d319666b3d2b96ee6dbf"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "29972e60b569e9aa9f6bebfba565a5b2"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "cc473a338373bd69fd05b985784d6589"
  },
  {
    "url": "categories/记录/index.html",
    "revision": "2a96210aceac358f93253e9e63111931"
  },
  {
    "url": "categories/记录/page/2/index.html",
    "revision": "5cb81e85613341779af7a50ccb00b8ac"
  },
  {
    "url": "categories/记录/page/3/index.html",
    "revision": "8a6fd217824429c188870aebe04e523f"
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
    "revision": "d6b6b039d03db16fd8f8efdc9fd7a272"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "af5e536d9cd915a23f29ba889d4b1ac1"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "8f290deb7ddd4419cd63329fa466ff9a"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "591b5d464a0caecd8bfd1238f664bf24"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "1a3de869e078b23bb1121d8d1e8c82a2"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "398cb7f98d5223320a88ae0f66256954"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "dc316e8415825f0dea5c86f00aa02ebd"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "9ff08f9751dd39c0ccc4117f3a47d643"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "ec7d58f4d7d45e83b5fa9e460e374334"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "27aadc7b156a84de4f7c03760550e38b"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "132f0db325735598b7eaa58a88ee2149"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "b2d46fe7085c3e13a183446ff4dce4e1"
  },
  {
    "url": "tag/index.html",
    "revision": "25a8daac64df2a4510498ad4eddbd06e"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "163bef9616152cf201a24ff7fefcdc63"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "b26dfb5c614156cf8e1433638f119545"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "ad759534b4e922ffc3c663e0a134609e"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "d6726c4fb13f3fed892157724c9060b7"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "aca855560c92d8a4c9bca0fcda8b6cb8"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "1a8eb10823c15e8562e9ef5587679764"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "e49dcf79153ba397c84bce107e542ab2"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "b4105c0f133491acedc4a4256a8f00fe"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "4e54f8b6ca5222efa179d8f86635ff41"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "506219942a2525d6cbc09b553a8ae820"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "c887899164f11c16b52484513d867b6e"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "76e25856664bfe8e9a9126f00a63f1f9"
  },
  {
    "url": "tag/书籍/index.html",
    "revision": "84724db441f77b2ec1a1e9d385aa4275"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "9f51224f454a101527c65d07e6facaa6"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "26367215e2c2a73263ce0193162a8603"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "e5339d71d844a7afc237e4c1006e2c0a"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "fec5b51537481e7a1d54aad5ef8314d5"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "19de7f4deff61e7a92e4b1e1fcd313e6"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "77f6305c337f1cbffdca58efccbce6b0"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "8781e03bc695a866649a58a6204177fd"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "7d083617e766483d95b35913bc446ee2"
  },
  {
    "url": "timeline/index.html",
    "revision": "190fb2358624a44caf3ee5daeb8a3706"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "18718b5a374f1da09759fc038ac6b96a"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "32d59fa0dcdae918d593f2b10bcce0fd"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "033a9980c96fcb1e0120b3d869713461"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "d1bb9f50126d11f783b10a07aee756d6"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "f1ce65aed4fe1833810be464c31db3fb"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "c42c7b572670ddefb60e9319da7e04cf"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "517de763a046d93f1660288743aa2764"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "3e8fac13f07286fb2e85d45ec97fdaf3"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "0a6d7816b665c03cfda86b868221b218"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "95d6ee30cdcd509b4566476757d52f2c"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "dc6e88aec6cb6b2289e45d243e95b047"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "ccc0b7d9625fcbae3537b25c8c6faa7a"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "e167ab9f682f3f3b10d165ab1887d809"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "84802088298ece8672d062d950f1167e"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "d63f781d69d2a6f88d8f3f61a62fae78"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "0a9874b184aeeccebf8d0edbe133e004"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "fd77a29098d68a33a98685c1378e6932"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "e8cedd8694f788f8bf53608912490f04"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "3a569a68563a9ee84701e74f0831cba8"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "55489672523228947d4f2c6efd063b64"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "af068ec28d73cb116ee62576aeb0b164"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "cbd8e0b6639c28959b58b06302acd28b"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "011034e5dcabb56e0dbb15491d57b43d"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "50e3794971f7e86a10aa308012a59ffc"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "03de30fd663f08847a4af3aa5e1d84e5"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "575f6d1de126f7a29eee3f30af44e7bc"
  },
  {
    "url": "views/other/生活.html",
    "revision": "a9ad01865714840f302b7c2a9e2b5dcc"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "0eb12656939ca42314791d3ab09fca7f"
  },
  {
    "url": "views/other/读《微服务设计》笔记.html",
    "revision": "fd9cfb25047f9367c4f59aba0b63fb1a"
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
