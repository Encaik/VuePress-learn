module.exports = {
  title: 'Encaik',
  description: '个人技术文档归纳网页',
  head: [
    ['link', { rel: 'icon', href: '/img/icon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      {text: '博文',
        items: [
          { text: 'android', link: '/android/' },
          { text: 'ios', link: '/ios/' },
          { text: 'web', link: '/web/' }
        ]
      },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/Encaik' },
    ],
    sidebar: {
      '/android/': [
        "xposed",
        "google",
      ],
      "/ios/": [
        "appstore",
        "swift",
      ],
      "/web/": [
        "vue",
        "webpack",
      ],
    },
    sidebarDepth: 1,
    lastUpdated: 'Last Updated',
  },
  serviceWorker: true,
};
