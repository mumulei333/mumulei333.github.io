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
    "revision": "459783faea353225d9043901ab9f8c44"
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
    "url": "assets/js/9.a1d4fdba.js",
    "revision": "c480ca4b303f4c1f3baca2fb1117cb0b"
  },
  {
    "url": "assets/js/app.b4ca6e2d.js",
    "revision": "b1820a05fcac587bb7c22f86d0f6e094"
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
    "revision": "4cc45aaaff9bd79d54e14496ab2951c2"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "3cc12f50aec424ee726cbc94b78f42f0"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "bd333a731ac1c15a0e87102736abc9d3"
  },
  {
    "url": "categories/学习/page/3/index.html",
    "revision": "452d969ed61553a2022ebfb4238b46c3"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "ee030a97b5a70f51a191afd7719bef13"
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
    "revision": "967ce1f6abece17273f65d8319dd8cf3"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "2962c7d95bff3117a38669253723f75f"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "7bd63017d4653de402bb9baa72aff4df"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "68562161b77f229ef48b9bfccdbcf6ee"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "27e0d114b78ca282846f8ba1e1c1c80f"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "fd2c7cb7ac16a47ea4c3dade631c6397"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "d4c4b149fe8f702ab80507999af3dd38"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "6400157e700aa1150094bc0a08d185b5"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "42ab988a5eddde7a5581c8f8e72fe40e"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "4d1843191799eba3b2b0324dd379c60f"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "df1dd1a636d30b991a5f51df21840668"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "b447e9abb6022e704112666660ac7189"
  },
  {
    "url": "tag/index.html",
    "revision": "f46427cd93019dba183ef16fa7cbc2af"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "0192e8c8736bf5b04b5cff2df8570c8d"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "ed73628dfc024f4c449e224e4b41dca7"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "4babe385b5b1ea37b5db18ba78dc4603"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "e07e62bbbb7158afeb94eb9673dd7097"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "d19f2d6cbac15e0084146c155c6d3140"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "a92617e183df7a823b309c1c4ca68fea"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "38faf52b25af43e30d50d24894b5aa89"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "893286ba3a2bff72d2e3f7b68c30672e"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "1d6f2f35329515ef53ec10bc4b1759a8"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "8a7ed30d377059717840bef82a64b033"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "282ebbc9b60e7eb1f64c71af4c1d79aa"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "c4350bf78d4f93728417722af593ed52"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "deba45665bdb84afbaa534a93920480a"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "bb6e661f5fde075e015179fab74e2bca"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "cf8981abd9e9059da03461c9411e9fcf"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "f2f94ce563f0b5434799ea562345999c"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "c477203c1b13bb7bb0a1baec7a2e0966"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "c7f4b86dfda88abf0d0d298632c1ec81"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "2c17a1f289b08c6c9b88441298a9a69f"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "51ea836dc0370bd92f09fe22186dd5c9"
  },
  {
    "url": "timeline/index.html",
    "revision": "53e6c2654b3ae2f528a5f351215da82e"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "53c74d3e11d7ad229278fea6673b594c"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "f0302d2b78712b01df71e6cf52c935ae"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "c0ba697b523ab9a481503f82c352c4e2"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "787fadcabfd7ea1dc2bbac5c03a95fe8"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "90de9f131375c6ff90842bdb8dd0e7c1"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "a27d10f227f1aeb57ebea29d7c778470"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "7a424f8744b9e2b5fbe60afa7a615703"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "4820f8da3e71523e6a63684ff17e36fd"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "24a7bf59cd3311f07a79e8634de7d20b"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "61a83544ca3190180605e54cf872d92c"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "d44dba93b9bd308ab3309dbacd356cfa"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "7ce9257e74a9f688daf687b019bde770"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "2681d74b88e9c4cbbc92d76d55d07693"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "7766a00d7ea3c7c82960871840345c5a"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "a0ccfc6155da0a98ab2c0b50105081c1"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "4434adfdb73c6ac5cebd4154cb4298ac"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "e1d96ca572f18a4a3c954fa222e6075b"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "3bb5c020ffd530506a71856c6ba89d82"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "2f5d07b784ffb1fdfcd5a56f58a1aa99"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "58439c95616f627e7c919c389df9f65a"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "356c954ecd2eb970b26e5b9fd3931012"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "5a5288297a18b83739f4148340c70097"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "66b560c2e7c3775c4db131a6b429c09d"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "9cab9c3684d6918a29b126aa5f39db85"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "c67d8cc704be6f685ea6c3a13608ee74"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "81496f4b05aa71cd26455d8a1102c646"
  },
  {
    "url": "views/other/生活.html",
    "revision": "93065c974356ca41d813d480ec60a1e4"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "e19a6fecba8a142290984c015bbab6cb"
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
