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
    "revision": "bb963a2b502a073285ed04e76fa8eaff"
  },
  {
    "url": "assets/css/0.styles.294f87d1.css",
    "revision": "31acb3e343958e3ce7ed444bcbe93148"
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
    "url": "assets/js/1.6de4b1ab.js",
    "revision": "355805b312150cfef4f461fa070598fd"
  },
  {
    "url": "assets/js/10.c2aea085.js",
    "revision": "51c94c8f77bacc20329df35c0dca7b29"
  },
  {
    "url": "assets/js/11.4c4dd90b.js",
    "revision": "354d17cd0b0967d425ad3d9c1fa4df83"
  },
  {
    "url": "assets/js/12.84a8b97b.js",
    "revision": "14dca4d5c10e0917db96e982eafa7ea0"
  },
  {
    "url": "assets/js/13.a6548c2a.js",
    "revision": "8f3666dfc339772f14ce9c1ea9f1a84c"
  },
  {
    "url": "assets/js/14.e44732e6.js",
    "revision": "2d15c29d9ac93707646c45d3811ecaa3"
  },
  {
    "url": "assets/js/15.998f5cab.js",
    "revision": "cf3efcbba635fb52b50260e62503992e"
  },
  {
    "url": "assets/js/16.075040bd.js",
    "revision": "1dc5ea6d345f160a49c38a325f0217c5"
  },
  {
    "url": "assets/js/17.20298576.js",
    "revision": "e9ee7c5565b966a43e0bf249dbf2c85e"
  },
  {
    "url": "assets/js/18.e4615ca9.js",
    "revision": "5c52defb4c10de9448ff0a74f344ddd1"
  },
  {
    "url": "assets/js/19.c833163c.js",
    "revision": "20a15866a16b2a7bb249077190065a3d"
  },
  {
    "url": "assets/js/2.bed614ab.js",
    "revision": "880572e7dda0994fcdfac6b001ed5ee8"
  },
  {
    "url": "assets/js/20.fb99d172.js",
    "revision": "482c62ef680f21d197e1d7d2a94f92df"
  },
  {
    "url": "assets/js/21.1ddeb9e2.js",
    "revision": "439816a7b2777238f70295d872890e96"
  },
  {
    "url": "assets/js/22.1e918019.js",
    "revision": "ec147b093c511f788a123906582073a6"
  },
  {
    "url": "assets/js/23.e8db2ff3.js",
    "revision": "98275c961ef25b0d2e4eb962c639adb1"
  },
  {
    "url": "assets/js/24.d87f13cc.js",
    "revision": "8a8e692666a2d2b6409b5d7a85055024"
  },
  {
    "url": "assets/js/25.662bbebb.js",
    "revision": "5b9fb88533dccc3af3083f03916e3999"
  },
  {
    "url": "assets/js/26.9271ed60.js",
    "revision": "b4dd7d7d3db9c8ed96f2fffce8b9dc46"
  },
  {
    "url": "assets/js/27.199d9388.js",
    "revision": "7ace50504366df58d782fc77ec815106"
  },
  {
    "url": "assets/js/28.c64ef233.js",
    "revision": "3a354142e8254c3054c31b15910c24cd"
  },
  {
    "url": "assets/js/29.15008654.js",
    "revision": "4e3a7cb83b613b5df01e7beb1874c81a"
  },
  {
    "url": "assets/js/30.0a9e8eb1.js",
    "revision": "991eb5d9bcbbbdc08bf5da723506fd3f"
  },
  {
    "url": "assets/js/31.38e6aeb4.js",
    "revision": "664e49e29ee5f2adad104d83171fd384"
  },
  {
    "url": "assets/js/32.2b091222.js",
    "revision": "9c519ddd90d95f9caa2fc9e3821b426d"
  },
  {
    "url": "assets/js/33.b60280a7.js",
    "revision": "2cbf142f1d16f9c62b112df5132f72fb"
  },
  {
    "url": "assets/js/34.8fc95072.js",
    "revision": "4da8454e0019ed571b011d9624c34009"
  },
  {
    "url": "assets/js/35.e1515552.js",
    "revision": "f1b5339e0cc16cbbfb4a9334a45f1015"
  },
  {
    "url": "assets/js/36.6fde440f.js",
    "revision": "17da06a8e5235c0b969fafe2b9c3af90"
  },
  {
    "url": "assets/js/37.58bfd2f8.js",
    "revision": "b05327393f3e16e23b7157c869a243d4"
  },
  {
    "url": "assets/js/38.7eea1994.js",
    "revision": "5d7189bcd039aff2eb746914318a62f1"
  },
  {
    "url": "assets/js/39.8920984b.js",
    "revision": "bd8cd81f5c27ea950c33e593c2adeb7d"
  },
  {
    "url": "assets/js/40.ce2222ee.js",
    "revision": "6a3db907c79aef89dbecc1a300087515"
  },
  {
    "url": "assets/js/41.cfcaba6b.js",
    "revision": "2ad7f0d763fe03d8bf8217c86e5eb6a1"
  },
  {
    "url": "assets/js/42.e28a5591.js",
    "revision": "f4d77c255aa8f1eb0c634104c9b458d6"
  },
  {
    "url": "assets/js/43.579c50fd.js",
    "revision": "83d52a11af9cb938f6290351905d241b"
  },
  {
    "url": "assets/js/44.a6d1d26a.js",
    "revision": "96699ae7d0bc98a51e9f13b10bc7f511"
  },
  {
    "url": "assets/js/45.64a31692.js",
    "revision": "a95aa960b9a9ebe8546f65dabe1c5949"
  },
  {
    "url": "assets/js/46.d55a5e55.js",
    "revision": "e429f0d33dbd088f3d49a42c79da1111"
  },
  {
    "url": "assets/js/47.67a9ff0f.js",
    "revision": "3ce0e5bb0899fc01d8ae3747707265b2"
  },
  {
    "url": "assets/js/48.51133906.js",
    "revision": "19d9fc6acf535972f332213ed7fe7fde"
  },
  {
    "url": "assets/js/49.7b6586c1.js",
    "revision": "987033282c8abd75f7c8e59bc9f7fb8a"
  },
  {
    "url": "assets/js/5.cd473aed.js",
    "revision": "b04566e71bbc469ccf5f63da1b62b023"
  },
  {
    "url": "assets/js/50.123c3bf5.js",
    "revision": "cfcbdb74d44ce3faa39ae2285ae2801c"
  },
  {
    "url": "assets/js/6.fdf120af.js",
    "revision": "75af9a09703de086d1726af6b0af88ba"
  },
  {
    "url": "assets/js/7.70648b16.js",
    "revision": "8044b6f2956ad0a50259c3858f0dcb43"
  },
  {
    "url": "assets/js/8.15dac800.js",
    "revision": "735c02e3c15da778491d2afbe04dbc90"
  },
  {
    "url": "assets/js/9.04df6d42.js",
    "revision": "1c520bd82fc4ee1739a06b205e07a015"
  },
  {
    "url": "assets/js/app.edf077d6.js",
    "revision": "7f6451147c20823b45fbdf7f4a46a394"
  },
  {
    "url": "assets/js/vendors~flowchart.affc8c30.js",
    "revision": "2ace81b4ec00fb6ae3ec8203c3e95471"
  },
  {
    "url": "categories/index.html",
    "revision": "68c8d6ce6a8b0dd0855d84c803454856"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "ad33dbf3024705486051273dd4b8904c"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "312cad4c65bc5fac272e48b39607fd6b"
  },
  {
    "url": "categories/记录/index.html",
    "revision": "58630af5c24db72844c2cd745528dda0"
  },
  {
    "url": "categories/记录/page/2/index.html",
    "revision": "cd525cfa20bb0d41053384e3d8dc2738"
  },
  {
    "url": "categories/记录/page/3/index.html",
    "revision": "792fc41c8925f8d452ea1a4565d14148"
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
    "revision": "59d58090674c8fab802d90abdac2e784"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "66234ac8b835f90f21fdcf5090f8c0bb"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "5f9cd30fe841073e7815a85f30219658"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "b76edbb8524ca802ce37e65c2db7268a"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "dfab00c2c3d9ecf766b1a5078b761533"
  },
  {
    "url": "tag/Foundry/index.html",
    "revision": "a6fde2729ba2358582e56e485125013a"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "92e11d7a3a97cd23522f5bd3c14d6b22"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "cea74505be3d03ca45d575b419a76ccd"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "0a6526433bd4b14c64073dc03024a292"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "22efca8ea2dfef67144c0f1416854e93"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "d95b5339c3d25f3f48ffe8637258b270"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "731d8ae4f5781103192a2cc0cd033fa5"
  },
  {
    "url": "tag/Hardhat/index.html",
    "revision": "b44b701a975b9f868a313622928700ab"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "a8a8a2e8abc35b38fc1eeacecf076d73"
  },
  {
    "url": "tag/index.html",
    "revision": "e4bc7319ac52506b4c3b65f3b7d45ed2"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "799b8427fe26eb926d62af57363913fc"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "153239885911e46bbe474f2ee376b468"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "786e5c1d90664742da11c6d6f7cac75e"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "292f6751448586f1d2043c95347e4424"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "a6d72d369851aee87f730030f922eb29"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "a5a61a290989323511b0f57592d1e92f"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "beb0322487bf29a535977552eb6f0902"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "18fb8f26cebbe7a218a6fbfa9fe64ba9"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "566f8a132acbe2f694b3076569e94ad3"
  },
  {
    "url": "tag/Solidity/index.html",
    "revision": "cbec8e55f92d1a5859b3a433943d78bc"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "598e14918c0d76da9fe033e9dd044320"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "1331830f4a951075b0d9957ce4608af2"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "a24ce815d89e34526df7fd6a2d462922"
  },
  {
    "url": "tag/web3/index.html",
    "revision": "bad5d0cab3d71fcd8be68193d3ae6a8c"
  },
  {
    "url": "tag/书籍/index.html",
    "revision": "e73e9736d46127019b3418ad4357c60a"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "ac331aade54de5184bc89a3c62466b33"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "a46fb374d8f60634a1c923eba6cb850b"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "65015b103916b72e85c1c3ec1309c64a"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "fd63cac98f76ca6b32be2c0dc9b8402f"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "971d390047f944f05f2eb33f25c8e110"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "9b14763ae343a7a1bc4dd5ded02b3c7b"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "d8e36afd83c18d3288d45344f9c75d90"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "bb413ca6579519f7c717cddd70758d43"
  },
  {
    "url": "timeline/index.html",
    "revision": "3e45cb69bb8091ae60d231c59c1e799e"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "a3d54dfcc958b973cd4b606dbc6f638e"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "76d884452bcca4731474268d1d650009"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "73abe890f1c1cfd4ab037862b0da95d0"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "cae3baf3eb09ea30bd2061c24f286aa3"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "204b4c18bbca7779b3e5b697b85bb23a"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "d0b3d7f824c4fe2215b02e3aca0a57ba"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "cf707a690da888fafce45e838df026d9"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "32c8c696bfec745149379b01ccc3fb2e"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "05274685f26a47fd3a5ba7401f45b36e"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "2e3c9d6af9ed89c95134999fbbfb4914"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "f58b5475364927bfb27609763676344c"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "edf7c380022697edcea2194a2b4307ac"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "85604b6ac7bc5693c0b7f4b98809821a"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "2d0520c1118a28260fa1640e6c27d4d7"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "698b7e0ed689d5f9c9f1aa74cb61f568"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "5f00bcde24c70028dbbdf6fd8ff68307"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "84d056dc7afd87a4a2d91bda23a5aa6e"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "615c3df3a737b3e3425fbb0f978286d4"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "21c69cd91b7d1739a3ae951b9529b3be"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "106b97b0490f2d0d366d0085cef81d33"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "6883124b0453c749eedeb4dbbc96288f"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "596413024527f62448b994ad31bbf18d"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "79be5944754e9df152cf9ba3aa2d5541"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "be52f06aea59207748cd5cbb309593d6"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "307d30bacc405a590a44a58eabec5df0"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "69eaa97fd29b8e196df88115e6944fc8"
  },
  {
    "url": "views/other/生活.html",
    "revision": "cb26ceed3e70d0a2c74d4c7bc6a06ec1"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "5cb8cdbc41c589a253c6631396d2047b"
  },
  {
    "url": "views/other/读《微服务设计》笔记.html",
    "revision": "4430c11733f2d3c4fa2227500afdf5ae"
  },
  {
    "url": "views/web3/Foundry.html",
    "revision": "efa10fbd8d1757b35ba3b03a802d7707"
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
