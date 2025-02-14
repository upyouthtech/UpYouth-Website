// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'DM Sans': [400, 700]
        }
      }
    ],
    'vue3-carousel-nuxt'
  ],
  srcDir: 'src',
  colorMode: {
    preference: 'light'
  },
  css: ['/assets/css/variables.css'],
  app: {

    head: {
      titleTemplate: '%s UpYouth - Tech Startup Ecosystem',
      meta: [
        { name: 'description', content: 'A Technopreneurial Ecosystem where Vietnamese youth get the best resources to found tech startups' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
     link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png', // Path to your favicon
        },
      ],
    }
  }
});
