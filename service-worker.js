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
    "revision": "942dded7339825afcc91a531475462b8"
  },
  {
    "url": "assets/css/0.styles.022c2da7.css",
    "revision": "faf5304c0ed7a56415a6d5aea6068bd9"
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
    "url": "assets/js/1.cecc6e5b.js",
    "revision": "b3d0ed462cfb610c5bfd5e642a6985b8"
  },
  {
    "url": "assets/js/10.baf40c74.js",
    "revision": "7abb5ccc814accbb4394e350a857f865"
  },
  {
    "url": "assets/js/11.aae9d3a0.js",
    "revision": "9f6045c101018a5581590dd14c9ed1ec"
  },
  {
    "url": "assets/js/12.768cb4ff.js",
    "revision": "7729a27ae1f71730314f4eb74a8defae"
  },
  {
    "url": "assets/js/13.45ca55f7.js",
    "revision": "a4732972b58fa4d5ad4a9bfcfda515e1"
  },
  {
    "url": "assets/js/14.5facf816.js",
    "revision": "199c8534914b30b443fd3ed619d64536"
  },
  {
    "url": "assets/js/15.aac9699f.js",
    "revision": "163b970ddbf5998a671165986e4c3e6b"
  },
  {
    "url": "assets/js/16.e7b0928e.js",
    "revision": "ebafc129fa5c51c82827552947f0311d"
  },
  {
    "url": "assets/js/17.5c20e994.js",
    "revision": "e7895647c8e6dfc1d939400dd3f478a5"
  },
  {
    "url": "assets/js/18.10256600.js",
    "revision": "9dd78dc713fecb3703241e019efc38bd"
  },
  {
    "url": "assets/js/19.0fa55237.js",
    "revision": "4ba35f5e36aff2ee499ebb75a7212083"
  },
  {
    "url": "assets/js/2.c7f26fea.js",
    "revision": "8f82cedfa1431bfab1148db986a2739d"
  },
  {
    "url": "assets/js/20.ff1b6f32.js",
    "revision": "d094c43c555b319feb54d4417b277002"
  },
  {
    "url": "assets/js/21.c55f765e.js",
    "revision": "2ab5bdae084d6bd707b7652ab4415899"
  },
  {
    "url": "assets/js/22.07b5df39.js",
    "revision": "50ea8c127866e2a22f033c1126706c0c"
  },
  {
    "url": "assets/js/23.c5eacb54.js",
    "revision": "6c0edaa97d54240093652eb1272e599a"
  },
  {
    "url": "assets/js/24.90aea81c.js",
    "revision": "dc248188b4895a75b3099463fc1b373f"
  },
  {
    "url": "assets/js/25.022e50fc.js",
    "revision": "7964a5cdb739551cc33be84e7a630ea0"
  },
  {
    "url": "assets/js/26.e63fdcb4.js",
    "revision": "0503c74e43deaa2542145f65c786a057"
  },
  {
    "url": "assets/js/27.23676215.js",
    "revision": "c22eb074f19f463d044b9b1819fd517a"
  },
  {
    "url": "assets/js/28.ac18a13f.js",
    "revision": "501713012589c95feea2b0a2d1dc75ac"
  },
  {
    "url": "assets/js/29.c2bd02e3.js",
    "revision": "0eff3a4218464388f21ea14e098c59c2"
  },
  {
    "url": "assets/js/30.6d356107.js",
    "revision": "080f8fb00b566894e123de844895bfaf"
  },
  {
    "url": "assets/js/31.6debc338.js",
    "revision": "38de821242c3c5409fb90799af7c23e6"
  },
  {
    "url": "assets/js/32.0b6b2291.js",
    "revision": "0e35bad62994be48868e05504207b792"
  },
  {
    "url": "assets/js/33.60264898.js",
    "revision": "14aaaacc4e776db238e881a915f4107f"
  },
  {
    "url": "assets/js/34.effb19b1.js",
    "revision": "4b7edc290c663f8c355a847c9bdb30c0"
  },
  {
    "url": "assets/js/35.d1e67136.js",
    "revision": "4542780b1404396b4c8017b125d5c7ca"
  },
  {
    "url": "assets/js/36.612726b1.js",
    "revision": "408f91c1d4ee9ce81e7e60462ca6c0f5"
  },
  {
    "url": "assets/js/37.8d5db0d4.js",
    "revision": "bf4f0a7ea1d1197a82a923dfb2dfb4f6"
  },
  {
    "url": "assets/js/38.4878618b.js",
    "revision": "f5acd01212593fbf2fe4446580caae42"
  },
  {
    "url": "assets/js/39.9f204b4d.js",
    "revision": "aa3288a65b1f9dd562e68d228e01a878"
  },
  {
    "url": "assets/js/40.7bfba453.js",
    "revision": "ac727ae5e61ee53d582f441f9d351aef"
  },
  {
    "url": "assets/js/41.b40a7267.js",
    "revision": "ee54787bfa0f1e98547fb35da67bed31"
  },
  {
    "url": "assets/js/42.f74c6218.js",
    "revision": "8e13b277be7a367ecd1c9cad0a49e073"
  },
  {
    "url": "assets/js/43.f00e077c.js",
    "revision": "c27c62f1eb17a4b40e132d0a5284c864"
  },
  {
    "url": "assets/js/44.d0fcfc89.js",
    "revision": "f574c3b50e7e78b0651271204b364b2d"
  },
  {
    "url": "assets/js/45.883ba569.js",
    "revision": "6f6b28d744059017ef0f401374270edd"
  },
  {
    "url": "assets/js/46.c101d2d2.js",
    "revision": "17c5cb549a48723c72e2846fa9d30be0"
  },
  {
    "url": "assets/js/47.767c16c1.js",
    "revision": "1e2796db2da63812d9a7363228ad2d9f"
  },
  {
    "url": "assets/js/48.36badc0a.js",
    "revision": "96bf4a015a31bf1e75d84a3a1d110796"
  },
  {
    "url": "assets/js/49.6f30f845.js",
    "revision": "4a9921454c69adff9b02d68249e8c467"
  },
  {
    "url": "assets/js/6.e3961f33.js",
    "revision": "b3aac17e825e720a988e2e06987326bb"
  },
  {
    "url": "assets/js/7.b9258d4e.js",
    "revision": "35c5df81384c405ee2300fe81c6bc769"
  },
  {
    "url": "assets/js/8.e7bde66c.js",
    "revision": "02de89ea70ddeaee69915fa795c556ba"
  },
  {
    "url": "assets/js/9.6cea32f1.js",
    "revision": "f1f22de7a55cb084dd7d6416b317ea78"
  },
  {
    "url": "assets/js/app.47073f48.js",
    "revision": "e1cf171a1bcb58c38179155dc87874e1"
  },
  {
    "url": "assets/js/vendors~docsearch.88bb053f.js",
    "revision": "dcfbd59dc9f0d25d57276e4960df1782"
  },
  {
    "url": "assets/js/vendors~flowchart.96aa2f05.js",
    "revision": "b393e45885cb3bb1fa271009c3e3f4f6"
  },
  {
    "url": "blogImages/Leecason.png",
    "revision": "7c60fbffa793a1cb7dd2aacb913050b6"
  },
  {
    "url": "categories/index.html",
    "revision": "e562a0c9dbb0fb83afe7cc823addfafb"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "018175460df58e99aaa9f9cdff7da99d"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "37ce56ca8ec4adc3b2c0d38589612bb3"
  },
  {
    "url": "categories/学习/page/3/index.html",
    "revision": "d315064e1750622401b03fa028991b87"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "b190a9d2edb1b24c75b06b782283bcd6"
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
    "revision": "669ef102b68e1596217abc22e1b6864e"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "c7dc7490a4dc1683defd7833402f5c3d"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "2f7ce13586002d5a0e03a30b00668614"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "825aa78e80682fe9b18104bed3eb576a"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "f971526ab3e3ea1fb89ade5fb3bb9ac8"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "4f2ccbee0d05303e099bcb2117ba1ae6"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "9d468f465022a564e3f72b80a9758998"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "9c35006fa3e35724b05a02055731f1c6"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "1014fa6133c475151906405e9b164e9e"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "666b2c75da4d0c78b35a71a233de2315"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "c229c1477ec3133d3ee0ab8fbfeaf070"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "5edde54f63387ec7ccff24254379277c"
  },
  {
    "url": "tag/index.html",
    "revision": "2b55f85bc52f287fc00ac3907f7e68a9"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "f759a36cdfc4b0a83bac7dbb84e1b368"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "d2e770238d247358f3e7aa06fd81bb97"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "e9724071fbc047ad6b47436b6cfeee3c"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "2fcce45c9864f5a466125891df020891"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "55e4552790be1754aaf2d52802214b4b"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "4dc66908e5190570c15aae41abe0223b"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "e2d1ac0992b2d7d4555ea62af5e5adb3"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "e50ea49885db8ac22094bbf8a0188bd1"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "16bf8b636c2efae288236e9cd8538bab"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "258f057e60783b10e325300d65b7202a"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "c725ca14512517bee7abfbe4361629df"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "9c5ad52f026673deb8732f01459e4606"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "aed58689da51db1bfb7de54c09e99571"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "9f32db642f3516177c0e4b17f39b9684"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "881e5652e9bbbb7b2be03aee700b5c0d"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "74bf4ebdbf6578aa526b2f573986e6f2"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "61b5f9c80ef770ac685ffc4644a4571b"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "7df49490a5010f80ca1e08e183c5c166"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "f52d4345c286995b3faf8e1a4d3fcf5c"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "e2e89d8ceb0452d4db04abca044050dc"
  },
  {
    "url": "timeline/index.html",
    "revision": "1e5b3d0759a24ae10bc5ea350ff58e7e"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "8b604a152b58f21529211d0d9101c1d2"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "3b2f21ae3eba6a7001b54d464c54aa6f"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "be52b231be3a3eafe222522090687416"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "955ddebb89a4da43d8b2d421f02bb1f9"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "624de090755ff865976a729f300ce2a9"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "683c73de8d6712a12b385e60b465b006"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "bc123241a1747f89d358daba3dcfc269"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "4efa4ecf1cf35ddf0080e27f0efce008"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "d5841a5e67fb70cd7b7f7ed3fc3541ac"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "68be2b5340fb9b4548cf9b88bc7811f5"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "3bea17e4c295458384568e6ffdb5362d"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "af0d3f058e306571fd29a0b0e8cc7cfb"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "1858577afc40aa6dc8fe3a2aa57d7330"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "ae910c8b56a0b06ba03de4fe99496df8"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "87475bc6ce5b157ed3bb639bbff01f6e"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "2ebf9fa94f756e4468e083ae1edf4b0a"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "3d6b275ab7c968e30b54a5621bb95443"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "74c5cba6f202a1b0df25785105e191c2"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "fa648843cf40f16a068df224e630f100"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "32d0240807b753a0ec7bcc7bc85ea2bb"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "c03447bec296ff5a742d72abde7b387c"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "643b305c9dcd6db658696380b9ba8adf"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "a9774f80f3f3539970c83ffc59823863"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "d23c18f3d9573f5f974e5140543523b8"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "3f1036e0a5f6fa5508cb1cdb0ce8dff2"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "904daafb02f3aab632ffc12ad9e3ff47"
  },
  {
    "url": "views/other/生活.html",
    "revision": "9743255b428918462610a70b3217042e"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "5d386565c15ebd3f9e8d05509e81d7f2"
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
