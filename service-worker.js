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
    "revision": "622072577ca4fc144ca2f88a0f2ee832"
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
    "url": "assets/js/20.46ca84dd.js",
    "revision": "f822db447b54777257ee662db8837efb"
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
    "url": "assets/js/app.37f2803f.js",
    "revision": "98f142798b0132da2fba4f979919a9ee"
  },
  {
    "url": "assets/js/vendors~flowchart.90f3ba1c.js",
    "revision": "a3ffdae094f0883240c116f6c05dd6a1"
  },
  {
    "url": "categories/index.html",
    "revision": "54c0f20d41c4447b2ab6dff1761a0a45"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "84f9152841ade4461ae1149fa138199f"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "e7e04d54aa6c40efa1a62265a750c889"
  },
  {
    "url": "categories/记录/index.html",
    "revision": "97004cbf9c6bd056236400f8247b6a9e"
  },
  {
    "url": "categories/记录/page/2/index.html",
    "revision": "24840f2c600a36234c2cbe47871c5228"
  },
  {
    "url": "categories/记录/page/3/index.html",
    "revision": "663d3637d75b8aa5ab068c8ea782653e"
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
    "revision": "4dbe755194df9cb09fd674ea69654d47"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "d27bc0f0a8549127bc1855f3cd512b30"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "e9f23a8a9da229d985ef9f14f5152e20"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "ea7b0ef88c2b31cf7bef23ffc8192db1"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "db916d07b87fd916b841281869a3a5aa"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "e9d3ddcb3f54508125274d88713dcbc9"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "69b094f0d72beecfdf2df1d599f849b5"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "2e3d19d99ec7f622d0495b66a854ffa4"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "6169a4b3434c59d5fd2b975204e3a64d"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "84ed915ad61db9d0a9c0de669e1b96c7"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "bfc46a077b51352856521deaae82c48d"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "f73c95416245b84715f33d935996a903"
  },
  {
    "url": "tag/index.html",
    "revision": "ebe2710fa3e3cdf40847717d80a7d27b"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "c615f5c75ecb34046562d67be84134a8"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "e292fd24795f0899c3dea76bc905e985"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "812c825d008b1969e0e5351881a31a1f"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "fd5aba293bb2b9a1444fef4aac79943f"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "24f6bb896c0ee9fcd8923a91452ed8b2"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "fc9c4375ead241c44d073a1f4f84550a"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "22727b3fad438ea50975e0ed55cbc5d0"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "ec50f6f44f99182c905b25f2e6939eee"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "4fbfc83997dc14f1cee5a8b64607e8e6"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "600ae4f39f8fd8d58d32a4c073212041"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "0bf4b5a12ecab28044040d4752a7595e"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "483a1abd3d5447c9dc28ad29c67dbe56"
  },
  {
    "url": "tag/书籍/index.html",
    "revision": "50456619d61332cee650148247ca8fe8"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "639ce425f35f3c12c82825cc28fd43a4"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "c4142e62261bd22f4da7e78be3c72fe9"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "38ca1622ed50df7802d6bbc4a5f0b1c2"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "6c3273fdf5bb298a12c8bd2c5f486a93"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "6d434c48dd41d72938d0f2da3b2da758"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "b9f06d07b368dca3d01b4ba77d86ad5b"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "c34d89a5c630d8d55159009751f76fea"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "13521d3d593f46c5127935ee4a56c76d"
  },
  {
    "url": "timeline/index.html",
    "revision": "cd29ad14ddb14751f197b1ab4cc7703d"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "837d3c67887bb7f232b96664b422e79a"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "cc1362d589ecf912b251b7f114d78402"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "f61d10617c89c56ea775ab201b1356aa"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "1501fc2c9db43819f482a8e56d67ed71"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "ed35c772a6a857ded5cb69602e908551"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "202bf67d298102e643146a5999e6cbfb"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "adc28a8dfe430de27fa1d235d07eab5b"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "dc9fe9e66c708c8e672dbd6c535bf532"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "ce9ed503742c8efcdad69ffbd27e726d"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "452d40d3937c347adb92803aca64e51c"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "02d3ce5f68dd52eb6913edefa964ff0a"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "ce855c55ab861bedce12212c67912b84"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "7bc64b121306842237fe20b8cbacee19"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "67b9202c6de8a4300fbd687270c1361c"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "37ab6b0730f64f4efef99140080c43e6"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "378324028d9cab86a2e53f416e2c6f36"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "162ad31cd4eed69f2d9a41523e50899a"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "d94771e22ce3a607fbecd53eda4581f5"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "7aadd6b920aa7fa153a1cec5cade2e99"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "2ad6db8d05c62d2430a6103965cd9742"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "5e0fb4f797939e65976c91ea4f552c73"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "ef4db73b0973b7f9feab7cb87d5a16d4"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "0ed94558379cdc6fce4709bb18078dd1"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "7a0e5252f0542015d006fb8985864c19"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "840587b0832bee3f35e817d05b9729d9"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "f8e097fb80ba9095b41c50b5ff3d7676"
  },
  {
    "url": "views/other/生活.html",
    "revision": "70c6ad4b600966abc1c67cd5af44c29b"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "55a0b47e340db2f503278f50fda26f64"
  },
  {
    "url": "views/other/读《微服务设计》笔记.html",
    "revision": "aaa6d23d5e75436c482e64217c93cb09"
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
