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
    "revision": "c15dbadda4ae9f4c99304e862a050fcb"
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
    "url": "assets/js/31.558cfeca.js",
    "revision": "96693fb739efe479434137161b5e66e4"
  },
  {
    "url": "assets/js/32.946d4676.js",
    "revision": "f5c0822b976b0c671ee7b3c96e3f642a"
  },
  {
    "url": "assets/js/33.2d65ef73.js",
    "revision": "33fd9e2e8c7652467033cd5f5220cfae"
  },
  {
    "url": "assets/js/34.84e49d4d.js",
    "revision": "9146e5463941468a5d29a9ddf05db87f"
  },
  {
    "url": "assets/js/35.42653d0c.js",
    "revision": "5a4e14ef99b7c5de84a5caccee59c5d3"
  },
  {
    "url": "assets/js/36.2e4ba635.js",
    "revision": "30426167b8fe7fb9c476a35ce3f9ea83"
  },
  {
    "url": "assets/js/37.529dec99.js",
    "revision": "3476a517150394ed03394d6321d7d5bd"
  },
  {
    "url": "assets/js/38.030e5d3a.js",
    "revision": "2d1b879bd683fdaf4e037509b4b73f2c"
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
    "url": "assets/js/app.c4a4d07f.js",
    "revision": "5a90bafb52a8d64d69224d9540d416d9"
  },
  {
    "url": "assets/js/vendors~flowchart.6d02df79.js",
    "revision": "415d518ed5c84bda42d46141628b3e3b"
  },
  {
    "url": "categories/index.html",
    "revision": "d502b7c3a6fbbc22f4525981f6e62188"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "1dc8568e85a1966e88e445fb38b1ae7a"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "9a70d969a6f439392fb5af81c1f3d818"
  },
  {
    "url": "categories/学习/page/3/index.html",
    "revision": "6d8ba752b5950db4bbf4cfd265fbf924"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "210e782114efbf7a3ea07e3272815a33"
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
    "revision": "334b9917d192212248e3d7b923646704"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "32061768db535c2b5a9cdad1a8694680"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "c9882158a264f9d4d5dd2c9153128496"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "1bc7935128889b6b359741d4b9b76463"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "4e7bbbb8b2549d3ac5c57ebaf872dcc2"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "1a84e176484f5edc5fd6063bc9e9e174"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "17a2dbd9534b53fdeb8cd16d4172034f"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "d001313713d2def9af01c492ba4a418c"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "74287e4885b753d09bfc839bbb3e922f"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "169ddb54ce7d16582ab4ced51f7fa1e1"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "2805f6db19055aa235dc236840cedb14"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "200c2d578bcd9bae9c5eee3bc0169178"
  },
  {
    "url": "tag/index.html",
    "revision": "fa280ae704c252c07c06c6917ee35df6"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "9b876e36f3629cb9c50e4369873e1007"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "83b55942770c701d87157a77922e5e63"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "f3f455f7ad9a953fb7bd47e6cf11e9ff"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "7ca6c78c51d431e5b0f88485cdb5438c"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "aa4ae3d0ac543b5d123ee9c455fad063"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "9c5ed31e8d1a69e1e6d6f6e2c32528d6"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "c22a472ecd15ce23aa6a406aade255da"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "2737660a7ef2d497432f0ea26fc19d6c"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "a7c916b8853cfe33a4c8cc71657d8907"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "e881b4b7b7b3b4751cb5e757b536c4dc"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "42bd6a56a1ba925ac65012ddca2d9e45"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "e7793f565ba93f6a3af5155c40d3810f"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "d4246a34d0e7a99b00aa3e108200a628"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "d0b6fa4d7d093e23ce321226c0b5d850"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "0821d4820a069e51c76ff5577c4f6d36"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "b792908fddcfac64049e5e235565a6f6"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "1fe17fc81ec82855f44f24b313d3454e"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "a5899ef91c5f2c6c6a427bced7c52f99"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "8254f58ba3ff3d4b438fd06fb68787b0"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "e5ace6e865939ce40403fde7ef941906"
  },
  {
    "url": "timeline/index.html",
    "revision": "22a389b3f912c82058a027dbc0d3cb2e"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "e4eb7ab2a019052170e0fc81a9b16ad2"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "2824f4c47df5f922ec385030ee910190"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "304d057d6c09f0c19830831ad918a6ee"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "22f920f9eeee0724889882e6b492bf71"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "f044c9c3adbff34919da67ebe14d91ac"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "1b2f38d1dbe44f6e2ab938ad9e4ebb4f"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "140942bba2d41fb67df91fc7304f314d"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "33d2894b92f86729cbd7db7d9adae4e7"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "c3418247f00b603a3b43cec4333511c4"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "4c36a5a12047914c2a2719e48ba1b851"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "bab11f867e5c9ec29568756b0eaf9c16"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "9a1202211c46ffcbfc876cb4c7bf19ce"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "fa792ca37075f064e3897f0c860fa684"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "f40996219a0ae57a6351ce51b8e67f0e"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "b3e8bcec05f468a026300dbd3f51121f"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "330a72a8dc423eb579cd6087421bf1c5"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "04be365cbc19068ca08148e919699d8f"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "c4227a88e310229126f64cf7fb1f0f64"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "ab17ae3985c372ac63759f53db430d14"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "a9af025ae80c330818da114fed39c5e6"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "d69e884eda1b1f6ad470605d05d6981e"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "768c3efe56b5d31d29bcd109bc67e484"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "d511d222903156a5fe3e904f422b2cf0"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "65832123677003097372ced3e39fccf1"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "a0ec59dd6ac4bb8cfb3288e806313263"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "5f0501fa07b06da90357adbef3e6e4b6"
  },
  {
    "url": "views/other/生活.html",
    "revision": "5fdff91092db34ccbce2ed7e4299a9be"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "36e351545a9ba968196ebea4511b5aaf"
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
