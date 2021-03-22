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
    "revision": "4ba88f80b517a80f94dfc03a175c8f7e"
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
    "url": "assets/js/app.d84cade8.js",
    "revision": "c6cd3cbb23c4dde36a84834aa15173b1"
  },
  {
    "url": "assets/js/vendors~flowchart.6d02df79.js",
    "revision": "415d518ed5c84bda42d46141628b3e3b"
  },
  {
    "url": "categories/index.html",
    "revision": "b4bae4dcdab6c19bf42abbd72fb539db"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "19eee680b01680162aa84265dafd3bb9"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "464f864e2823cfaa364dbab33b7f8f6a"
  },
  {
    "url": "categories/学习/page/3/index.html",
    "revision": "5289bf1a39931ddf43142378c0fe1a4b"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "952d6fc7279cdffdc958054a675882ac"
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
    "revision": "37d6b8e13aa747a608007e1b963a0299"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "856bb09045437f1064c549e8738b771a"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "40cffb12ace7a61e8c269e0b46a7f9b0"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "a6bbb9a442ce1e434a6d0f9abd1e67e9"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "40dc84710abdbbe94978462633aeb633"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "a5c9838369b5356e7f44829cba6715c5"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "c86b5702d237ade5eab14a795d0cf9c4"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "6a132699bc98cbc880d66e8dfb32bc7a"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "16e8a865e337f7f923dab698af37f2eb"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "e19d08f693f122e45654603fc53e465f"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "e1bdcdec6770f57a77cc251e543d5c1f"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "dccffaed0e9b77ed3fbc20dce4f88f7e"
  },
  {
    "url": "tag/index.html",
    "revision": "cdd3e7a0682e8a018f27433e872f9f53"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "577e7b1933edd8bff190ed2c36230f70"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "9251283289ac35cde8c10133a2be59e4"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "49b8ff0886fb6b2f6296e20e2b6c3416"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "13f047d4d6e55a7bfaee6d84717f86b1"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "179f0324ff66f142a211be573600d1a2"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "eb9b44b6fa54a3ae8f520d0865b294ec"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "8c9b00623e54c5a9177feb522abd3bdd"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "2756cf6394174476113da8a35ce7223f"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "3a80bb37569e66cfcd66b7f0e337324c"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "02d20a415c567de6ae8838cb1d61eb5b"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "308fbab976b0164dc60898d51223e70b"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "482e249355fbb3a3bc5286cb4eb6b813"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "39b6217487246d7881e9d32c8929c1a2"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "a0abd83cd3628c28448836bef5c95d67"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "c1d38290588985cb7850998e73dd94b2"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "be05471667ed69ead61ac96463643440"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "a4371766d8274128edb5ef425f6a5977"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "01e24d0f38f14e00643b16be86c48fc0"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "06fccf30f534a043def6b790e524edbc"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "7d87f222f4b94c1b2e2dec54fe038a25"
  },
  {
    "url": "timeline/index.html",
    "revision": "88b9928086d61d2f370278fbcccc78a4"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "cd1d76fa1f27dcf723aa9c1fc38d477f"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "38e20941213849db65c66ebaeadfcdc5"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "5235ac421ab1803dfdce620ac4ffd835"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "02b8e7ba991ac25d17a07c0c69153099"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "521c2a783b65cc8d326c8ac9f747b8b5"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "c034e588f68cfba6bd9c474c21d46229"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "8d2ebf05ff7b17757ea491e78caf53fe"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "f9be0ff022aa1f6ff292814f09998eff"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "8a6f81894b6433adfa80c94117803059"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "e943bf5074fc8296e1ef3ac2a6203ebb"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "b88524451bd8c4a3c72c8977e5e5db0e"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "81cc978f51a82eb04a009e53d450c245"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "6aff85f8a25ddf93b91f795b5dada6bf"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "78fb8b79fdbd274536301e5c981346d2"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "34f3976ca75b332abc350127f5fd23bf"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "7fa5e00ffcb819f86d70266203fff667"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "b18d631c352082aff600d6a1c9c4a5f1"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "8a7c32f5aff03695b7a42e5d1c6fdab6"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "8895545d0e842be2eb860d8662a4d81c"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "7c32def18bbbcc2773f393cbd90c622f"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "f46437d1d0c5f7e8a105d98e81f613f7"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "5da436658ccd6df5eef02d7fe1bd0459"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "50e2727bd43c6648ec9fc6e3ea651655"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "7c6c09912bb27ce46cf3643a8f76e36c"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "46e655eebbd5b5ca4c3ad068992e0cbe"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "d69d2bebbb5b35fe1db455dcaa0057bf"
  },
  {
    "url": "views/other/生活.html",
    "revision": "be557681a514a6459e27011a5365f5f9"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "cd741832ca7afc495f3e14b130d24713"
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
