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
    "revision": "dbe53c7c824e7f51127c6d6ef94a1cdf"
  },
  {
    "url": "assets/css/0.styles.19765b75.css",
    "revision": "e9ac9aec1fa6facb65bc34e078bdb5e1"
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
    "url": "assets/js/1.475dc6c1.js",
    "revision": "83aa48a2fb48079134e335cb93456680"
  },
  {
    "url": "assets/js/10.34a2629c.js",
    "revision": "15afef1e8fa83b27c74bab3e6cc79170"
  },
  {
    "url": "assets/js/11.d731b2bc.js",
    "revision": "0578080bdf1ab58684beedff3a2fc895"
  },
  {
    "url": "assets/js/12.7463f4d6.js",
    "revision": "3853d0aeda83691e0ea8016a11d2429d"
  },
  {
    "url": "assets/js/13.f687cf14.js",
    "revision": "15a6948d4408ead2e8ddb5abec2a2c2e"
  },
  {
    "url": "assets/js/14.ad779485.js",
    "revision": "0a2fef6403a5bb9ffdee0a84a683e001"
  },
  {
    "url": "assets/js/15.b391e693.js",
    "revision": "9314591a39f5aad04516c950aa54decb"
  },
  {
    "url": "assets/js/16.beb01408.js",
    "revision": "eab8f4aa790b1428b91ab93c2ca93dc9"
  },
  {
    "url": "assets/js/17.ff574e63.js",
    "revision": "f83715df0af956f1f69c1e1648e37359"
  },
  {
    "url": "assets/js/18.467ed774.js",
    "revision": "9cb084cc1ec2839b85d305f74c47cdd7"
  },
  {
    "url": "assets/js/19.0b77251d.js",
    "revision": "e564a4494c82179aefea688515f7e38e"
  },
  {
    "url": "assets/js/2.61a1e39c.js",
    "revision": "6757ee1169f2e5f3ce455ee65fe9bd8b"
  },
  {
    "url": "assets/js/20.dd14c086.js",
    "revision": "0ecd67d34dbdf396344de22cdc470e49"
  },
  {
    "url": "assets/js/21.aded83d1.js",
    "revision": "f51d03baa3ef041decf73b5bda035243"
  },
  {
    "url": "assets/js/22.1e94d6ee.js",
    "revision": "a329ffda728643df6c1370173c544f2a"
  },
  {
    "url": "assets/js/23.f2f939e7.js",
    "revision": "9bbc208248ddeb790b809532fc5a4807"
  },
  {
    "url": "assets/js/24.110bfab3.js",
    "revision": "881f3f6cd3754f429fcc97b9246b20df"
  },
  {
    "url": "assets/js/25.14c21b47.js",
    "revision": "4d0e3f3bbfcee01d00ff8826339e83d0"
  },
  {
    "url": "assets/js/26.6e4af5d7.js",
    "revision": "01acb763b5481b8f3b8c9742cc94c011"
  },
  {
    "url": "assets/js/27.c8f75348.js",
    "revision": "8b68ca1623fe69b6cef9538502914cff"
  },
  {
    "url": "assets/js/28.5407dc39.js",
    "revision": "5e010ed296ae0a9f60f83fca15e00804"
  },
  {
    "url": "assets/js/29.c3354083.js",
    "revision": "daee6affe43bef978cfacb094e1346b7"
  },
  {
    "url": "assets/js/30.7f90e78b.js",
    "revision": "6f829451a5a439d51233c1f4203f94be"
  },
  {
    "url": "assets/js/31.cbaab500.js",
    "revision": "ca046832a00fe43ea306cc68943392d0"
  },
  {
    "url": "assets/js/32.8dc0260a.js",
    "revision": "299444855b4415ae5d1e0b4106deb787"
  },
  {
    "url": "assets/js/33.8f70706c.js",
    "revision": "6fff3c4951061d9e08d89fe9902bbc12"
  },
  {
    "url": "assets/js/34.285b8b4d.js",
    "revision": "91ed673b6e61fcbf83f7df74d5e5d46b"
  },
  {
    "url": "assets/js/35.14dc2f2a.js",
    "revision": "c0bbfb655814544e2be114e3c9f751cd"
  },
  {
    "url": "assets/js/36.d1fbc46e.js",
    "revision": "c4484861b64ea44f57e6fe738c7ceb9e"
  },
  {
    "url": "assets/js/37.9fa743a7.js",
    "revision": "c10c90f662d81fd85eb67c0eb723ade8"
  },
  {
    "url": "assets/js/38.134c1097.js",
    "revision": "d117b8e6a6e3b24a41d6d765fb67b74e"
  },
  {
    "url": "assets/js/39.2ab378dd.js",
    "revision": "2a00a9599d8d554b6fe1061f085762bb"
  },
  {
    "url": "assets/js/40.55c423ff.js",
    "revision": "5fbe5fb1a6b930ee28eb26104a4eaf8f"
  },
  {
    "url": "assets/js/41.775c8b25.js",
    "revision": "4bbdf41dc67d8523633d5c217820e647"
  },
  {
    "url": "assets/js/42.b02703ea.js",
    "revision": "3b11c59084390ce8ea14c97ccfb91f26"
  },
  {
    "url": "assets/js/43.30df6a88.js",
    "revision": "99b72df8c7bec469981b48dbb79c76e7"
  },
  {
    "url": "assets/js/44.18c3b109.js",
    "revision": "392a1a738652f6183ff790cdbf6a12c7"
  },
  {
    "url": "assets/js/45.ac4911d0.js",
    "revision": "9bc32cb23602fe7dfce60049008b4df1"
  },
  {
    "url": "assets/js/46.3de9b612.js",
    "revision": "9921aa401284997609423f297d3bedfc"
  },
  {
    "url": "assets/js/47.016a6161.js",
    "revision": "33f1f454d4002fd29a4718fe46b4a564"
  },
  {
    "url": "assets/js/48.a41a4a11.js",
    "revision": "bf2c32389b7477d8654890d7fd873ab9"
  },
  {
    "url": "assets/js/49.68f0b0dd.js",
    "revision": "8fd45ed3480febb94da7cf26e8defbdc"
  },
  {
    "url": "assets/js/5.fab1ffba.js",
    "revision": "d234618d46a8b9863778c80ee754ab94"
  },
  {
    "url": "assets/js/6.6eb05d2f.js",
    "revision": "c9dd093874e29a9103aafa4acbb76282"
  },
  {
    "url": "assets/js/7.df1557b5.js",
    "revision": "6dfd46b7d506959519699f11ec80fe15"
  },
  {
    "url": "assets/js/8.cbead6a8.js",
    "revision": "6f4bbfb7edf1a413c1c28c5dbb115f95"
  },
  {
    "url": "assets/js/9.9038ddcc.js",
    "revision": "ee9cd11c3a782fc44f3430542a84a458"
  },
  {
    "url": "assets/js/app.4acb81fd.js",
    "revision": "ee5b30dbfec2aa64cf2505c73a5d145c"
  },
  {
    "url": "assets/js/vendors~flowchart.0494dadd.js",
    "revision": "311caf44442f6570fdb993077981e75c"
  },
  {
    "url": "categories/index.html",
    "revision": "cec1e32343edfae789057344ea42f2a6"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "78e4a71cca65b5cbd2ea098446c13763"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "21af35847e59d21e67b2513ef6461c9b"
  },
  {
    "url": "categories/记录/index.html",
    "revision": "2b4302d3bbb0b619a6b3ab4fcc17eed8"
  },
  {
    "url": "categories/记录/page/2/index.html",
    "revision": "2538d8f0448925669debb005de83ac30"
  },
  {
    "url": "categories/记录/page/3/index.html",
    "revision": "2b301f64036561e3b0a89d048bffd07c"
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
    "revision": "a961977a1e47e68de32a0dee16893e7e"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "2081829d5d4f9ab14ca087419500bfaa"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "69fbfc695ab3f4aac4405c37386c199f"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "53c45617b39f17bf5ae76638acc8d66e"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "e3b742173fd847dac996068a882af2c0"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "4eea0614d7aedd7035be91c13ea1836a"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "34c6354ab193d72496c0e3eafe07e8f9"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "5e6a31d42629ec41e1041f7cd12e1484"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "5a00dcc64e36356b83a69d66b72d049c"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "a15067bc5bd7e573108e78f02e5151ab"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "cc8118a75c870d424ac461a6bc0257ab"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "ebc046912a6b5e317ff9cd3b5425f6a5"
  },
  {
    "url": "tag/index.html",
    "revision": "23be8d8d66b56ce739777de5b114f100"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "c75e563d13d74b05b07500aba758200c"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "af45003c4ccc825e796526b159193b8a"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "9f9a4b63ecfe6581d8170b5499d77cca"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "e5d487721aa06bd7b5bb7ba32864e034"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "3d78fe79d2c66aa724844bd33369dbbc"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "231a29259332dea443cf49763374d159"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "ec8349c84a06ee90108813f32f456eae"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "24110c07d6478bc7ce087b507d0329e7"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "5697e3d129e691ca77776bd6175dbc78"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "18b486a0c83451440eb0af41429f9b2a"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "a49f793934503019f9b60878b69afb82"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "44aaa706f407b8361c73a9d2da9b3466"
  },
  {
    "url": "tag/书籍/index.html",
    "revision": "4f4f629631b043d032cfe322aaa5d762"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "a863991e52accf2b89d30ccbcb1c1f88"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "df5e8251d286c2fae48df422ba04791c"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "efd357e3eef0567a07c78ecf69c80038"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "74e8b06195222b5124a0fedc403a1ff9"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "ea0be52dd93b66f475a68bdc41f3218b"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "f2470627ec992f6005988683fa063425"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "c81fc3444f59ae5c2a6f7a43480f182c"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "b49a6e7be088bbeda2a142a9f3b023bc"
  },
  {
    "url": "timeline/index.html",
    "revision": "9591644c50a5b9f7d9ef0a40e8a38d1c"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "ce6241c95b1dfd0f06e52f41a6807034"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "4325664341875fd8e01be9947b5c571b"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "f2f44900167981a9014efb6f3cd42695"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "74170efe12a5adcd4790119536a189f9"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "827254b8fe6091189073a7b133b9ece7"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "46c920eca934283a8251add4c3ad7b21"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "f597463a06ea38c8eddce2803ce9acd2"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "0b501cb4ae42619b60cb17dc6992048e"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "470908e35c75fbddab5453db19b65056"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "e80d654f0700092b08523f54a6b9c260"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "7d5078e23be4b070479b2ea21edda2e0"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "8c8ca582791af46afd4c72cf278a2c63"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "4ccadf3adf9889f3d048c05c2f9afa5c"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "28bfef8496acb2970faeb9326f71f011"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "949b8fe57e76b5f182bfba0ca734a2f4"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "80de159f3bf9cfd9aa9e2da981dc85a7"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "3f9255ed1d27bd772f58291f24730cde"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "b6cbed54b7843efd95f944c91108fa99"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "181b33331e3669afe315dc7663b44587"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "7a21bed7bc98ec9e308cfe83b5e70e2c"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "c77d66aec5f0a67836aaa7290e1f1b8a"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "c220bdef71c1db91a132d01f0510a9cb"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "059cabc36d85683e54d73012267a7979"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "0e3760bb7af660e337280289ca3da541"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "bd83553a4c3c3d8de3fd52fbcd43a03d"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "16bd216841f4a9d8d32f5eb64f835d60"
  },
  {
    "url": "views/other/生活.html",
    "revision": "06064c1121ae10f35d5c7fbb2f44ca41"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "68ba8926241295ebf4aa3bdb516f0cf7"
  },
  {
    "url": "views/other/读《微服务设计》笔记.html",
    "revision": "0dac7b276f921b989bed187cdfb86709"
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
