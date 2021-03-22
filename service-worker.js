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
    "revision": "c91a8b7e29039b0ce94accc4982d4246"
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
    "url": "assets/js/1.4e3ec021.js",
    "revision": "3dc34dc8e98dd55e29c36e75ff8c5427"
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
    "url": "assets/js/13.234deb56.js",
    "revision": "5df3c95300e794884db2140e58363162"
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
    "url": "assets/js/18.7a333cf0.js",
    "revision": "b81a4cdedb548c4254593f69eedc14fe"
  },
  {
    "url": "assets/js/19.01411f77.js",
    "revision": "1077f7552a2f87687fadc35a5d3c3d2a"
  },
  {
    "url": "assets/js/2.08d2ff19.js",
    "revision": "a0dc805894e9b849741ecd9c94d7c8f9"
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
    "url": "assets/js/35.c4b9cd67.js",
    "revision": "0b10ec032af8946fc4563465f7c4c568"
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
    "url": "assets/js/5.bdec8cc7.js",
    "revision": "f824f310d4d920c28078410a205241d8"
  },
  {
    "url": "assets/js/6.237df332.js",
    "revision": "fbfe2199404374aa407f003dc0f0f39e"
  },
  {
    "url": "assets/js/7.49bb5cea.js",
    "revision": "899f71a95f4a4511a51d121d834791c8"
  },
  {
    "url": "assets/js/8.a4052c41.js",
    "revision": "1796acc8bbb6cb90fd3547b7415a1b79"
  },
  {
    "url": "assets/js/9.cc7517ef.js",
    "revision": "87be2b8f7fb112be0d2a0c3a4dcb38bb"
  },
  {
    "url": "assets/js/app.b1d192b4.js",
    "revision": "159504a60ab8650fd4e9d5c43a8257d8"
  },
  {
    "url": "assets/js/vendors~flowchart.6d02df79.js",
    "revision": "415d518ed5c84bda42d46141628b3e3b"
  },
  {
    "url": "categories/index.html",
    "revision": "88abbfaebef03ac5f29997b8075774b1"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "513ebb307d1e9318baffacb2d43f0510"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "bc3eee68c3c10eae07d7a467b1306dc9"
  },
  {
    "url": "categories/学习/page/3/index.html",
    "revision": "03eaf0f5cea88480c9958063b0f71dfc"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "31e2f0a81f9d4b12496bcdcabcf601a2"
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
    "revision": "24b8d73c5c06cfef72927e0549ec1a96"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "86fdaf9393f76c310d5bcdc3f798453a"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "23c6b72921fb2f6ba108e5c1cdea7dd8"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "963690fdd633938c294dfcf21c0cae82"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "a665e4547644aca9f38e2b094af38a4c"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "eab4989c2973dfec397fc7ced98561a6"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "25ee1fa5e06995893cf7863547498767"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "2700450a4541c8239af68d48e9ff4697"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "e025fd71ffee06a36e7c027c88fa08a8"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "486ba81c3227dc69ea540aca89934120"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "9af57df3882420fb0eaaa642ef57beeb"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "97dde648df86b4ed3709de1dd6240380"
  },
  {
    "url": "tag/index.html",
    "revision": "5296a5586fbc91a0146d865652c2b5bd"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "451c033d95ca15b8356d6c1231fb6c89"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "aa30198ac511d7c92f8985db84f670fe"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "e933de5a4fed2c59d56143517e8e40ee"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "cfb5be932dd91c3a5bf83029b44fc15e"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "62a41fba8b7dedccada30b3eab671ea2"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "1f378b0995ceec1b43bd24e144d2aa26"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "1029dc7956169777719bc1c0ba3c22fd"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "0eac90e359882a1941196194d7fe61c4"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "354fc9fdaaca49eae9d7e3ecbb178250"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "0d10c8ab980bbf223336ec4ad7fd4efd"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "1839f07f9667fba05dca09c955ec6037"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "20656be672b17b12813e1406d16ad2ce"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "3243d2b014ec901eeea9d72fefcbca83"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "10a2092f71243ee24d0a38e09183f8a7"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "39dccc641ded7e48b466e62192cf090b"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "a41ee778b678ac1f551246b5d08e668f"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "9fa1f3608e96423c5504936d537c8aa8"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "9a2a64ebe08bd0197151dc8c40be35d2"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "9753745b4633f58005cc2c56e41663b3"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "8f56247323adc0caa4a9777544e7a18a"
  },
  {
    "url": "timeline/index.html",
    "revision": "72d0bcf9a5a5a8146d17c457d7dbf802"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "4293a8a9dbd5e1509691932efd0b35c1"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "dafab3528fb8697fcebc78ade94dde81"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "f6e3fabd1a8b35f3813942b1a02fa31b"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "8648098b5d4e1ae19bce8bd2295de4a3"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "56afee19fcd9636b7b237ec603405ef0"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "c70f8d9366e35f40cae1c966ba94978e"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "4db571843a820ed5686651a415c5ad74"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "e2b101f6b9f1cc53f3b603367d02ab2b"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "a17e4e57a4cb07199d3057a0876517ca"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "9425350c4e315bee53f67703a6b9d5c3"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "b68bcc06ee053c5398b089aa2150a031"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "4a439fb41786672fddde1203b0df4931"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "5677d497e976cb514806e3f25fe2d254"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "fca17772cde39dc5de1bf0b880b2c686"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "aa065f72e9fe1ff635736d2135aeb3ce"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "877bf6ad634163d2865033f8cb6b4163"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "09f4009e24c713ad758f6e9e6f6b615c"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "5ce3c670499b8d89b63881d1069377c2"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "0e3cb1872f4486ab0dd37c5463ad3d29"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "70ee5b4d448caef6482f74b180b166e0"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "7149f1d7578816c93e7ee4e855c927a4"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "8aab7e392ccfe2c7ad5f54e1d358fb36"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "462891e97619d3fe9ca26d4c0950b8b3"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "320f0939dc7b69f6dd93d8e0418441d4"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "b911ead4afa4e7fe74968be1d4f1a713"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "36fa9fb7f08a38a2a3a5012fead20f50"
  },
  {
    "url": "views/other/生活.html",
    "revision": "2684ac2ae1e03ce4a61fb50cf367f24b"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "6dca8c63494c2996e0a756d0070932c3"
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
