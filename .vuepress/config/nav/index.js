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
            { text: '博客', link: '/views/blog/' },
            { text: 'IDEA', link: '/views/idea/' }
          ]
        }
      ]
    },
    { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
    { text: '关于', link: '/?mumu', icon: 'reco-account' },
  ]
}