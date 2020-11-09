module.exports = {
  // 主页风格
  type: 'blog',
  // 页面ico
  logo: '/favicon.ico',
  // 搜索设置
  search: true,
  // 搜索出来的最大文章数
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto',
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: 'MUMU',
  // 作者头像
  authorAvatar: '/mumu_head.jpg',
  // 备案号
  // record: '京ICP备17067634号-1',
  // 项目开始时间
  startYear: '2018',
  // 博客配置
  blogConfig: {
    category: {
      location: 2,     // 在导航栏菜单中所占的位置，默认2
      text: '分类' // 默认文案 “分类”
    },
    tag: {
      location: 3,     // 在导航栏菜单中所占的位置，默认3
      text: '标签'      // 默认文案 “标签”
    }
  },
  // 友情链接
  friendLink: [
    {
      title: 'linkji',
      desc: '❀欲买桂花同载酒，终不似，少年游。',
      email: 'main@jdkhome.com',
      link: 'https://www.jdkhome.com/'
    },
    {
      title: 'Ben',
      desc: 'Coding · Thinking',
      link: 'https://www.ahxiao.com/'
    },
  ],

  // valine 评论以及浏览量
  valineConfig: {
    appId: process.env.VALINE_ID,
    appKey: process.env.VALINE_KEY,
    placeholder: '填写邮箱可以收到回复提醒哦！',
    // 验证码服务
    verify: true,
    // notify: true,
    recordIP: true,
    showComment: false
  },
  // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
  repo: 'mumulei333/mumulei333.github.io',
  // 假如文档不是放在仓库的根目录下：
  docsDir: 'docs',
  // 假如文档放在一个特定的分支下：
  docsBranch: 'gh-pages',
  // 默认是 false, 设置为 true 来启用
  editLinks: true,
  // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
  mode: 'auto',
  // 默认 true，false 不显示模式调节按钮，true 则显示
  modePicker: true,
  // 风格
  codeTheme: 'okaidia'
}