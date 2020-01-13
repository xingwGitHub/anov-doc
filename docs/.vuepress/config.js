module.exports = {
  title: 'Anov',
  description: '可视化平台开发手册',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  theme: '@vuepress/vue',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' }
    ],
    sidebar: {
      '/api/': getApiSidebar(),
      '/guide/': getGuideSidebar()
    },
    lastUpdated: true,
    editLinkText: '在 GitHub 上编辑此页'
  },
  plugins: [
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }]
  ]
}

function getApiSidebar() {
  return [
    {
      title: 'AI',
      collapsable: false,
      children: ['vfs', 'vrs', 'frs', 'grs', 'lss']
    },
    {
      title: '主题服务',
      collapsable: false,
      children: ['theme']
    },
    {
      title: '数据源服务',
      collapsable: false,
      children: ['data-source']
    },
    {
      title: '音效服务',
      collapsable: false,
      children: ['sound']
    },
    {
      title: '国际化服务',
      collapsable: false,
      children: ['i18n']
    },
    {
      title: '系统检测服务',
      collapsable: false,
      children: ['check']
    },
    {
      title: '布局服务',
      collapsable: false,
      children: ['layout']
    }
  ]
}

function getGuideSidebar() {
  return [
    {
      title: '准备工作',
      collapsable: false,
      children: ['']
    },
    {
      title: '配置项',
      collapsable: false,
      children: ['config']
    },
    {
      title: '使用路由',
      collapsable: false,
      children: ['route']
    }
  ]
}
