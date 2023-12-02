export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    protocol: 'ws',
    host: "0.0.0.0",
    port: 3000
  },
  head: {
    title: 'pr-nuxt',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  target: 'static',

  dir: {
    pages: 'components/pages',
    layouts: 'components/layouts',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/less/fonts.less',
    '@/assets/less/color-modes.less',
    '@/assets/less/common.less'
  ],

  colorMode: { preference: 'light' },

  styleResources: {
    less: [
      './assets/less/const.less',
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // убрать
    '@nuxtjs/color-mode',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources'
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
