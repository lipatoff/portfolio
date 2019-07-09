import axios from 'axios'

export default {
  mode: 'universal',
  //mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:type', name: 'og:type', content: 'site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,500&display=swap' }
    ]
	},

	/*
	** Animation
	*/
  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/sass/style.sass', lang: 'sass' },
  ],
  styleResources: {
    sass: [
     '~/assets/sass/_settings.sass',
    ],
   },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/app-components.js',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
	],
	/*
	** Routing
	*/
  router: {
    base: process.env.NODE_ENV === 'production' ? '/blog-nuxt/' : '/',
    linkActiveClass: 'active',
    linkExactActiveClass: '',
  },
  /*
  ** Build configuration
  */
  build: {
	  vendor: [
      'vue',
      'axios'
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
