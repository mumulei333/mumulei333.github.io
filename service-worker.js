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
    "revision": "a059229e59310eaaf529991dc4d1b29c"
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
    "url": "assets/js/1.a140cc86.js",
    "revision": "213e00e06030c054188cccac7e179c61"
  },
  {
    "url": "assets/js/10.6684bcab.js",
    "revision": "a048a2b7935b6e85db1cca5e432b9885"
  },
  {
    "url": "assets/js/11.c2403b2e.js",
    "revision": "565d3be5f03ce45d1a4c8f30b6290362"
  },
  {
    "url": "assets/js/12.b8206a8b.js",
    "revision": "8e4775729e2379e9a9c95673bd9bb598"
  },
  {
    "url": "assets/js/13.1cd923bc.js",
    "revision": "c242451731c6e543cd70c3de53a21afe"
  },
  {
    "url": "assets/js/14.195d445a.js",
    "revision": "0f72442a713499b8da75c1754f56f268"
  },
  {
    "url": "assets/js/15.19b757a5.js",
    "revision": "532ee4a4603b5fe4047616adfa21097c"
  },
  {
    "url": "assets/js/16.7770d159.js",
    "revision": "835701724e4652e88adb267246c383da"
  },
  {
    "url": "assets/js/17.d6eee69f.js",
    "revision": "509fdc77654e20078934c16031cb9131"
  },
  {
    "url": "assets/js/18.1a1c5e30.js",
    "revision": "2f28fb7d1a668cfb527154da8af1bf06"
  },
  {
    "url": "assets/js/19.99063d74.js",
    "revision": "0e37fd0684209c140904f7218d129c43"
  },
  {
    "url": "assets/js/2.2b809728.js",
    "revision": "dffff16e76cb4c08a79a5819ac053ce5"
  },
  {
    "url": "assets/js/20.772255e7.js",
    "revision": "77e2dd26d82b211dcb9903b6865ea9ba"
  },
  {
    "url": "assets/js/21.d3fc02fb.js",
    "revision": "844753a83e154b3a42a7ad27347c17d7"
  },
  {
    "url": "assets/js/22.9a38c30a.js",
    "revision": "650f8407d8ce50094da2ae7cb3db7e19"
  },
  {
    "url": "assets/js/23.8d23bfc3.js",
    "revision": "5a8d3a1ab4076923042656f2c26b62eb"
  },
  {
    "url": "assets/js/24.9e3afee7.js",
    "revision": "b3721513c6439dfc2a1faa3a3e347187"
  },
  {
    "url": "assets/js/25.48303640.js",
    "revision": "ff43efac9bae2d948fe36b7dde551a5f"
  },
  {
    "url": "assets/js/26.5d8b0171.js",
    "revision": "fd4824b9ddf870f13c2d443bf07a1a4a"
  },
  {
    "url": "assets/js/27.a26135a6.js",
    "revision": "2d35a27093e4652f125433d422a301a6"
  },
  {
    "url": "assets/js/28.a31b780e.js",
    "revision": "61341defd1d978c14d6b7abe33f714b6"
  },
  {
    "url": "assets/js/29.1f2e93da.js",
    "revision": "522a90c217251ebf6a0a6e7b456437ca"
  },
  {
    "url": "assets/js/30.1a2872ca.js",
    "revision": "8d7ec4d819af3ca9e9221d14fd6bd1ac"
  },
  {
    "url": "assets/js/31.3d59baea.js",
    "revision": "bc0f80f5553e549546a92b2642b1d385"
  },
  {
    "url": "assets/js/32.e92fe616.js",
    "revision": "9237b34c72700175039423c7b9ad45ad"
  },
  {
    "url": "assets/js/33.250bee95.js",
    "revision": "9c10ca9e1938a5be91a0d306d5359ec2"
  },
  {
    "url": "assets/js/34.711b5128.js",
    "revision": "c2aeec3a0c8b71e9a997e27215516dd2"
  },
  {
    "url": "assets/js/35.1732d4f3.js",
    "revision": "18153fa06d44a0bab24b6f0116d32d16"
  },
  {
    "url": "assets/js/36.74a87940.js",
    "revision": "bb2ac9bf4bbb3fd8631a2996ef3a6d6d"
  },
  {
    "url": "assets/js/37.94fbc625.js",
    "revision": "55b1bc046ead8c9e3a79189353618091"
  },
  {
    "url": "assets/js/38.8cf00c73.js",
    "revision": "78934466d0f77959e6239f0f3a43fb67"
  },
  {
    "url": "assets/js/39.f41a906d.js",
    "revision": "4483f018ee8dd7788085d487f5e9f699"
  },
  {
    "url": "assets/js/40.e814b397.js",
    "revision": "afe4db199217092d04f6d6a78683b90a"
  },
  {
    "url": "assets/js/41.8e095427.js",
    "revision": "6dee460152c41c6e6848bf8f0d77be8d"
  },
  {
    "url": "assets/js/42.40bfdc14.js",
    "revision": "09073a4ee51f1e7fd97bc90ecc21b5fa"
  },
  {
    "url": "assets/js/43.82276f08.js",
    "revision": "1eb703950fc2489c60e60eeeaaa9ae72"
  },
  {
    "url": "assets/js/44.3328a51d.js",
    "revision": "de844286b5676d1a72418e0ecb055345"
  },
  {
    "url": "assets/js/45.7e7cc6c9.js",
    "revision": "0f8ec1fc0db2c16c4951ce6306ed3f3b"
  },
  {
    "url": "assets/js/46.01b97de0.js",
    "revision": "bdff584472481f8f456f68e6f59793ee"
  },
  {
    "url": "assets/js/47.613d2c38.js",
    "revision": "d935aa1e6149fa679346bcceffb6931b"
  },
  {
    "url": "assets/js/48.7df8253e.js",
    "revision": "837a0d49401699a7b336248eee60e507"
  },
  {
    "url": "assets/js/49.829ac10e.js",
    "revision": "e6c5a0984ac73886c7149a9acba0cb24"
  },
  {
    "url": "assets/js/6.a7729020.js",
    "revision": "c8721557e417f288ecfff33978a5b102"
  },
  {
    "url": "assets/js/7.08e4e7f4.js",
    "revision": "7ee979ec925d2454059c1f968c9e4fb6"
  },
  {
    "url": "assets/js/8.a3a7cd3b.js",
    "revision": "17810d59d095078f6273ddf46a3a73d7"
  },
  {
    "url": "assets/js/9.58725af0.js",
    "revision": "a930d058bc3b9ec49611fddcbcc67b14"
  },
  {
    "url": "assets/js/app.a08ccf8f.js",
    "revision": "9b7a92db71f11f14aa312a7faefbf44e"
  },
  {
    "url": "assets/js/vendors~docsearch.873febc0.js",
    "revision": "87a6bcf2bfcce1fd22e9050a337331f3"
  },
  {
    "url": "assets/js/vendors~flowchart.dd8599e2.js",
    "revision": "27dc321253b69584c1bc0aacb29c24d5"
  },
  {
    "url": "blogImages/Leecason.png",
    "revision": "7c60fbffa793a1cb7dd2aacb913050b6"
  },
  {
    "url": "categories/index.html",
    "revision": "448681f237ef8ac46179b2ff440fecb2"
  },
  {
    "url": "categories/学习/index.html",
    "revision": "3db7dde190d1ca8f289643ffabb1ddf6"
  },
  {
    "url": "categories/学习/page/2/index.html",
    "revision": "0eebee22869b8130d974179c78d65d7c"
  },
  {
    "url": "categories/学习/page/3/index.html",
    "revision": "27ab6a2d1e24a6556bd6537982ab989b"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "afadb01c2ba1da40aa20d4397dda529c"
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
    "revision": "92d505b3a2e2a5219b48dd27f9c2b6e8"
  },
  {
    "url": "mumu_head.jpg",
    "revision": "3f1fccf1cf0875161eb70014f5f80211"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "48dcc06b40bb197fd9c687491f74863b"
  },
  {
    "url": "tag/Dashboard/index.html",
    "revision": "9d6c70e098f89f079bff00e282fdd790"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "78a42a6dd2bb3e66185b25b203b62923"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "bba58f3484bf01607ab09e1364a268af"
  },
  {
    "url": "tag/Frp/index.html",
    "revision": "f2f83e392386ec51cd5b813e8bf0e5b2"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "1d30b7d0b5183479e2856345cc2774b7"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "d5d007759a2fd57b4bee9ab9a3ca1781"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "6fdcbc7ead5df8276df8c76dc4d267bb"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "f913673a9d9551ade98f3a9753d66d2f"
  },
  {
    "url": "tag/Harbor/index.html",
    "revision": "a6180271f6f7d8e2bb9675bdc6a17a9e"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "4e84526ee704fc3f85ad577ddebe6692"
  },
  {
    "url": "tag/index.html",
    "revision": "7591cea2cc235ffef7d5ea6d302ca4b4"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "71ca1204c5898fd8aa33fa583c118da5"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "c7dc45869620c139278c334c1e668de6"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "ed308e900f9162fa3da955fcffb14006"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "5789a2998301e66bfd4d0a79e412c3b3"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "6636ef0f19b2bf534b6a252fce563be3"
  },
  {
    "url": "tag/Openssl/index.html",
    "revision": "a86bc5b3d7a8db19276f80c918891db6"
  },
  {
    "url": "tag/RabbitMq/index.html",
    "revision": "e6bd93cb4379a880a162cb62b83de080"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "60e8be2746cae5ba60e4ce2510850dec"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "d9a96b68f8698eb0766a56dfbd1273d6"
  },
  {
    "url": "tag/SSL证书/index.html",
    "revision": "ee32299a3bd99c9c328840795da02b03"
  },
  {
    "url": "tag/Ubuntu/index.html",
    "revision": "408b2d081a860c0e8e5cfd4e170abbf0"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "d94aa80cda993def86cfdf8b24a761bd"
  },
  {
    "url": "tag/开发技巧/index.html",
    "revision": "8a7ab3da3abd4fc35c12d5ea37f15615"
  },
  {
    "url": "tag/效率/index.html",
    "revision": "4ed2bcbac45f70dd5df48c5426326634"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "0322d65677388ae88ffa1e10b8b05c48"
  },
  {
    "url": "tag/无聊/index.html",
    "revision": "0a0c0389cf362155bdb65420ce737798"
  },
  {
    "url": "tag/消息中间件/index.html",
    "revision": "ba86b1a5b32f3ba115bde0c1c74da871"
  },
  {
    "url": "tag/疑难杂症/index.html",
    "revision": "afeff330b4d1a9531be2d45d6c28de02"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "5a43b9a9fae7465ade54c8c0a5418e95"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "0c0519aca2718e37ab275409040e0737"
  },
  {
    "url": "timeline/index.html",
    "revision": "d3108d0a11bf3d0f60e44158dc095d02"
  },
  {
    "url": "views/blog/github-actions-secret-key.html",
    "revision": "63ac68432dbaa7820744f15681c81c85"
  },
  {
    "url": "views/blog/github-actions.html",
    "revision": "7ac9879eb55099f12da2f67fcbd41822"
  },
  {
    "url": "views/blog/五分钟快速部署自己的博客.html",
    "revision": "ee715af3e4a88320579e06fc2c731614"
  },
  {
    "url": "views/docker/Ubuntu安装docker.html",
    "revision": "51690aad2473a60f0811bda02d0f6be9"
  },
  {
    "url": "views/docker/数据库服务搭建容器化.html",
    "revision": "d8cd2b9e5ab2e27b5c91baddd1c4dc6b"
  },
  {
    "url": "views/docker/镜像仓库harbor搭建.html",
    "revision": "7442450d40bdb92156f94e29714e0c2c"
  },
  {
    "url": "views/idea/IDEA使用代理的方式激活.html",
    "revision": "eccb9fe440c61ab67185066387a71971"
  },
  {
    "url": "views/idea/IDEA无限试用期.html",
    "revision": "c39d28337eb9c69ca2d095920e4ea051"
  },
  {
    "url": "views/kubernetes/k8s-deployment详解.html",
    "revision": "2b7d6ed6d20c15a681a29c40c35daa96"
  },
  {
    "url": "views/kubernetes/k8s-service详解.html",
    "revision": "f4cae15fd1c10d7faef01b9595a75512"
  },
  {
    "url": "views/kubernetes/k8s环境搭建.html",
    "revision": "7dfc19725c47d7285d40916931f71a52"
  },
  {
    "url": "views/kubernetes/k8s部署Dashboard.html",
    "revision": "683dc42fb7e79406961462c46c3de871"
  },
  {
    "url": "views/other/frp实现内网穿透.html",
    "revision": "bb1b935a92b7109f3dcc342c2b656daf"
  },
  {
    "url": "views/other/Git-代码回滚.html",
    "revision": "230f6fbdf74de46ff0a44eb6bfd5d00e"
  },
  {
    "url": "views/other/Git指令整理.html",
    "revision": "5db0f5463b5ebdcde98b159430c66c0a"
  },
  {
    "url": "views/other/Jenkins搭建容器化.html",
    "revision": "b1d5a2d251df5fdcd963f72d76c3b954"
  },
  {
    "url": "views/other/Mac便捷指令.html",
    "revision": "aeb8424892f7b358fc0a8c3075c33978"
  },
  {
    "url": "views/other/openssl生成自签名证书.html",
    "revision": "5b20717c569ab5a9e552cfcfeecda560"
  },
  {
    "url": "views/other/Ubuntu固定内网IP.html",
    "revision": "705d710b450b2de39e506861c2f5be6b"
  },
  {
    "url": "views/other/Ubuntu安装Jenkins.html",
    "revision": "1c51cc18b73d5da5e739d9a3dff85f20"
  },
  {
    "url": "views/other/Ubuntu安装MongoDB.html",
    "revision": "70eb4d9759fa6dc8f02fcb3079ff3f11"
  },
  {
    "url": "views/other/Ubuntu安装Mysql.html",
    "revision": "f2a3a505a78213c90b5cce2e25d6495a"
  },
  {
    "url": "views/other/Ubuntu安装RabbitMq.html",
    "revision": "d49435f754b8d1afc822a9cbb7769977"
  },
  {
    "url": "views/other/Ubuntu安装Redis.html",
    "revision": "04536a83148056c452a884d2ea5f6bd6"
  },
  {
    "url": "views/other/使用-.gitignore-忽略-git-仓库中的文件.html",
    "revision": "2194c64162a4cb19cf239f6d60c9b3cb"
  },
  {
    "url": "views/other/文件目录树状(tree)显示.html",
    "revision": "4e46b32594ccf4f14668d2ddeed91bed"
  },
  {
    "url": "views/other/生活.html",
    "revision": "0478f5a92de7dc693d556825610644d8"
  },
  {
    "url": "views/other/记录一次jenkins构建是失败案例.html",
    "revision": "f9dbc1df5dfa92af5d4d02504d746ae6"
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
