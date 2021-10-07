const mainTitle = "Susy - Seamless multichain transfers";

const shortDescription = "SuSy is a multichain bridge leveraging the Wormhole protocol.";

const url = "https://mesh.susy.one";

const previewImagePath = url+"/preview.jpg";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: mainTitle,
    htmlAttrs: {
      lang: "en-US"
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: "keywords",
        content:
          "blockchain, crosschain, interchain, oracles, datafeeds, waves, ethereum, bitcoin, gateways, consensus, smartcontract, ride, solidity"
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: shortDescription },
      { name: 'format-detection', content: 'telephone=no' },
      {
        content: mainTitle,
        property: "og:title"
      },
      {
        content: url,
        property: "og:url"
      },
      {
        content: "Susy",
        property: "og:site_name"
      },
      {
        property: "og:image",
        content: previewImagePath
      },
      {
        content: "Susy",
        property: "twitter:site"
      },
      {
        content: mainTitle,
        property: "twitter:title"
      },
      {
        property: "twitter:image",
        content: previewImagePath
      },
      {
        property: "twitter:image:src",
        content: previewImagePath
      },
      {
        property: "twitter:card",
        content: "summary_large_image"
      },
      {
        content: "all",
        name: "robots"
      },
      {
        content: "website",
        property: "og:type"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
      },
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      },
      {
        name: "format-detection",
        content: "email=no"
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Montserrat:wght@400;500;600;700&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/css/app.pcss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://tailwindcss.nuxtjs.org/setup
    '@nuxtjs/tailwindcss',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/juliomrqz/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images',
    // https://github.com/fumeapp/nuxt-storm
    'nuxt-storm',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ["nuxt-rfg-icon", { masterPicture: "static/favicon.svg" }],
    "@nuxtjs/manifest",
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://www.npmjs.com/package/@nuxtjs/svg-sprite
    '@nuxtjs/svg-sprite',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
        'postcss-import': {},
        'postcss-pxtorem': {
          rootValue: 16,
          unitPrecision: 5,
          propList: ['*'],
          minPixelValue: 4,
        },
        'autoprefixer': {},
      }
    }
  },

  tailwindcss: {
    // Options
  },

  optimizedImages: {
    optimizeImages: true
  },

  storybook: {
    // Options
  }
}
