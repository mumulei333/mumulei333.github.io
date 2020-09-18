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
    ],
    '/views/plugins/': [
      {
        title: '插件',
        collapsable: true,
        children: [
          '',
          'backToTop',
          'pagation',
          'screenfull',
          'loadingPage',
          'kanbanniang',
          'comments',
          'extractCode',
          'rss',
          'bgmPlayer'
        ]
      }
    ]
  })
  // ,
  // 'en': Object.assign({}, {
  //   '/en/views/1.x/': [
  //     {
  //       title: 'Basic',
  //       collapsable: false,
  //       children: [
  //         '',
  //         'installUse',
  //         'blog',
  //         'frontMatter'
  //       ]
  //     },
  //     {
  //       title: 'Advanced',
  //       collapsable: false,
  //       children: [
  //         'timeline',
  //         'valine',
  //         'password',
  //         'configJs',
  //         'home',
  //         'notfound',
  //         'mode',
  //         'local',
  //         'codeTheme',
  //         'sidebar'
  //       ]
  //     },
  //     {
  //       title: 'Default Theme Config',
  //       collapsable: false,
  //       children: [
  //         'abstract',
  //         'syntax',
  //         'customStyleAndScript'
  //       ]
  //     },
  //     {
  //       title: 'Other',
  //       collapsable: false,
  //       children: [
  //         'updatetoone',
  //         'recommend'
  //       ]
  //     }
  //   ],
  //   '/en/views/plugins/': [
  //     {
  //       title: 'Plugins',
  //       collapsable: true,
  //       children: [
  //         '',
  //         'backToTop',
  //         'pagation',
  //         'screenfull',
  //         'loadingPage',
  //         'kanbanniang',
  //         'comments',
  //         'extractCode',
  //         'rss',
  //         'bgmPlayer'
  //       ]
  //     }
  //   ]
  // })
}