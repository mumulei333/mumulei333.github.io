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
    "revision": "f970b39fed6c2f28c26b5bb6e8a41384"
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
    "url": "assets/js/20.00380ee1.js",
    "revision": "eb7b561cda9d93bb109d50a71aef2e62"
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
    "url": "assets/js/app.d03889f4.js",
    "revision": "7cf5c4fa0f84502c21ce14d21dc3782a"
  },
  {
    "url": "assets/js/vendors~flowchart.90f3ba1c.js",
    "revision": "a3ffdae094f0883240c116f6c05dd6a1"
  },
  {
    "url": "categories/index.html",
    "revision": "a0fc157c77dadb1958ec922b1dcc2a38"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "6b5f2187af2440f8faea19d01d40e317"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "83a7e91c86b3e7b145e21f109cc316ed"
  },
  {
    "url": "categories/记录/index.html",
    "revision": "5bd359ce0ffb0304a135536cede7f634"
  },
  {
    "url": "categories/记录/page/2/index.html",
    "revision": "7c3685d6100052488e21203c2b83b32a"
  },
  {
    "url": "categories/记录/page/3/index.html",
    "revision": "8d0aa74a82d320f775c78e00f3bf692b"
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
    "revision": "1f684d2557642ab80b68805e1ae06d46"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "f270c98b68fa3d96da0dd475bc0a2cb8"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "17b43b3f6b4328f1359f084ccd7c74c9"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "8cfe09dc38af5d303d2baa7f9b11f019"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "8041c2bd1d614b0f03bd195ef6023136"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "a1d49facf5a6082e3b13b12df84fa470"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "14230df1fab7d5443958ca148f378526"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "e1beee8419577d86bd1fc9b46bb6b83d"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "2f5bf42146124ec952694b6991654020"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "90087b1729191a7ab20cde7113024e8e"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "a97ae34e957cfc7455d19b7965dda76f"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "1af00f814bbe46c6038e2e6f11aec980"
  },
  {
    "url": "tag/index.html",
    "revision": "053f1b0fe5d01a2a3e54d2c6038b5a9f"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "63ab9ed2d0c710135c456c5878f30be8"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "dd4dc76479836361af4246226f8cbd63"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "95c8f4c35b859406fe6285357982ecdc"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "8d910aa9994a4cb11be550c27de72d7b"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "65f73adcc16c1a74f11f5370441b81ed"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "e8065860ba7df8dde479c5e9c69c841d"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "01190d2583f53b4e5390bfba079384c3"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "64a3d2eef9a140fca8f15bdced584b01"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "d51dabe7568d55c7938ce632f04452db"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "f24fbe6404361d6ef7f2b470344ac509"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "f56178cae9593ab6e55a9f900958d7fc"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "40a9d6b3ee533f1dea01e37462c8f1a1"
  },
  {
    "url": "tag/书籍/index.html",
    "revision": "64cdeccd319e563a78fbe5a8d215a8d1"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "bd45da6fa50854b911ad3da58a140b02"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "c4ea30106afe58f467392eb102b4f170"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "583cb9f5f7f50dfa2391f5b622c25f20"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "cf119a75df5200fd7f9eba5ddab51e8f"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "808c00fb28a0409498c76ef8fb6e24c9"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "44c91c8fbb5b995a080cef2c05225aa1"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "4f73757b9e3184229d3e4ba00a6f577b"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "df1a23e50be1b2a54c2236f8b15944f9"
  },
  {
    "url": "timeline/index.html",
    "revision": "418c8a96ad501d4a85d9770f962c6bb0"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "5846ea94c3366929cff34a8b98be9151"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "d141f055576a9dadc8dfc7e4475530c6"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "7347d34a0dace875806b0b4d236c01d3"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "0b08ad1c74962e945756e00427c51ec4"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "b46423b78971338847b0cab18660b4d9"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "661cb1d7a530ee13314a59e2bf0515f4"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "6f26424ee2d8c6bf91e3d61846d12ac2"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "fb017f06a5f3c9a73dfecbf77f75a2da"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "059d737737b37b7f1781d38c87ed8ac8"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "8d57acb1ed76c52287bb87c0b9fe630f"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "6cc2fcd30c0e5612ee644607d81c1c6c"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "7a9062a4e5e53a50546c4cd87a3d4ffc"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "7d7390f3bdca945fdcb055640c1eedea"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "5d3e9d3be6e6049b1e3663defd6218ae"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "7932e730cc687de3e5033ac3650e7f60"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "8752ce1e0c6f966e8fa41320ce764616"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "87d9a46964affe36acb1f57ac63608f2"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "79fd0a35afc8346e12e4747204f7eb19"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "eb490c950e0eac3cee365e396dee371e"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "96e8933e9df8fa8ea33c8245f9b458b4"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "ad9ebf089ab6b9fed62a86798d8ef7ad"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "2b139a1190b8b00ceaca7c172cf3bc30"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "ce523c6b6a43d4d26b966d4a281fdbd3"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "4bc8ef8f7718ad7118861539a766ecce"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "7e715d739fb64712d7f73147b6b04a92"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "253e971d5485d0b594bf1bb9ecf0cbb9"
  },
  {
    "url": "views/other/生活.html",
    "revision": "88a84f1880d0e033cdad541dc1448886"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "a2836b1ccf873e18242f7093071ca703"
  },
  {
    "url": "views/other/读《微服务设计》笔记.html",
    "revision": "a29b9d857aa43a1851b52215444efa6f"
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
