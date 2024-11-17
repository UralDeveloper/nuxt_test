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
  
      script: [
        {
          key: 'ymap',
          type: 'text/javascript',
          async: true,
          // src: `https://api-maps.yandex.ru/2.1/?apikey=d6cd6610-1c47-469b-a0a8-d3837c41887f&lang=ru_RU&load=Map,Placemark,GeoObject&coordorder=longlat`,
          // src: `https://api-maps.yandex.ru/2.1/?apikey=${process.env.YMAPS_KEY}&lang=ru_RU&coordorder=longlat`,
        },
        {
          key: 'bootstrap',
          type: 'text/javascript',
          async: true,
          src: './assets/js/bootstrap.min.js',
        },
        {
          key: 'fancybox',
          type: 'text/javascript',
          async: true,
          src: './assets/js/fancybox.umd.js',
        },
        {
          key: 'swiper',
          type: 'text/javascript',
          async: true,
          src: './assets/js/swiper-bundle.min.js',
        },
        {
          key: 'script',
          type: 'text/javascript',
          async: true,
          src: './assets/js/script.js',
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