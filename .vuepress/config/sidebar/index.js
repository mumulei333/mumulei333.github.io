module.exports = {
  'zh': Object.assign({}, {
    // 配置这个路径使用左导航
    '/views/kubernetes/': [
      {
        title: '环境搭建',
        collapsable: false,
        children: [
          'k8s环境搭建' // 文档的名字
        ]
      },
      {
        title: '实践讲解',
        collapsable: false,
        children: [
          'k8s-deployment详解',
          'k8s-service详解'
        ]
      },
      {
        title: '插件',
        collapsable: false,
        children: [
          'k8s部署Dashboard'
        ]
      }
    ],
    '/views/docker/': [
      {
        title: '安装',
        collapsable: false,
        children: [
          'Ubuntu安装docker'
        ]
      },
      {
        title: '使用',
        collapsable: false,
        children: [
          '数据库服务搭建容器化'
        ]
      },
      {
        title: '仓库搭建',
        collapsable: false,
        children: [
          '镜像仓库harbor搭建'
        ]
      }
    ]
    // ,
    // '/views/blog/': [
    //   {
    //     title: 'GitHub Actions 自动部署博客',
    //     collapsable: true,
    //     children: [
    //       'github-actions'
    //     ]
    //   },
    //   {
    //     title: 'GitHub Actions 时使用 secretKey',
    //     collapsable: true,
    //     children: [
    //       'github-actions-secret-key'
    //     ]
    //   }
    // ]
    ,
    '/views/idea/': [
      {
        title: 'IDEA使用代理的方式激活【适用20版以前的】',
        collapsable: true,
        children: [
          'IDEA使用代理的方式激活'
        ]
      },
      {
        title: 'IDEA无限试用期【终极武器】',
        collapsable: true,
        children: [
          'IDEA无限试用期'
        ]
      }
    ]
  })
}