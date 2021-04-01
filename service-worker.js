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
    "revision": "47b748947b60feef63ea74e45b235e6d"
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
    "url": "assets/js/20.fa978570.js",
    "revision": "ffbafb3f3ea4e5be2c10ec913db06912"
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
    "url": "assets/js/app.a0764d51.js",
    "revision": "b94e61a3d470ff8318791b04edede16e"
  },
  {
    "url": "assets/js/vendors~flowchart.90f3ba1c.js",
    "revision": "a3ffdae094f0883240c116f6c05dd6a1"
  },
  {
    "url": "categories/index.html",
    "revision": "35504736049f1c3343db9d676b6e8b87"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "1cc88e57680de99a463cc726a12dbd72"
  },
  {
    "url": "categories/记录/index.html",
    "revision": "b6a923ae47a9fb6d88b09b8b30b62053"
  },
  {
    "url": "categories/记录/page/2/index.html",
    "revision": "679c2b27d824361320d85335a9013690"
  },
  {
    "url": "categories/记录/page/3/index.html",
    "revision": "a8ddc3bc5adcc3228cf4a71af1186a1f"
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
    "revision": "a68c348e73408a499bd1fd6fe57b2fde"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "c9bb1d9811359609039c3e8e653e4355"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "6d0d1a1b39eaef4dda5df14e36e60ce8"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "18a9ebcad773c804f63e15898529c805"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "0bb94e3eecd48c40f6abcc4ed91bafa4"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "e42b69ebf6a509c7b5a825704ced4f71"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "9a61419ecfd783f290a1c6cd3c411f51"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "f46a5a772004f7ad604a41c568ddbaaf"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "f2d044d30ab90798f0c47f910572f5fa"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "56010e4a1674fa43d86ddf851512bc05"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "b74daa0a407648bbf267d1c304f8e78d"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "8986a4bd4c52f8f082363bcf4eb5bb69"
  },
  {
    "url": "tag/index.html",
    "revision": "162ab73bdc89d43706fc3d3fab5a197e"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "030b8b456701c02a6bbce81589e607b5"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "fa87ceb04b3ef3123e8958ac70658e1c"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "73c49d99880aabc0520cc6aada9a16f7"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "83e8f2bd21d5365976589d350a170b28"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "23230ef3629e6b746cb97722ca784d05"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "0b0aa9d00a254edefc784d3208354125"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "1358b8036baef5a4ebca9f5bc956c742"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "b8b7343d3133679a5de55d703c1b83cc"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "5d4e0221c4be87012718b1581ea58e84"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "534ebb9863215d12a5c6e136a4863739"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "06b49535e3d988ae9ac183fbecbe1cc5"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "313fc26bcc2393f85aa136a46d5a2450"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "2c82afe26ab2310f67bdd6f144010166"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "363b680b6129363b92a6a09c1e359211"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "f804d31c91d3c25b42a20f40798d93a0"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "8c3a7bbf2e6114344d59f2db02648d92"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "349660bc12b6224d3fc77425f908ac34"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "fbedc10e3f3ea30ba0aa981ac64eaf73"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "9dd1a35c2be2d817f6f86982d52de616"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "589ab1bd0a968273b48cd309f2c760dd"
  },
  {
    "url": "timeline/index.html",
    "revision": "86f88dd56f8068d44eb2ca4d63ac828f"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "852ec90f1b827c38f809526f1e815713"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "e8d81c9699347679186620108feb4177"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "1a33a9b56471bb9fc52a159444e874cf"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "23ede5eccf2faf6b3f23fe7e95e5098c"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "01ea97eae53552c7d1869b8dbd1a1bb2"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "d89c405da7f19ef231aeca209f307682"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "09bd49c4d96374c290234963108a4cac"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "175f6c553a378be653a2a828fc8b82c8"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "06fbf9adfdf82e21dc9cf01d8addf67f"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "7499945867d4d12012bb31fef2abe617"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "4b027da3c292af414ea92ad2677efa38"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "fb987e6b3dd7e77bdfdc7ca16d20ef79"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "9a8d7e4e71241b87a4af71ba7ca2fabf"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "1ec70689e48e509c0d2483f0def9e9cf"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "0fbabb4dfeb8bec9eae799ef7f03a548"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "b116f738973666aa9a3b015bf6eb3f85"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "15c21767c4f39e2e54943a0e4a818fe0"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "f3b68542d0c7b802c54a82600285fdcd"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "b4dba5870f8eed22fbaec86639dc3443"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "36ae700858d3d93379de13684247b3a8"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "5e8ebcab58a38c84a330d96a73b6028a"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "e9c9e67067a42612f21a636dfacebe18"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "49d26efdefd517e7d2dedd61fc1533f2"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "4ab3491541e1eb672f446d1302c858d4"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "9ace13149c8e64d2deb3960d1141b284"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "5c8afef9b096886a71150fc050b57df7"
  },
  {
    "url": "views/other/生活.html",
    "revision": "8d1fc04889dcf787b0db5999eadfa878"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "baad5141f24ebc8fdcec00212d34ce7c"
  },
  {
    "url": "views/other/读《微服务设计》笔记.html",
    "revision": "d2f0a51992884da63aec5e97f95e53a2"
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
