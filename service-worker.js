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
    "revision": "e26074a477049250985e681506f04724"
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
    "url": "assets/js/app.bff943bd.js",
    "revision": "f94055b62cf77d03488e160f2587c15d"
  },
  {
    "url": "assets/js/vendors~flowchart.90f3ba1c.js",
    "revision": "a3ffdae094f0883240c116f6c05dd6a1"
  },
  {
    "url": "categories/index.html",
    "revision": "23288d326201600a5bd26a6119825275"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "11bea00767ff3ce0739100b00e65c3ef"
  },
  {
    "url": "categories/记录/index.html",
    "revision": "7570699b9d6a9b527f728c7d60a5e6b5"
  },
  {
    "url": "categories/记录/page/2/index.html",
    "revision": "97d54c90a267b81eabf226b163047fc6"
  },
  {
    "url": "categories/记录/page/3/index.html",
    "revision": "5373f6c506c610dd41ec68c966d30067"
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
    "revision": "005b697dfc51702ae456b254741f4113"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "3a79ec71b6a5325bda95703437393747"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "34c7f0cd23f4c3864a5a0ae2083886d5"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "8262a7160b69d20b78581b599f2d3c01"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "fab0a94be267a034ee0260af2b93fb05"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "95af0e92a96e3e479a4bff843abfc480"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "00210b7e8f353903fb76587aff9fe7ac"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "11230c85b32c4214729c71e7a4abc6dd"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "ff09421024e6e9eb1a7ac3e3ad3a20dd"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "0a25210e304861c9b14abe36f6b4924f"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "5870e42d9c476eff4411da0c5cfcee7c"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "a0d0619cfa4ffe479aa5df3ad2ae702b"
  },
  {
    "url": "tag/index.html",
    "revision": "ffce9bf9934314a2855f166bb4bc38e3"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "b29187722a5beaf8806c0da85587838b"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "aefee2b40441ce2904b5b8b1665e2c41"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "ed7a2574d25e76ea608889c01148ad7a"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "37d3557c0c6f0caa9f35fafd9ebfd058"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "3aeeea9c48d3060f9ca2af8862d27a21"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "60e94e416432535b7fd2110cc2eb95a1"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "7cef2f80c457f0b4402efd1197bc7c80"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "aaa75a943d6323d794ec9b5171d7c3af"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "162a678f6e5e8edb17ea5406e23c804a"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "618b2ca93f71dd8c4079d1b767d4b87f"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "0f5af867ec30f96c32817674d7218f7b"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "ec80f175086acd5864fb230acc632418"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "7456f9f6470a78eac7c49f1da9a56da3"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "fb0cfa52d39c8068d70e55b9c166154c"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "062f0aea710944590b1a3062f3c0ac79"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "ba55c056671b30d917527cad66dd468c"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "e66087b13aa0a4f50b14d14dfaf96845"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "15cffe43bbfcd370b308a5a832814086"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "20368a46ae8f7977947c43c0a100ab13"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "3eb8a751e676c56b6666c6797a4f93c5"
  },
  {
    "url": "timeline/index.html",
    "revision": "090c2d85ceaebfe9a1a20b81d8ff34ca"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "743073c2e95cb0bce681adf4a2dcca51"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "fa2ccb3c2f57c2a9d7ed510d271e83e5"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "c6bf35205b237a21d28b3fd3734482a2"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "c40c47f01d7b300c25efbfe301e8842b"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "5d6517aa47012f77e0dc8af71ef0d917"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "211d45fae01ac177eae2e098c0ac8a01"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "ff0ffdc75452df7598685d6f6f0f433b"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "ca6a97678754d6e53e839608c00456c7"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "39c605cf0d4afd454a1d1da7774986a6"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "74c23f3ecc99fbbfad09b5f0556d1c45"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "e624dc09f1147e3a7a41a03c709bad16"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "15473bbc424fd1a911ec9e293d4f25ef"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "794fa485b6714be19020f69f05677a19"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "5ad5afbbb067748437e460cbb91838f5"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "f3792c92993929273bd5b8dcde9c28eb"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "46355f37b0804ab3afeba171e49ae533"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "780f019a61412e041c198979a7cf65aa"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "f84619a389c99db5085ff5012f206f85"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "a31b1c4d19179dc1ac1375320de54c53"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "16c3fc39450c7b7e164d72b926398ae0"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "021a2ce6e5da56eae84a8e0fc1937f2d"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "668c3826f2ee2bebc350d2e1f41da3bf"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "2d695b41394d63dedeec7272976efc45"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "843052a01cafd82900e505e7dbddd0e1"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "b05895b33e17d61268cc2c63fc12d2ae"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "ab5ad2e69a9c913a6739c6302b1785c3"
  },
  {
    "url": "views/other/生活.html",
    "revision": "a5ff6870f301e8b2ce98044539dc2988"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "44441e659a2d31ecc4be6c4481edf501"
  },
  {
    "url": "views/other/读《微服务设计》笔记.html",
    "revision": "f6b28ea3007317f9b53a7145736186f1"
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
