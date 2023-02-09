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
    "revision": "15d26c4ea23950e9d094407932d4f03c"
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
    "url": "assets/js/48.af68d4ec.js",
    "revision": "1754fc4c568b343060e2baab35761014"
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
    "url": "assets/js/app.e92a685e.js",
    "revision": "31b1e769f7cac1003c799d49d9fab2d2"
  },
  {
    "url": "assets/js/vendors~flowchart.0494dadd.js",
    "revision": "311caf44442f6570fdb993077981e75c"
  },
  {
    "url": "categories/index.html",
    "revision": "185095c3f6a3b452472a31e681c1d889"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "22c5bfe30ecf1069532db17e5d217b3e"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "7c289d4368ba3dbab96a3af9a373c987"
  },
  {
    "url": "categories/记录/index.html",
    "revision": "2e5214c444830985fa5273437108001e"
  },
  {
    "url": "categories/记录/page/2/index.html",
    "revision": "2adcb8392af7f66c2a5794e02ebf270c"
  },
  {
    "url": "categories/记录/page/3/index.html",
    "revision": "b5095db12d79891db511aa99b91095b7"
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
    "revision": "1ce61ec32502af7b3700213a0eea864c"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "82f9097c256c1f60796a8c6055ec3a22"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "8fa58402188d7aced30b74e0fd16fc66"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "f1548c32988ba801b1a563588af5a02c"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "bc252cb8c93b4770f024906a63dae10f"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "a048ce438891db33f5779c8fb30e76e9"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "0ab5c5d976fb91114065f8e31ac3d905"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "d4cdaa763fd8e3c1532e5a1d1e13be09"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "e53e2e851b495ee78a23c1cbfafddf0a"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "3aa70d188c13a11992b9869a64d92cac"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "2c2708ae363db1eb846a55780ff56b72"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "9655391afd65233b900177fd7dde1d1f"
  },
  {
    "url": "tag/index.html",
    "revision": "774b2758e81c6fc85b46f0f08a8058c1"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "25ca522848222077b9180e1182648c03"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "967cffa9ed2eb0c0a6ac47076babe4f0"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "c687603b14a30eacaa3b80f90c8ffdfb"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "a9ef64e7896f5476e896670d45b729ba"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "db3695831eeb370fcda47239a44482bd"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "85fde1ae26f237007b7d261e4107e581"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "30c780a34e69bbc170ae2b6585753564"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "662e116fc0556f3789031900b98b3036"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "e341fce8ae9fa22e4bfd4a82817d1b9f"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "b5560afd382bc933dda2f1dee88fa4bd"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "a74eab3810863a8954c7f539493eb16d"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "1ad5c4cb56cb4abff1cdf99efabac1ea"
  },
  {
    "url": "tag/书籍/index.html",
    "revision": "a347156ea001e8e6ec10ec6b1b8ffa4d"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "95241aaf6599523d84b22b74612e42cd"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "a7bb9b2070d1b08c6639f37cc814ce9d"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "68ac088462d06ea492e0707e19f15892"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "6c1b602f51c50be3600f88363fd0f2d9"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "112380f4037b33c58fad03a77e1c23d3"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "2f12d5de7f7c8a3b69768f42a298198e"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "d5ee969bd39b2a32aafcd34bc55df05b"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "1edd090c34652fb99cd1d7f5819943a1"
  },
  {
    "url": "timeline/index.html",
    "revision": "13903b14fde626947fbc8632a2795bf2"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "9a52f4948f053a7ce069c3617b7cf5a0"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "4ceb70dbe19f8c265bd789bbe09c21b2"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "6598bdabb2fa619902bd1308fdf46585"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "8c464e0dd25963838bf984c2f3d2672f"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "aba6b6baa18ca546add8c065043802d8"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "99cf6f03986565701b0e9f264233ab9f"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "7ce9ee6080c121db7df5d623a6cbd510"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "e22ace2a8ceced99026439a19ed76033"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "94cb71953e0590cefbfb904bd7b36a8c"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "a05dfe51510d59577a831e705570518c"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "e0d155de44a25b6130485d0d1b0f18b0"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "bd82be40091cf4fc9433eea4c7310e7d"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "e138ac3c0482e0b123e809fa402c2664"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "bbeb1225dfd0649f127f08c20d41ec00"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "9e6532cd6c29f75f7313ed2b2b402f4d"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "a8d0a80901b2476001df714030f19d44"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "9f1be9e6f33b876f6a730accfdd7b92d"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "43d7b15b229c68a6c50a7aac4015a3d1"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "334596444de70de948659ac482f639fa"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "5cc36ff3620ae6548c5541c909037087"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "47eb8a5016073aa59c8ef50cf9cb3ec1"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "9b9f648efc5586a6440fb2a5c6f857e5"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "4e25ff818a90515ac0bb8c72cdb680f5"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "eaeb465c9611842869339e44118375b0"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "54d9e491c98b211012fad47f911c1de2"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "7811856a9bea06723d0df5cbe6f59292"
  },
  {
    "url": "views/other/生活.html",
    "revision": "eb4668b910006deae13363cfc947cb68"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "a1a859b5bcd9630f46f80e8443fd56ee"
  },
  {
    "url": "views/other/读《微服务设计》笔记.html",
    "revision": "02d8c26f26f374f9c6abf898e8ea7ff8"
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
