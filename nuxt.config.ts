// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  
  nitro: {
    compressPublicAssets: true,
    vercel: {
      functions: {
        maxDuration: 60,
      }
    }
  },

  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/sass/styles.sass',
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      title: 'Alexandr.pw',
      meta: [
        {
          name: 'description',
          content: '',
        },
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          // href: `/favicon-${domain}.ico`,
       },
      ],
    },
    pageTransition: {
      // name: 'page',
      // mode: 'out-in',
    },
  },

  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL || 'https://alexandr.pw',
    },
  },

  routeRules: {
    '/api/wp-json/**': {
      proxy: {
        // https://alexandr.pw/wp-json/custom/v1/menu/124
        to: `${process.env.BASE_URL}/wp-json/**`,
      },
    },
  },

  router: {
    mode: 'history',
    options: {},
  },
})