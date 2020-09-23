module.exports = {
  'zh': [
    { text: '推荐',
      icon: 'reco-document',
      items: [
        { 
          text: 'DevOps', items: [
            { text: 'kubernetes', link: '/views/kubernetes/k8s环境搭建.html' },
            { text: 'docker', link: '/views/docker/Ubuntu安装docker.html' }
          ],
        },
        {
          text: '其他', items: [
            { text: '博客', link: '/views/blog/五分钟快速部署自己的博客.html' },
            { text: 'IDEA', link: '/views/idea/IDEA使用代理的方式激活.html' }
          ]
        }
      ]
    },
    { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
    { text: '关于', link: '/?mumu', icon: 'reco-account' },
  ]
}