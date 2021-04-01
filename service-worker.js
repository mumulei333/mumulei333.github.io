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
    "revision": "fb98ee8c73e915c46612fd8303f9f3a5"
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
    "url": "assets/js/20.ebc734a6.js",
    "revision": "9e80665ec50175d482bf2e27dd0d5b87"
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
    "url": "assets/js/app.b35a0aeb.js",
    "revision": "721b411b9ad548c9c49729d64dc88b9e"
  },
  {
    "url": "assets/js/vendors~flowchart.90f3ba1c.js",
    "revision": "a3ffdae094f0883240c116f6c05dd6a1"
  },
  {
    "url": "categories/index.html",
    "revision": "858dc48a95170f5bf7e165c30bec016b"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "518796379b59c0f848a86231d42fd711"
  },
  {
    "url": "categories/记录/index.html",
    "revision": "f99daefe8470aae3ff313fa3cd1e89bb"
  },
  {
    "url": "categories/记录/page/2/index.html",
    "revision": "6f3a0797b345a2a659e89dd0a3f68abd"
  },
  {
    "url": "categories/记录/page/3/index.html",
    "revision": "92bd39cc5b0c118f9eb470249791fac4"
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
    "revision": "7d0799887ad158d04e3913819b17a648"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "3a096a4cc9582e32d50118347f90d9c7"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "ccdccf0c1e5134b630f27ecaa6c5e324"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "ec7d54d0debd9e660ffa7efb1b347f3c"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "27fd0aab1e63c3fd92cbfd3ccb2e4d4c"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "5920ed1c9cb1de827a497a9837a51897"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "00923b22bf3a8fd3a7d9474390868875"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "174a2ef6cc10124d1c516c18efe5bd8a"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "76a45394f166b8ce127b7a1312297ac1"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "4e85f51735f0138cf84e924b30fd96cf"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "a6908a7f44a02c6b200653d0d9e66a03"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "2a95693d75dbf7ae632c2e8093ca7760"
  },
  {
    "url": "tag/index.html",
    "revision": "1b2315f8e3ef28f6659a78902e905dfd"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "991338a819a72c9722a59686fd318319"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "42f38f307970cfa1f93bad50b52a22be"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "1c953c25b885add496a0ac84d787baf6"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "d4c722a6aab72ad7a49e2f6d196e20eb"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "07e532fe3e45a1fb82777e3b6901b998"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "dc83712def47d55089d7c21ced83c4eb"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "f74e5686d300a2bb8661f873938fa42f"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "8cc609008dae8fb3bcf6b362b7a08bcb"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "5cfa8fc7d1be645e479e21ba8afaa02c"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "53d44c8364591b6c78bef27bc888b655"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "aaa25fa9841184538e24bda48b1d29d6"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "4da75e0406cf6e4886fe436b262d79cb"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "6ace55dda28d116318fb4ae3d6832023"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "fca4b7f0a1ac0821f05f502daef176d9"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "cc8178d21131bda3d4f7bd2432ac92ff"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "84bad010ac4417c7ff537d5401dbbf41"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "7634741d9ca7518424889db2e13df8a8"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "bd341b916b45ec187998758ad84c5ce0"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "7d096d490af1e76e77ad42916648eb95"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "8a73031ce76a1ef5e73b68d1211140d5"
  },
  {
    "url": "timeline/index.html",
    "revision": "e9b41e98dc17b854af090d2a313cb472"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "4bf325afbc17c55a594fb55b652b6751"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "6341883d2a733f2fa2e01fc172cbff06"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "4242ed863512afd00454746f7c861ead"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "53a35d24df365b2403fe1a49b3826399"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "e9b265561fc024306cb7ca605fde2df2"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "6cda1a272544fb6153d0740453b58876"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "74ed33f0c130c34be5852bc21ef7fcb8"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "83238d268e1eaa16a560ab663586c2be"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "f0b4e723930dfb8885051b2837c13221"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "6626186fb1e712f251ed5cf54bcefda3"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "bf2d70eb63f796433723fb8a26c4afff"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "a515cc8e18f34f48603b72284bd5e6ac"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "99340c92e23667a721c98f8a809acd94"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "47cc93ee5a2ba6f443867e5acd0a609d"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "f7f66594059643ca75023a117fbf20b7"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "18aba8149d384ac5bb21c23a3dfe564c"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "9f5ab7995a971a9fabaae09406907d9e"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "fdd36d32ddd8c12948888afe6b64da55"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "d30f74884f0708446e52eea80dab06a2"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "4c03e4ecc92f1e3fbcbea0422dbee1ff"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "56485c89fb5a6f12abbe2018d885ee9a"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "f2af09090405758c13bd4b4db3260374"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "7c83529faaade8abb02de6274ff0208b"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "72e3ba080654c9209e8499aa54cc94f0"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "e2af4cbb2118785f355d4290e91ad9c6"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "2113f870737d0e3f0a0c1f0b38e5196d"
  },
  {
    "url": "views/other/生活.html",
    "revision": "dabe6122414c99c0a8a97e56841ed77f"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "ba6b35f2607f90e381e17086203631f6"
  },
  {
    "url": "views/other/读《微服务设计》笔记.html",
    "revision": "b1ef5814f44b091962f8736e53225e27"
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
