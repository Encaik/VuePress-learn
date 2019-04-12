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
      {text: '前端开发',
        items: [
          { text: 'HTML', link: '/fore-end/html/' },
          { text: 'CSS', link: '/fore-end/css/' },
          { text: 'JavaScript', link: '/fore-end/js/'},
          { text: 'Vue.js', link: '/fore-end/vue/'},
          { text: 'webpack', link: '/fore-end/webpack/'},
          { text: 'sass', link: '/fore-end/sass/'},
        ]
      },
      {text: '后端开发',
        items: [
          { text: 'html', link: '/back-end/html/' },
          { text: 'css', link: '/back-end/css/' },
          { text: 'js', link: '/back-end/js/'}
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
      "/web/html/": [
      ],
      "/web/css/": [
      ],
      "/web/js/": [
        "vue",
        "webpack",
      ],
    },
    sidebarDepth: 1,
    lastUpdated: 'Last Updated',
  },
  serviceWorker: true,
};
