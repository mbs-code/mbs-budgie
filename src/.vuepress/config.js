module.exports = {
  base: '/mbs-budgie/',
  dest: 'docs/',

  title: 'まばさしの開発記録',
  description: 'Intel NUC と Ubuntu Budgie を使った構築メモ',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-0PKJYNP7MQ'}],
    ['script', {}, [
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-0PKJYNP7MQ');",
    ]],
  ],

  config: (md) => {
    md.options.linkify = true
  },

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      'sidebar', {
        grouping: true,
        groupOptions: {
          collapsable: false,
          sidebarDepth: 2,
        },
      }
    ],
  ],
}
