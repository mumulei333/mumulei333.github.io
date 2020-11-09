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
    "revision": "5206ca6354485d7f47f3eb7cafdf28be"
  },
  {
    "url": "assets/css/0.styles.545473c3.css",
    "revision": "023b5f7eaaa572d3ea04cc6c4bd91410"
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
    "url": "assets/js/1.17efdad2.js",
    "revision": "404b852b236a86b7629e455c92ffe149"
  },
  {
    "url": "assets/js/10.2ce05835.js",
    "revision": "f91e569a515f92efa62278b0916b3d4e"
  },
  {
    "url": "assets/js/11.6da7f9cd.js",
    "revision": "f53851e15d90bb1e3e12ea55ad57e5f9"
  },
  {
    "url": "assets/js/12.dfcc89d6.js",
    "revision": "b850c358b5adf6baffe40e2f6b15d0d7"
  },
  {
    "url": "assets/js/13.1eb01db8.js",
    "revision": "487fb3c5f8118fcf5663e306780427f7"
  },
  {
    "url": "assets/js/14.897f6414.js",
    "revision": "e92e12da4742a641e854f45fe47d5f9c"
  },
  {
    "url": "assets/js/15.eb78066d.js",
    "revision": "e2596978bb032bb555b56ff6f53978f0"
  },
  {
    "url": "assets/js/16.23518312.js",
    "revision": "b4c808717095f66456f8758b5551e412"
  },
  {
    "url": "assets/js/17.c85908b0.js",
    "revision": "dfde5a0d857075da8b06dcb30fc7ec3b"
  },
  {
    "url": "assets/js/18.38a0a01c.js",
    "revision": "a06bc3868ef841d02ce1f76f82eb3eac"
  },
  {
    "url": "assets/js/19.c7695ca5.js",
    "revision": "ca2643d87aa4cb337d0c40ac0a524868"
  },
  {
    "url": "assets/js/2.548125c0.js",
    "revision": "f24e2a18d0e63ffddb89aca61ee8e6c9"
  },
  {
    "url": "assets/js/20.83cc9a20.js",
    "revision": "a7176e01b3f52d75876d85e97a244906"
  },
  {
    "url": "assets/js/21.a53db87d.js",
    "revision": "4f63c27a50a530e6e7a9c3803d729b99"
  },
  {
    "url": "assets/js/22.b58f9592.js",
    "revision": "06e26a94525f0c81c6a9041c1396bf31"
  },
  {
    "url": "assets/js/23.79874fc3.js",
    "revision": "874f3b1ddd678c91b4d39636894873df"
  },
  {
    "url": "assets/js/24.910d852c.js",
    "revision": "6596457eaa36be9cd200cc5bc07b4ff5"
  },
  {
    "url": "assets/js/25.37ad1cc8.js",
    "revision": "d06d61cda3a3c993fe7b6cb0ae77530f"
  },
  {
    "url": "assets/js/26.935543d0.js",
    "revision": "7cb4cff98619bb04bd75cf2d524dd129"
  },
  {
    "url": "assets/js/27.7b520ebf.js",
    "revision": "0a2790104b9d93e54bdd6a334739b326"
  },
  {
    "url": "assets/js/28.bed0df50.js",
    "revision": "4c8ac65072343601321e58074c151ea5"
  },
  {
    "url": "assets/js/29.ef22e5db.js",
    "revision": "4f3d2e290a732213c41891820f312fbe"
  },
  {
    "url": "assets/js/30.e9326210.js",
    "revision": "a00e21c175a1e211b7f0081d206cfe4a"
  },
  {
    "url": "assets/js/31.ce2bb6a8.js",
    "revision": "61fe5eea7f5a7b48d08d0ca48eaf340e"
  },
  {
    "url": "assets/js/32.7e09c8d6.js",
    "revision": "f9c50de8611a4767ae59cd8fff8d2d4c"
  },
  {
    "url": "assets/js/33.7327b066.js",
    "revision": "275805d5a146c96a7d2a21c70abf9aa2"
  },
  {
    "url": "assets/js/34.399390c6.js",
    "revision": "f1e72dafeb33a3f7618e1ca72ac26c99"
  },
  {
    "url": "assets/js/35.b22e2aeb.js",
    "revision": "f653af80f8d9db1fb5b223687172f60c"
  },
  {
    "url": "assets/js/36.3ccbffd6.js",
    "revision": "f2ad93d4d305c8356fd28c2e44a516b4"
  },
  {
    "url": "assets/js/37.6e15bc1b.js",
    "revision": "b3e5018ca0988b5f11fc19df194288a6"
  },
  {
    "url": "assets/js/38.be8766b0.js",
    "revision": "b2379c7fe03714a7927a4214eb52e0e2"
  },
  {
    "url": "assets/js/39.a9aae178.js",
    "revision": "fd883b427d62775aa22164da7f5a3316"
  },
  {
    "url": "assets/js/40.9b5d4a48.js",
    "revision": "02fdae6b4674eb79f96cb6ec325d755e"
  },
  {
    "url": "assets/js/41.cfc34305.js",
    "revision": "4d3d0888616d3365465885121b3f1723"
  },
  {
    "url": "assets/js/42.521baf73.js",
    "revision": "1c086927091e272424604392708d590e"
  },
  {
    "url": "assets/js/43.5e36aaf1.js",
    "revision": "84040e9e190471c05c67a52149d62d67"
  },
  {
    "url": "assets/js/44.7c9802b4.js",
    "revision": "2794d046792d9a100fe688822ffe9b63"
  },
  {
    "url": "assets/js/45.5ba58b18.js",
    "revision": "2444b5b1b35b1a36fc9531cda24211c6"
  },
  {
    "url": "assets/js/46.30a78ce6.js",
    "revision": "ece048b1929830e6fb68ed466f45ee23"
  },
  {
    "url": "assets/js/47.397b96d6.js",
    "revision": "c58304f3e9acf159f63d8d39848b4232"
  },
  {
    "url": "assets/js/48.53db2c28.js",
    "revision": "6b36c4ad53c12f13baab9072cc517dec"
  },
  {
    "url": "assets/js/5.27f9cd02.js",
    "revision": "295053121ab06679fd17c6fa2e969fab"
  },
  {
    "url": "assets/js/6.fc57e8a3.js",
    "revision": "2927d1ba952e3ec60ccf637b12862a46"
  },
  {
    "url": "assets/js/7.cb3f13ec.js",
    "revision": "c08d9d8f5ce9e5558d8e0fc429cd3bd4"
  },
  {
    "url": "assets/js/8.a6314b8e.js",
    "revision": "feac9c86d7f76f7135bbb564578af4a1"
  },
  {
    "url": "assets/js/9.1f5ca3d1.js",
    "revision": "d0386d00eabe4bd4a8a015d4b0d0b09e"
  },
  {
    "url": "assets/js/app.85453f5c.js",
    "revision": "8cde33620ddac108742f93827d08c3dc"
  },
  {
    "url": "assets/js/vendors~flowchart.0e7b3b3a.js",
    "revision": "42bd205c27af7703a6ca7d901581f9f0"
  },
  {
    "url": "categories/index.html",
    "revision": "ce46678fb4bd199cd10ca3f3239f3522"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "6c4296f144afb7b44d26d0fa6c0b39e1"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "6055aa2b69b814e8367bebaf9230a588"
  },
  {
    "url": "categories/学习/page/3/index.html",
    "revision": "d7fd9722f6a702c44ae9a951b9fe322e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "23ed27dc62a85aa4353603efce0d988b"
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
    "revision": "36ceb1e0112d65808e68a6abee547cf2"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "b8b7ad6d76c2b95059c0286c829db6cc"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "cd12c6f2cc621ea9026c91faf0e800fa"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "ab130debf0901659540288aea787a40d"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "48cc79a8cae4ab55c75a4eb7bcf12a81"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "4f0e1315216c231c583bb91a2dc70602"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "53cec4b7f9b0609fc7c0c10ed0586373"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "a8f372405878f233c52e4fc36f11d8e6"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "798a920538e28d8b2d29e23cc20e144f"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "74ca4fee90aaf1936006792ca6d96468"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "22cf2dd9689d4d61691465640fbbdcb2"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "58a09397521043f7e1acdc55627b5161"
  },
  {
    "url": "tag/index.html",
    "revision": "44c875416e706c726e5188b517c0455c"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "fe10ecbb598b6f877c45d374fcb9ea8e"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "df582d84821320ca5a111da8e0ba4e66"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "fd5e68f04784fb17d3cd8db866dfa2b2"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "8f0710cc8480ed6b943fdbe9471959d1"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "1321486f035bfc00a22fb17a00b2dc44"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "8875bdb3c0c931ca0b8b92c753cc6b90"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "7bbf20fae45de3bda7cfc70092d6f4f6"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "86947da72301ec775878eccf11293c0a"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "3a15b0ff7cc4856431afb870b26df23d"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "fe0088203c25b47b9138ee5bbabfba23"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "fa0a5d80d1df1a3eac90c0bf279feff9"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "efea7df3df6a5872fc9256cc15ef6b1d"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "a78553eb1792eef1684efca6230c3df0"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "2b88ff49dcb8d5b4fafa3ddbf67825bb"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "ed8de4804c2af6d4b4daf016d6786383"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "8cbd3735955e9fcef40584a49bb1f0d8"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "4cdcb318923cb1c1e9b37d17767656c1"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "8cbb9bb539c0da98a7cb3ce40f2de725"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "12dda950ae754f1696f4a8e975fda765"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "276d221045617d9701c88a9195fcf160"
  },
  {
    "url": "timeline/index.html",
    "revision": "0dc693ba04585a71a970e915d04e5513"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "208a1ce832d123f0e0dc9c273d312b2b"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "1cc584f05b15b03ff0212d9866b53f80"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "176e5932730634fe001769730ca3b417"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "426ccf7ada50ffacd4a055b844489c01"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "72ae125db05399f02d415681eda5660b"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "b9243133cc9bc58d84085f726393eaac"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "e6440bb865e8412ade2f11bb63fc7270"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "8ec71c20c486f192693ad5cf2455b492"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "6ae9bb2cbcdcb6cfba22a081c3407bbc"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "bf7693abc605f6337428685a564a8ac7"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "bdead451142211c9c8e6ee6801392688"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "481dc6951d3a547dd9b789b12a5777a9"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "d81a20490ee9e115a01f37d511b7c232"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "91ace23a560ca56087f4c06c09be2aaf"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "b5961786a44c38e99bf0ff8044d390a5"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "d6ade17b28b25c50e0a2d2cb7d57fad6"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "085c034ca6d53b14ca1ca53514c0d4b0"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "1a87577b72615f68419c6d387c4750f3"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "8b0e0a657657df94459b63db28411e83"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "fe52622c458c279cc5bf6c23dbf68ca4"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "9d6232acca0d6f3acddd95e3b3dd5088"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "46df091bf33c1f8513493a83942054d5"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "14d6158cf176ccae12bb435a226e9b6a"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "f9024cec4382b4d438ed7b0dca89bafc"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "664971aa9cb0e7c5105af923fe9a8cb4"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "43c67cfbd7631106f7ad30838685e636"
  },
  {
    "url": "views/other/生活.html",
    "revision": "43a53fbd1562d444482fd66ede90c549"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "cadf0ade900661faf0dede8b52ed847c"
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
