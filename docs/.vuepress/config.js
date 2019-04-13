module.exports = {
  title: 'Encaik',
  description: '个人技术文档归纳网页',
  dest: 'docs/.vuepress/Encaik-Pages',
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
          { text: 'Node.js', link: '/fore-end/node/'},
          { text: 'Sass', link: '/fore-end/sass/'},
        ]
      },
      {text: '后端开发',
        items: [
          { text: 'Django', link: '/back-end/django/' },
          { text: '爬虫', link: '/back-end/crawler/' },
        ]
      },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/Encaik' },
    ],
    sidebar: {
      "/fore-end/html/": [
      ],
      "/fore-end/css/": [
      ],
      "/fore-end/js/": [
        "ES",
        "CommondJs"
      ],
      "/fore-end/vue": [
      ],
      "/fore-end/node": [
      ],
      "/fore-end/sass": [
      ],
    },
    sidebarDepth: 2,
    lastUpdated: '发布日期',
  },
  serviceWorker: true,
};
