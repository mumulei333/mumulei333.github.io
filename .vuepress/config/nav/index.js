module.exports = {
  'zh': [
    { text: '推荐',
      icon: 'reco-document',
      items: [
        { 
          text: 'DevOps', items: [
            { text: 'kubernetes', link: '/views/kubernetes/' },
            { text: 'docker', link: '/views/docker/' }
          ],
        },
        {
          text: '其他', items: [
            { text: '博客', link: '/views/plugins/index.html' },
            { text: 'IDEA', link: '/views/other/recommend.html' }
          ]
        }
      ]
    },
    { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
    { text: '关于', link: '#', icon: 'reco-account' },
  ]
  // ,
  // 'en': [
  //   { text: 'Documents',
  //     icon: 'reco-api',
  //     items: [
  //       {
  //         text: 'Theme', items: [
  //           { text: '1.x', link: '/en/views/1.x/' }
  //         ],
  //       },
  //       {
  //         text: 'Plugin', items: [
  //           { text: 'plugin', link: '/en/views/plugins/' }
  //         ]
  //       }
  //     ]
  //   },
  //   { text: 'FAQ', link: '/en/views/other/question', icon: 'reco-faq' },
  //   { text: 'Examples', link: '/en/views/other/theme-example.html', icon: 'reco-category'},
  //   { text: 'RSS', link: 'https://vuepress-theme-reco.recoluan.com/rss.xml', icon: 'reco-rss'},
  //   { text: 'GitHub', link: 'https://github.com/vuepress-reco/vuepress-theme-reco', icon: 'reco-github'}
  // ]
}