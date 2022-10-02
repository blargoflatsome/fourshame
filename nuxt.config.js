import postcssPresetEnv from 'postcss-preset-env'
import postcssEasingGradients from 'postcss-easing-gradients'
import * as SITE_INFO from './content/site/info.json'

export default {
  target: 'static',
  components: true,
  generate: {
    fallback: true
  },
  // ? The env Property: https://nuxtjs.org/api/configuration-env/
  env: {
    url:
      process.env.NODE_ENV === 'production'
        ? process.env.URL || 'http://createADotEnvFileAndSetURL'
        : 'http://localhost:3000',
    lang: SITE_INFO.sitelang || 'en-US'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: SITE_INFO.sitename || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: SITE_INFO.sitedescription || ''
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://www.fourshame.com/img/hp-banner-1.png'
      },
    ],
    script: [
      {
        src: "https://identity.netlify.com/v1/netlify-identity-widget.js"
      }
    ],
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap',
        media: 'print',
        onload: `this.media='all'`
      }
    ], // ? Imports the font 'Inter', can be optimized by the netlify plugin 'Subfont' by uncommenting it in `netlify.toml`
    noscript: [
      {
        innerHTML:
          '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap">'
      }
    ],
    __dangerouslyDisableSanitizers: ['noscript']
  },
  router: {
    extendRoutes(routes, resolve) {
      return [
        ...routes,
        {
          name: 'location',
          path: '/locations/:article',
          props: {
            pageType: 'location',
          },
          component: resolve(__dirname, 'pagesCustom/articles.vue'),
          chunkName: 'pages/locations',
        },
        {
          name: 'cosmology',
          path: '/cosmology/:article',
          props: {
            pageType: 'cosmology',
          },
          component: resolve(__dirname, 'pagesCustom/articles.vue'),
          chunkName: 'pages/cosmology',
        },
        {
          name: 'general',
          path: '/general/:article',
          props: {
            pageType: 'general',
          },
          component: resolve(__dirname, 'pagesCustom/articles.vue'),
          chunkName: 'pages/generals',
        },
        {
          name: 'setting',
          path: '/setting/:article',
          props: {
            pageType: 'setting',
          },
          component: resolve(__dirname, 'pagesCustom/articles.vue'),
          chunkName: 'pages/setting',
        },
        {
          name: 'roudgara-campaign',
          path: '/roudgara-campaign/:article',
          props: {
            pageType: 'roudgara-campaign',
          },
          component: resolve(__dirname, 'pagesCustom/articles.vue'),
          chunkName: 'pages/roudgara-campaign',
        },
        {
          name: 'blog',
          path: '/blog/:article',
          props: {
            pageType: 'blog',
          },
          component: resolve(__dirname, 'pagesCustom/articles.vue'),
          chunkName: 'pages/blogs',
        },
        {
          name: 'houserules',
          path: '/houserules/:article',
          props: {
            pageType: 'houserule',
          },
          component: resolve(__dirname, 'pagesCustom/articles.vue'),
          chunkName: 'pages/house-rules',
        },
      ]
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#526488' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.pcss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-content-placeholders.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@nuxtjs/svg', '@nuxtjs/pwa'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', '@nuxtjs/markdownit', 'nuxt-purgecss', 'vue-scrollto/nuxt'],
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-preset-env': postcssPresetEnv({
          stage: 1,
          features: {
            'nesting-rules': false
          }
        }),
        'postcss-easing-gradients': postcssEasingGradients
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  },
  /*
   ** Custom additions configuration
   */
  // ? The content property: https://content.nuxtjs.org/configuration
  content: {
    dir: 'content'
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    runtime: true, // Support `$md()`
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  },
  tailwindcss: {
    viewer: false, // disabled because it causes `Error: Cannot find module 'tailwindcss/resolveConfig'`, fixed in https://github.com/nuxt-community/tailwindcss-module/pull/303
    cssPath: '~/assets/css/main.pcss',
    exposeConfig: false // enables `import { theme } from '~tailwind.config'`
  },
  purgeCSS: {
    mode: 'postcss',
    // ? Safelisting docs: https://purgecss.com/safelisting.html
    safelist: {
      // standard: [],
      deep: [/dark/, /light/, /btn/, /icon/, /main/],
      greedy: [
        /^card/,
        /image$/,
        /title$/,
        /^nuxt-content/,
        /code/,
        /pre/,
        /token/,
        /^vue-content-placeholders/
      ]
    }
  },
  pwa: {
    icon: {
      source: 'static/icon.png',
      filename: 'icon.png'
    },
    manifest: { name: SITE_INFO.sitename || process.env.npm_package_name || '', lang: process.env.lang },
    meta: {
      name: SITE_INFO.sitename || process.env.npm_package_name || '',
      lang: process.env.lang,
      ogHost: process.env.URL,
      ogImage: '/preview.jpg'
    }
  }
}
