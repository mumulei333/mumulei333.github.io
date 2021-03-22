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
    "revision": "68b867b973972ef4e5ca5f4f2128c3ce"
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
    "url": "assets/js/app.d5ad98cc.js",
    "revision": "52c0b3df235acd0f5a2a83bdb54abc3e"
  },
  {
    "url": "assets/js/vendors~flowchart.6d02df79.js",
    "revision": "415d518ed5c84bda42d46141628b3e3b"
  },
  {
    "url": "categories/index.html",
    "revision": "1b07ef48cf2ee1be8aa053172f6f47aa"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "063b94e33219d863bb759632f44221be"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "c0710e21310ba494110fc8ca5925cb7e"
  },
  {
    "url": "categories/学习/page/3/index.html",
    "revision": "e76e152ebb5b6b861cc293f32d94281d"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e035870e354b2c4e26c1cb2ad782a9b9"
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
    "revision": "99a06b2a2bace29e7b83e1992062d37f"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "c7e6437bde788b4d3b67606054e0bb1f"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "8a35c58ac3850bc28b4a3ae2770cd8df"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "da194ae8331b59a10e090123e8eebbe6"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "cbf50aac17c836e53dc3fffca769a3fa"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "ccf19c676e1fbdea1b4dc537cb10cab0"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "300fc778273f51c79ed50994ea9bd4b2"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "33657dfb43b484232451f420ba3c6b25"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "df05cf3f40e47d3f1a74a14880cd637f"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "4d8bbd2184194aa716780041bf70bcf0"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "66e3d2351835b9e31261dae115bb8a4d"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "f0190597aacbe9dc8cc04d1c379114c7"
  },
  {
    "url": "tag/index.html",
    "revision": "2bd829f4d0e700bafde226501990a880"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "e7c8e07233bf39746e992ae57796c2eb"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "6b7817da2096b654f6ae369bc6f23763"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "b4859a5dc183f327467bdea074997f08"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "31fb7b91d722c43a5fe5f851889d0e82"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "ec68b51a382c2afbb0ee0ce34fb656be"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "61a600858c5e1757b33bccfaed73d899"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "b48fd888107e86ef3e3462a8d7e7b470"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "ae5d900c677faafe05f48d217fac01a2"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "0c48bf66e4512a92d17cd49964b60212"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "baa864e7d5ebe6ca06d4a238837631f9"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "a7178687492561a8ec047da9608c2850"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "b862da6f1421bcf7a9854cc008a4f8d7"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "bdcc3d555448e7b804807ffca582f883"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "36c0860f19d1ed2c51acde3ef61e4118"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "30d9ca780e34e055b20b213645abcca3"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "d33e4833167bd18e9df860dd70b2e51b"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "ae65e10674d50d28419a67192a0129fb"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "a06ebd45faedf8b3a90aad1b91cecde4"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "a2c37a89461233ca2b01fa73a330558a"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "47e18c0098a7e236cf93c0d78694084b"
  },
  {
    "url": "timeline/index.html",
    "revision": "3092aca8469654a23019118370b6ed3a"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "b452e3a02b2a88d17ed669c893700b6b"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "9232e9644806f8f1bf9aec7e1c32d53a"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "b63431ab2b512c3c8862801d95edc5a8"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "3a9548db0764da160230fb7743b7e8d6"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "44d553bbb0bcbed92e4ffe4f75510adc"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "838195b3ea23b5131179d6f897381fde"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "7b260a24d9d820e945b67bd1322d2bbb"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "77a06987cbbb7dec0a14b373d01a8803"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "137a8c2c1b475b1980b26c26703ef401"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "b71ad96f4bdaffbc007e3338dfffd35a"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "acf88479595e17cbc7b248293a7cb07a"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "d7d24a111e05df50f7133f21becc6013"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "93a82f1358d5f731e67c9b73ad17ff9d"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "f5c3d576163498ef851369a034316397"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "c0628b39e7740fd113b9bfd834e3ff50"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "842c099b1067908700df3f05f47ad7a2"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "0038ef18a9d9e5f005c4296c1232c135"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "13f9d0c8a58b7c9988ff56a883282656"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "6d6d9acfddd977b9d614a8b17af87794"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "dfb2f1ac62af9b759c9e2e0dc41e91b4"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "8ab9af1b2c62761a9bdc05ec5c3a490b"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "2a9fb3344fcee0b427521e1af21fc75c"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "67d14709f035418c5a3a0bb64dbdb21e"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "c0c84ca7ac65cabc34d11778022cf53d"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "d44c8f8f58ed7ff3d76d77570af5e054"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "64c39d3930b25258608819580946c4e9"
  },
  {
    "url": "views/other/生活.html",
    "revision": "a821ac0d3906ea0ebd000010f1891849"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "f88eddbb3ed8175a15950f296ab62412"
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
