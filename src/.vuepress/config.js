module.exports = {
  base: '/mbs-budgie/',
  dest: 'docs/',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'まばさしの開発記録',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Intel NUC と Ubuntu Budgie を使った構築メモ',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['sidebar'],
    [
      '@vuepress/google-analytics',
      { 'ga': '' } // UA-00000000-0
    ]
  ]
}
