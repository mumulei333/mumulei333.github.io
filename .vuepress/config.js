const path = require('path')
const themeConfig = require('./config/theme/')

module.exports = {
  // base: '/blog/',
  // dest: 'public', 默认生成路径.vuepress/dist
  head: [
    // 浏览器窗口icon图标
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'author', content: 'MUMU' }],
    ['meta', { name: 'keywords', content: 'vuepress,k8s,docker,java,容器,MUMU,mumulei,blog' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon_vuepress_reco.png' }],
    ['link', { rel: 'mask-icon', href: '/icon_vuepress_reco.svg', color: '#42b983' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icon_vuepress_reco.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  // 设置vuepress自定义主题
  theme: 'reco',
  // 主题风格
  themeConfig,
  // 首页配置
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: "MUMU",
      description: '人生的路途，只有不断的回顾和总结才会继续走下去'
    }
  },
  // markdown配置
  markdown: {
    // lineNumbers: true
  },

  // 插件
  plugins: [
    '@vuepress-reco/extract-code',
    'flowchart',

    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
    }],

    ['@vuepress/google-analytics',{
        ga: 'UA-149716079-2'
    }],

    ['@vuepress/plugin-register-components',{
        components: [
          {
            name: 'reco-home-page-one',
            path: path.resolve(__dirname, './components/HomePageOne.vue')
          }
        ],
        componentsDir: path.resolve(__dirname, './demo')
    }],

    ['@vuepress-reco/rss', {
      site_url: 'https://vuepress-theme-reco.recoluan.com',
      copyright: ''
    }]

  ]
}  
