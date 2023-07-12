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
    "revision": "ce1c7a7162c69ac665ff15adcfa8ebb9"
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
    "url": "assets/js/22.cfd13447.js",
    "revision": "046fe6ef579603e420190866c35b5bf5"
  },
  {
    "url": "assets/js/23.4d0c9d53.js",
    "revision": "1867c007b34a6d799882a956f20ca606"
  },
  {
    "url": "assets/js/24.a161aa78.js",
    "revision": "ebee120cf2548fc40aead06038075303"
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
    "url": "assets/js/48.75c39857.js",
    "revision": "5ea0f3960d1054a45c79d3560e93f878"
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
    "url": "assets/js/app.081aba44.js",
    "revision": "90ac74cdfea09b483c534c36ff33877c"
  },
  {
    "url": "assets/js/vendors~flowchart.affc8c30.js",
    "revision": "2ace81b4ec00fb6ae3ec8203c3e95471"
  },
  {
    "url": "categories/index.html",
    "revision": "78bd51b23bb732cba5ef85b990ee2f3d"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "f48fea766d04b43d6d2ea30e547f803c"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "5ddda7b0b2c476a63c17809658edaf66"
  },
  {
    "url": "categories/记录/index.html",
    "revision": "db3c704f24fc81583e091c2942adc7eb"
  },
  {
    "url": "categories/记录/page/2/index.html",
    "revision": "1d770b3236333ed278090a5304c1b5ab"
  },
  {
    "url": "categories/记录/page/3/index.html",
    "revision": "a04310902e557c9f1e812cbae1a72418"
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
    "revision": "6bace7d218f4fa60afdc1b990e1863e2"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "43e356ce400215ee3ff36bc184f71e0b"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "9b9f5c38f3c5761310ef7ae63717b45a"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "d79addfc17b965a6980ae8ef237208ec"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "54f1de38df5745aa305c9439b342ccd2"
  },
  {
    "url": "tag/Foundry/index.html",
    "revision": "b0579e8f696d26a9d47bb45e67c013cf"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "65d908406a4e7ace4cb36e4602ad1dff"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "15bdc2594019c09271f3a86fea5662d4"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "ebb60b3e56b5ed2fb7aeb3b3d0837e42"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "31c28811651a2878e32c53c3a7cd31d0"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "d6cedca21babd370d4182db6f20dd31e"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "096fbd2b098d53ac5f4a68065e6fab24"
  },
  {
    "url": "tag/Hardhat/index.html",
    "revision": "cc92fbb4a04d6ed345945fd55e475590"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "9920ce1aeebf57b47910b67bd8930fe5"
  },
  {
    "url": "tag/index.html",
    "revision": "7ec8d4f82681b35e4e6e161d3d108ce8"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "90c45a21cfafe38cdc79d3a7db60d0d9"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "80d9807409881f8606f8dd800a87f140"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "75fbebe092f638949ca51a7df41263e0"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "73b04a79ed7a09678ad364498117e701"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "789503e65004a56bb274c94dbcb29c85"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "cd3b00f295864d83e0de0d3949f72246"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "361abbc03c2b7fdb47c5babc7fd2c740"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "ae8d5eeb64415c12e066088f4039171b"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "4bf9983e3c8a2844aaa402651f017da7"
  },
  {
    "url": "tag/Solidity/index.html",
    "revision": "bf366b4c0afba35f7b7213cdf715a590"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "93eef188fb6f254bdfc8d1490fcf6863"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "a85b925b6242e7c88ac3cdf9e931102e"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "628531354377b0e5b0257a946c86e23b"
  },
  {
    "url": "tag/web3/index.html",
    "revision": "73d1cc72d6bcdbd89c015e1e1d5a5e0b"
  },
  {
    "url": "tag/书籍/index.html",
    "revision": "a9365a81751e4bad90848849806a5cc3"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "ee04ee6c8db75f90e50f08aff4e68e14"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "78faed7ba19ce73c64d24bc8739c7e0d"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "da4d8a4b39075f45fc34c160837c6ed3"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "1c491bb16df289393bbe5c4350707f13"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "15098d48eeb1cc82c5d759e26fe681ca"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "b32a608132b207fa81b34b3baf1aa2a6"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "2d8fd45de14ae544d4fb5ffb20be84c9"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "2a3b9fa2b3bf4fbc28444c95a587e29e"
  },
  {
    "url": "timeline/index.html",
    "revision": "61598a82cefe9df39c7390817416e8b9"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "64e967a9a36e4aab359ac3b2f335b2ee"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "129b6118d2486c55f928041d0d3fbb3a"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "7e55a26247b50779640397a52c46e864"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "7113117200e48419e1010b751228f5db"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "c1b9f2370e20888debf9938bb6a63026"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "d3a47c237331154519ffc8879623528c"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "a6383a553aefd4b3f079d4072e55fa42"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "25aecb1e734eab0bf8b5d8e3fa1295a9"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "e335ac4a28d50f3ad70669f1bb562bac"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "dad27894a8f574707f0722fac9f329a1"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "e3584e8a7c28feb850b2c5894777a1ad"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "8123c20f001ca7938b6630e69221e81e"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "5e6ae5e412aa7addd35fd466a2605910"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "4ce6da09e3ddef0745c0b21e468fe098"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "0a97c42113f19395e97ada9c9c39df13"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "f452ec8cc722af0a5840d43a5ee6d46c"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "eb53dbb0b7ed04df6080cca2b8085354"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "d926763a6f31bddf7f71a236a3239f52"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "d618d2dd791b53b2ea2e3a04d988e076"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "2f673269c29dd30ecc22758b440efb9c"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "e07082190007ad6a43f67da861a3a033"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "7f31bd7c7e8c7d6cc64ce7ec78818216"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "9df675c824cc9da0e72b64946e5e557c"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "c4f8366d752fb76cdad37df4ebf583d8"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "45054983f0329daa051038caf233b3b3"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "368f8a71556309384daa27cf9c6f67da"
  },
  {
    "url": "views/other/生活.html",
    "revision": "e2536bf205391238767bbf08065ee580"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "303ad21daecc368d72294d2d37ddf0bb"
  },
  {
    "url": "views/other/读《微服务设计》笔记.html",
    "revision": "1360fbec47a2b9d2ccc681e8230e8a9c"
  },
  {
    "url": "views/web3/Foundry.html",
    "revision": "4541027d933884f6c7f2144a558c2440"
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
