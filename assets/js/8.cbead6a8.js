(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{414:function(t,e,s){t.exports=s.p+"assets/img/blog_build01.4c388b60.png"},415:function(t,e,s){t.exports=s.p+"assets/img/blog_build02.725718de.png"},416:function(t,e,s){t.exports=s.p+"assets/img/blog_build03.10952a54.png"},417:function(t,e,s){t.exports=s.p+"assets/img/blog_build04.755a1e72.png"},418:function(t,e,s){t.exports=s.p+"assets/img/blog_build05.45ae6dfb.png"},419:function(t,e,s){t.exports=s.p+"assets/img/blog_build06.6601b724.jpg"},420:function(t,e,s){t.exports=s.p+"assets/img/blog_build07.5b5c76be.png"},421:function(t,e,s){t.exports=s.p+"assets/img/blog_build08.3fc85271.png"},422:function(t,e,s){t.exports=s.p+"assets/img/blog_build09.bec8adc5.jpg"},423:function(t,e,s){t.exports=s.p+"assets/img/blog_build10.f23b2a6a.jpg"},424:function(t,e,s){t.exports=s.p+"assets/img/blog_build11.4c808612.png"},425:function(t,e,s){t.exports=s.p+"assets/img/blog_build12.ff23d483.png"},426:function(t,e,s){t.exports=s.p+"assets/img/blog_build13.600393d1.png"},427:function(t,e,s){t.exports=s.p+"assets/img/blog_build14.f3d832ec.png"},470:function(t,e,s){"use strict";s.r(e);var r=s(2),_=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"获取博客项目模版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取博客项目模版"}},[t._v("#")]),t._v(" 获取博客项目模版")]),t._v(" "),e("p",[t._v("这里可以直接Fork我的博客项目当作博客模版"),e("a",{attrs:{href:"https://github.com/mumulei333/mumulei333.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("mumulei333"),e("OutboundLink")],1),t._v("，如果各位爷今天想中奖那么请给我点个Star吧，我一定会在心中为你祈祷的🙏")]),t._v(" "),e("h2",{attrs:{id:"修改博客项目信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改博客项目信息"}},[t._v("#")]),t._v(" 修改博客项目信息")]),t._v(" "),e("h3",{attrs:{id:"修改项目名称"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改项目名称"}},[t._v("#")]),t._v(" 修改项目名称")]),t._v(" "),e("p",[t._v("将博客项目Fork下来后在项目的主页点击settings，修改项目名称将其改成你github名称的开的.github.io的名称")]),t._v(" "),e("p",[t._v("例如：我的github名称为mumulei333，那么我这个项目的名称则为mumulei333.github.com")]),t._v(" "),e("p",[e("img",{attrs:{src:s(414),alt:"blog_build01"}})]),t._v(" "),e("h3",{attrs:{id:"修改github-pages默认分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改github-pages默认分支"}},[t._v("#")]),t._v(" 修改GitHub Pages默认分支")]),t._v(" "),e("p",[t._v("修改完后往settings页面下面拉到"),e("code",[t._v("GitHub Pages")]),t._v("的功能，为他的默认分支源选择为编译后的博客分支")]),t._v(" "),e("p",[e("code",[t._v("gh-pages")]),t._v("并保存")]),t._v(" "),e("p",[e("img",{attrs:{src:s(415),alt:"blog_build02"}})]),t._v(" "),e("h3",{attrs:{id:"验证配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证配置"}},[t._v("#")]),t._v(" 验证配置")]),t._v(" "),e("p",[t._v("完成了前面两步你已经完成博客搭建了，现在可以去浏览器上看一下你的博客，域名就是你修改过后的项目"),e("code",[t._v("xxxxx.github.io")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(416),alt:"blog_build03"}})]),t._v(" "),e("p",[t._v("怎么样是不是迫不及待的想换上自己的帅气的博客头像还有自己喜欢的妹妹图片墙了🥳，")]),t._v(" "),e("p",[t._v("不用着急去修改gh-pages的分支的编译后的博客文件，下面会更简洁方便的方式告诉你。")]),t._v(" "),e("h2",{attrs:{id:"github-actions自动部署博客"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-actions自动部署博客"}},[t._v("#")]),t._v(" GitHub Actions自动部署博客")]),t._v(" "),e("h3",{attrs:{id:"github-actions优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-actions优势"}},[t._v("#")]),t._v(" GitHub Actions优势")]),t._v(" "),e("p",[t._v("因为我们这边使用的是Github Pages方式管理展示博客，使用 "),e("code",[t._v("master")]),t._v(" 分支管理文章和代码，使用 "),e("code",[t._v("gh-pages")]),t._v(" 分支存放生成的静态文件")]),t._v(" "),e("p",[t._v("一般部署博客的流程是：")]),t._v(" "),e("ol",[e("li",[t._v("本地配置环境")]),t._v(" "),e("li",[t._v("写一篇文章")]),t._v(" "),e("li",[t._v("生成静态文件："),e("code",[t._v("npm run build")])]),t._v(" "),e("li",[t._v("切换 "),e("code",[t._v("gh-pages")]),t._v(" 分支")]),t._v(" "),e("li",[t._v("复制静态文件到 "),e("code",[t._v("gh-pages")]),t._v(" 分支")]),t._v(" "),e("li",[t._v("访问网址验证是否成功")])]),t._v(" "),e("p",[t._v("博客就是用来写文章的，每次写篇文章还要搞那么多操作。这里就有很多不乐意了，说“我才没有这么傻呢，我直接写一个构建部署脚本sh不就行了，为什么一定要用GitHub Actions啊”，是的 写一个构建部署脚本的确可以方便很多，但是最重要的是需要在本地配置环境，这个过程的话就比较费事了，如果更换了电脑或者说在不同的电脑上想重新发布的话那么就需要重新配置环境了。")]),t._v(" "),e("p",[t._v("当你使用了 GitHub Actions 之后，流程可以简化为：")]),t._v(" "),e("ol",[e("li",[t._v("写一篇文章")]),t._v(" "),e("li",[t._v("提交到 GitHub")])]),t._v(" "),e("p",[t._v("无需配置本地环境，只要能够上的了github就可以随时随地发布最新博客。")]),t._v(" "),e("h3",{attrs:{id:"配置github-actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置github-actions"}},[t._v("#")]),t._v(" 配置GitHub Actions")]),t._v(" "),e("p",[t._v("由于我原来项目就已经配置了"),e("code",[t._v(".github/workflows/main.yml")]),t._v("所以这边只要是Fork过来的都只需要打开项目的Actions就行了，文件我这边已经配置完了，这里提一句"),e("code",[t._v(".github/workflows/main.yml")]),t._v("只能在github上修改，如果是拉下去进行本地修改，是提交不了的。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(417),alt:""}})]),t._v(" "),e("p",[t._v("配置完这个后，可以看到"),e("code",[t._v(".github/workflows/main.yml")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(418),alt:""}})]),t._v(" "),e("p",[e("code",[t._v("secrets.ACCESS_TOKEN")]),t._v("：部署需要用到项目token")]),t._v(" "),e("h3",{attrs:{id:"获取access-token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取access-token"}},[t._v("#")]),t._v(" 获取ACCESS_TOKEN")]),t._v(" "),e("p",[t._v("点击用户头像 -> settings -> Developer settings -> Personal access tokens -> Generate new token -> 创建token只需要勾选repo权限即可 -> 保存生成的token")]),t._v(" "),e("p",[e("img",{attrs:{src:s(419),alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(420),alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(421),alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(422),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"配置secrets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置secrets"}},[t._v("#")]),t._v(" 配置Secrets")]),t._v(" "),e("p",[t._v("将上一步获取到的部署token保存下来添加到该项目的Secrets中(注意是你的博客项目中的secrets)，"),e("code",[t._v(".github/workflows/main.yml")]),t._v("就可以识别到了(变量名不要弄错哦)")]),t._v(" "),e("p",[e("img",{attrs:{src:s(423),alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(424),alt:""}})]),t._v(" "),e("p",[t._v("这里提一下"),e("code",[t._v(".github/workflows/main.yml")]),t._v("中的评论插件需要的"),e("code",[t._v("secrets.VALINE_ID")]),t._v("和"),e("code",[t._v("secrets.VALINE_KEY")]),t._v("配置方式也是同理，如果有想要详细了解的可以看下这篇"),e("a",{attrs:{href:"https://mumulei.com/views/blog/github-actions-secret-key.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"部署自己的博客"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署自己的博客"}},[t._v("#")]),t._v(" 部署自己的博客")]),t._v(" "),e("p",[t._v("这里主要讲一下master分支的主要配置以及关键的属性意思")]),t._v(" "),e("h3",{attrs:{id:"结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结构"}},[t._v("#")]),t._v(" 结构")]),t._v(" "),e("p",[e("code",[t._v(".vuepress")]),t._v(" 目录，所有 VuePress 配置以及都放在这个目录下")]),t._v(" "),e("p",[e("code",[t._v(".vuepress/public")]),t._v(" 目录，全部的公共静态资源都放在这个目录下，在编译后这个路径的文件会生成在根目录下。")]),t._v(" "),e("p",[e("code",[t._v(".vuepress/styles")]),t._v(" 目录，用于存放样式相关的文件。")]),t._v(" "),e("p",[e("code",[t._v(".vuepress/config.js")]),t._v(" 文件，是整个VuePress关键配置文件，全部的配置都在这里配置，因为由于配置太多，导致可读性会大大降低所以这边做了一个引用将部分的配置放在了"),e("code",[t._v(".vuepress/config")]),t._v("目录下。")]),t._v(" "),e("p",[e("code",[t._v("views")]),t._v(" 目录，全部的markdown文档都放在这个目录下，当然你也可以不放在这里，我这边只是方便管理。")]),t._v(" "),e("h3",{attrs:{id:"属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),e("p",[t._v("在项目根目录下的"),e("code",[t._v("README.md")]),t._v("文件中配置了首页图片可以自行更改。")]),t._v(" "),e("p",[e("code",[t._v("config.js")]),t._v("文件中的"),e("code",[t._v("locales")]),t._v("对象配置主页的中间的博客名称以及首页的装逼语录")]),t._v(" "),e("p",[e("code",[t._v("config.js")]),t._v("文件中的"),e("code",[t._v("themeConfig")]),t._v("主题风格配置对象，实际目录为"),e("code",[t._v(".vuepress/config/theme/themeReco.js")]),t._v("，其中的"),e("code",[t._v("logo")]),t._v("属性为配置首页的左上角的博客图片的，"),e("code",[t._v("author")]),t._v("属性为作者名称，"),e("code",[t._v("authorAvatar")]),t._v("属性为作者头像。")]),t._v(" "),e("p",[t._v("其他的属性描述也可以直接看"),e("code",[t._v("config.js")]),t._v("文件，我这边"),e("a",{attrs:{href:"https://github.com/mumulei333/mumulei333.github.io/blob/master/.vuepress/config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("项目"),e("OutboundLink")],1),t._v("里都已经全部都写好了注释。")]),t._v(" "),e("p",[t._v("修改完你想要修改的信息("),e("strong",[t._v("本人的博客文章如果你想留的话麻烦标注一下作者及出处 谢谢合作")]),t._v("🤝)后就可以提交到master分支上使用GitHub Actions自动部署了，如果想要看部署情况可以点击到Actions里看部署日志。")]),t._v(" "),e("h3",{attrs:{id:"借鉴"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#借鉴"}},[t._v("#")]),t._v(" 借鉴")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress官方文档"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/1.x/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-reco主题介绍"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"自定义域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义域名"}},[t._v("#")]),t._v(" 自定义域名")]),t._v(" "),e("p",[t._v("这边步购买域名就不再多过描述了，不懂的话可自行百度")]),t._v(" "),e("h3",{attrs:{id:"配置域名dns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置域名dns"}},[t._v("#")]),t._v(" 配置域名DNS")]),t._v(" "),e("p",[t._v("添加一条CHAME记录，对应映射的就是你的github博客项目地址")]),t._v(" "),e("p",[e("img",{attrs:{src:s(425),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"配置github-page映射域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置github-page映射域名"}},[t._v("#")]),t._v(" 配置github Page映射域名")]),t._v(" "),e("p",[e("img",{attrs:{src:s(426),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"博客日常维护"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#博客日常维护"}},[t._v("#")]),t._v(" 博客日常维护")]),t._v(" "),e("h3",{attrs:{id:"发布博客文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布博客文章"}},[t._v("#")]),t._v(" 发布博客文章")]),t._v(" "),e("p",[t._v("你可以选择在根目录下"),e("code",[t._v("views")]),t._v("的文件中添加自己的文章Markdown，也可以自行重建一个目录都行。")]),t._v(" "),e("p",[t._v("Markdown格式和你原本写好的格式没有什么区别，只是在md文件上方添加一些了参数")]),t._v(" "),e("p",[e("img",{attrs:{src:s(427),alt:""}})]),t._v(" "),e("p",[e("code",[t._v("title")]),t._v(" : 博客文章标题")]),t._v(" "),e("p",[e("code",[t._v("date")]),t._v(" : 博客文章发布时间")]),t._v(" "),e("p",[e("code",[t._v("author")]),t._v(" : 博客文章作者，不填的话默认会使用"),e("code",[t._v("config.js")]),t._v("文件中的"),e("code",[t._v("author")]),t._v("属性")]),t._v(" "),e("p",[e("code",[t._v("isShowComments")]),t._v(" : 文章是否显示评论插件以及浏览量")]),t._v(" "),e("p",[e("code",[t._v("tags")]),t._v(" : 博客文章的标签，用于博客的标签统计")]),t._v(" "),e("p",[e("code",[t._v("categories")]),t._v(" : 博客文章的类型，用于博客的类型统计")]),t._v(" "),e("h3",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),e("p",[t._v("其他的详细属性以及插件使用可以查看vuepress官方文档以及reco主题文档")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/config/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress官方文档"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/1.x/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-reco主题风格文档"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=_.exports}}]);