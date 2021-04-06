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
    "revision": "df19c0f514ae82f7beb5c6f7a7656263"
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
    "url": "assets/js/10.142a35cd.js",
    "revision": "9a924da615e28471de9ab061a16b2a15"
  },
  {
    "url": "assets/js/11.461f5181.js",
    "revision": "f9f322649eb2ed216764821c5064d8a9"
  },
  {
    "url": "assets/js/12.88afa004.js",
    "revision": "83b03fd02cf7a60366cbda336b32e30c"
  },
  {
    "url": "assets/js/13.edad0e67.js",
    "revision": "03280f93322aa13654244e7a1db378ae"
  },
  {
    "url": "assets/js/14.896e515f.js",
    "revision": "b4bdd6b69d51e6a3e5e96e35fd64b791"
  },
  {
    "url": "assets/js/15.47bf59e0.js",
    "revision": "9601fce2f334ad09dc589f4b50d0d6a6"
  },
  {
    "url": "assets/js/16.eb2f7120.js",
    "revision": "6eb62a4971ebc6007999b66771eeb055"
  },
  {
    "url": "assets/js/17.0bfd80ab.js",
    "revision": "d5bccea11f0617619c7e53758d53af71"
  },
  {
    "url": "assets/js/18.ead66f75.js",
    "revision": "6d923d58f56760c0e4a1a8185be01224"
  },
  {
    "url": "assets/js/19.01411f77.js",
    "revision": "1077f7552a2f87687fadc35a5d3c3d2a"
  },
  {
    "url": "assets/js/2.59f85d1c.js",
    "revision": "0cc0d7e9539658f44ae6edc7285863d1"
  },
  {
    "url": "assets/js/20.0220b572.js",
    "revision": "b1278d2039ba75705077550004fc01cd"
  },
  {
    "url": "assets/js/21.23e6b4dc.js",
    "revision": "55be2a37a109300d576cd0695dedf35b"
  },
  {
    "url": "assets/js/22.b902ae13.js",
    "revision": "0049fd7855ea3937530f5144998629a0"
  },
  {
    "url": "assets/js/23.9db87742.js",
    "revision": "2bb0027043ebb0ec646f7165c2c9ddff"
  },
  {
    "url": "assets/js/24.debc7cb5.js",
    "revision": "cc0560ba59b091b5ac8c51e923cbd23c"
  },
  {
    "url": "assets/js/25.3ce37618.js",
    "revision": "8ff5d591f93d6d9ec3a4d48a7e81a8de"
  },
  {
    "url": "assets/js/26.0dba3ba1.js",
    "revision": "c5c1820b95353e37d065742e3977f6d1"
  },
  {
    "url": "assets/js/27.a8120760.js",
    "revision": "98cbd679abff89c6397b780b7149661e"
  },
  {
    "url": "assets/js/28.6a6464fb.js",
    "revision": "5a85a6343ab99bf0c32cc560d8b3719a"
  },
  {
    "url": "assets/js/29.9afc7239.js",
    "revision": "30315f38d100b7155625f2a68447cb8e"
  },
  {
    "url": "assets/js/30.b18563a4.js",
    "revision": "5a285289bc385ac5b85a4ab96e78aa6b"
  },
  {
    "url": "assets/js/31.a1acc490.js",
    "revision": "f5b214f48cb1ac61c13c541cc270eba7"
  },
  {
    "url": "assets/js/32.bd39c6b3.js",
    "revision": "eb11230d8014f7d1a3bd463d8bf54606"
  },
  {
    "url": "assets/js/33.506a6b47.js",
    "revision": "8b7e54f199edcd05e02036db582bb86d"
  },
  {
    "url": "assets/js/34.afc98a7f.js",
    "revision": "44158e546c1d7252b9d28e3fd72c91ae"
  },
  {
    "url": "assets/js/35.87c81a1a.js",
    "revision": "04305082f65a342534f484c0d4bf9099"
  },
  {
    "url": "assets/js/36.6c7f021b.js",
    "revision": "0c681f4df3ff87f5256168bd35657699"
  },
  {
    "url": "assets/js/37.6ef3f5be.js",
    "revision": "9c7e6485f7d559a15af626c2ebdc7b90"
  },
  {
    "url": "assets/js/38.b1774af6.js",
    "revision": "9b808435ebb0a9e92ac5cf0ec92a0520"
  },
  {
    "url": "assets/js/39.2b085c8f.js",
    "revision": "2e1614c3d81f99be1f7bf53ac2421335"
  },
  {
    "url": "assets/js/40.07b1b535.js",
    "revision": "d4de719818cca22faf671591e55a9d31"
  },
  {
    "url": "assets/js/41.e10d0ff9.js",
    "revision": "3e712c1dd5468138a8c3a27cc4565072"
  },
  {
    "url": "assets/js/42.999ad94e.js",
    "revision": "e67b8340fc208903ecc280db9eb22d13"
  },
  {
    "url": "assets/js/43.0f712f62.js",
    "revision": "369a5fd3296dbc5e39773b01e9ddc3d0"
  },
  {
    "url": "assets/js/44.4a0e5f4c.js",
    "revision": "7bfd0fccf5af38b9a62765541d7c75d4"
  },
  {
    "url": "assets/js/45.2dcb9bcc.js",
    "revision": "b8954eedeb054a5fb1352b439ab191c4"
  },
  {
    "url": "assets/js/46.5a362113.js",
    "revision": "2ac8930e5607de4ad5b2935e65eaa2ae"
  },
  {
    "url": "assets/js/47.07d5ff58.js",
    "revision": "7fe7d8e7e4493bd895c5f1d59ff272c9"
  },
  {
    "url": "assets/js/48.793c8f0c.js",
    "revision": "748595e632c46e6ddfba11dcf8124596"
  },
  {
    "url": "assets/js/49.46de3aa6.js",
    "revision": "6248ed5cce3eb2803cdf348c369d8253"
  },
  {
    "url": "assets/js/5.e5cb2436.js",
    "revision": "f824f310d4d920c28078410a205241d8"
  },
  {
    "url": "assets/js/6.775c83e4.js",
    "revision": "fbfe2199404374aa407f003dc0f0f39e"
  },
  {
    "url": "assets/js/7.be2df794.js",
    "revision": "899f71a95f4a4511a51d121d834791c8"
  },
  {
    "url": "assets/js/8.a4052c41.js",
    "revision": "1796acc8bbb6cb90fd3547b7415a1b79"
  },
  {
    "url": "assets/js/9.7ec983cb.js",
    "revision": "87be2b8f7fb112be0d2a0c3a4dcb38bb"
  },
  {
    "url": "assets/js/app.88203fd7.js",
    "revision": "9d15f8dac7f4e6ae8ca3fc003276e49c"
  },
  {
    "url": "assets/js/vendors~flowchart.6d02df79.js",
    "revision": "415d518ed5c84bda42d46141628b3e3b"
  },
  {
    "url": "categories/index.html",
    "revision": "6a6105def2f2642289eeb9e8a3839f62"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "47907fc7905cbf89a88c32e50b5f8b1a"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "a85bb295cfbb87b46e07635e746d1e07"
  },
  {
    "url": "categories/记录/index.html",
    "revision": "ee36638a05615d103964b3f22979899c"
  },
  {
    "url": "categories/记录/page/2/index.html",
    "revision": "75cb03a770c7f96acedd0d97e21a485b"
  },
  {
    "url": "categories/记录/page/3/index.html",
    "revision": "e93fa6fab89caf63234497856f9b8183"
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
    "revision": "de18727e86e9eaa3bca6d075694ed23c"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "b284a292a35c4aea659ee0e3a047a0d0"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "3a21fead45c82ba03b46e9d040c137b2"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "43039e2beb5a7f0b6f72bf7330bb206c"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "637863213f5e13f7789af2eabdd51607"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "02cb8d870277960d7f7056b8d903786a"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "be71e3b3136d6b18112707694cb80ba4"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "b711cd775c643da9f0b9b87c68d5a22e"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "1b5ae37958d8af364d6764478f9a4021"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "0ca0d6b8786974eb9be36fbae15be5f8"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "188184b33f4dd53e2ef0a19153084037"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "df46c350d7df31728f7961653d6fa34d"
  },
  {
    "url": "tag/index.html",
    "revision": "fdcc71cf7ef43486199365213771ab47"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "2ebb032900c7efc3cc41064aa162b5af"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "4efed81dfd66ec7cbb14385ae09287be"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "319d0de28f1abb6cccb35a13ea1c416c"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "37441d8a40a1c38e1379429dc45e04a8"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "b531f7dd1309cdae97898d5d835d13c1"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "0844b92b95fd13f9ec0d50b126c70a74"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "1654dac7380bc899988f11d913a697e4"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "7b88e0c8d9affd82621e63e99ef728e4"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "3a71241d868cd7313c2eadb58c5dfe89"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "bcec6ef2653826eeb8b9a9e0e6f12f9d"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "5c2eeef0b972cf2e47a154e059a696cc"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "34f253af5e9a602b316586a62cdb65a0"
  },
  {
    "url": "tag/书籍/index.html",
    "revision": "3d602c0e31dc7af7e2c87b0ec023af09"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "ac361d1247469a16742d78f7ab5ce8b7"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "43f9679195a9115d456897913d61c5f3"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "080d36e61c3e15e0571d48434bd3fac4"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "abd323fdd09990aef8b8547bdcfb28ec"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "24cc7c1df754ededb4fc00a8ff16fbc3"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "6f37a288a60e83eee766c018466901e2"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "a3b56cf1ec3d92caeeb9ada5f140cb2e"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "eb6e8ac7e99370d1bd466033554424db"
  },
  {
    "url": "timeline/index.html",
    "revision": "53558c945ea575f8996ddc9074e04e6c"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "31d0403696a308d898982c2af72b88da"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "f1e987ff46047c0694dc83e879643bc5"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "78fc1eb88328699e40703695742ae3e3"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "26614b1bc17115a3caa44402d1746e8b"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "38a66b343ec2c8cb1edb3815c3e07c9b"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "1187d51f11994b1f276059dd44b1ce0d"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "43258e4a38f39b1375bcaeb9dd792c1d"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "4908bf3f61f0e6364c5f3ab6e7458de2"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "980e031bf3d53461c658a479a3bfea88"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "49ed73bb74fec14de678dffefec3d8f8"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "43b6b1dc49c03892dbe0afc0d8070c2e"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "7846ec8d203ea229936ac3f1b426e373"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "4439142ab1a04180df16d07a68302b7e"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "444cd3c9a07b79ffb4b8f47386bf8e5b"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "c4069ed02aef76f83698df368dca71e0"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "a7f1a1a18d76260c71348bc65ade2ad4"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "058c581cec622cce5c845918a3157df2"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "11c0ab94bb336c18319cf35426400d19"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "d0bb18caf140a47b8e5fe097f1d7af56"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "579e62f18b75b3770e47879131a2ee01"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "c3ac349c18a21ad7b905fcd3b363e4c8"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "02e4da94efc8f7cddd507e93911dfa60"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "fedb8f9d4633d85bd7ca60929a99e0fd"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "a67bc6f576ff1cfac68f293fc892cece"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "11a3420976c13cd562c0eeb8dc4e448a"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "4c7537d686f74cd63539c96344b8d196"
  },
  {
    "url": "views/other/生活.html",
    "revision": "43a9f445d419a04ddba2cebbd7e9d081"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "f7ae8c6967fce016546c08210719c64a"
  },
  {
    "url": "views/other/读《微服务设计》笔记.html",
    "revision": "870dc1d96e32f58fb49316c664502169"
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
