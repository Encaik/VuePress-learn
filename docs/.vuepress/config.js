module.exports = {
  title: 'Encaik',
  description: '个人技术文档归纳网页',
  dest: 'docs/.vuepress/Encaik-Pages',
  base: '/Encaik-Pages/',
  head: [
    ['link', { rel: 'icon', href: '/img/icon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '博文', link: '/blog/' },
      {
        text: '前端开发',
        items: [
          { text: 'HTML', items: [
            {text: 'HTML5', link: '/front-end/html/html5/'}
          ] },
          { text: 'CSS', items: [
            {text: 'CSS3', link: '/front-end/css/css3/' },
            {text: 'SCSS', link: '/front-end/css/scss/' },
          ] },
          { text: 'JS', items: [
            {text: 'ES5', link: '/front-end/js/' }
          ] },
          { text: '框架', items: [
            {text: 'Vue.js', link: '/front-end/vue/' }
          ] },
        ]
      },
      {
        text: '后端开发',
        items: [
          { text: '语言', items: [
            {text: 'Python', link: '/back-end/python/' }
          ] },
          { text: '框架', items: [
            {text: 'Django', link: '/back-end/django/' }
          ] },
        ]
      },
      { text: '杂记', link: '/note/' },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/Encaik' },
    ],
    sidebar: {
      "/front-end/html/html5": [
        ""
      ],
      "/front-end/css/css3": [
        ""
      ],
      "/front-end/css/scss": [
        ""
      ],
      "/front-end/js/": [
        ""
      ],
      "/front-end/vue/": [
        "",
        "vue-cil",
        "vuepress",
      ],
    },
    sidebarDepth: 2,
    lastUpdated: '发布日期',
  },
  serviceWorker: true,
};
