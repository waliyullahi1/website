// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'vue3-carousel-nuxt'],
  pages: true,
  css: ['~/assets/css/main.css',],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Trademax - Professional Trademark Registration Services',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Expert trademark registration services in the USA. Protect your brand with comprehensive trademark search, USPTO filing, office action responses, and trademark monitoring. Fast, reliable, and affordable trademark protection.'
        },
        {
          name: 'keywords',
          content: 'trademark registration, USPTO filing, trademark search, brand protection, trademark attorney, office action response, trademark monitoring, trademark renewal, business trademark, logo trademark'
        },
        { name: 'author', content: 'Trademax' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Trademax - Professional Trademark Registration Services' },
        {
          property: 'og:description',
          content: 'Expert trademark registration services. Protect your brand with comprehensive trademark search, USPTO filing, and monitoring services.'
        },
        { property: 'og:site_name', content: 'Trademax' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Trademax - Professional Trademark Registration Services' },
        {
          name: 'twitter:description',
          content: 'Expert trademark registration services. Protect your brand with comprehensive trademark search, USPTO filing, and monitoring services.'
        },

        // Additional SEO
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#1a202c' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://trademax.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Marcellus&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap'
        }
      ]
    }
  }
  ,
  // Make the project name available to the client by exposing it as a public runtime config value.
  runtimeConfig: {
    public: {
      projectName: process.env.PROJECT_NAME || 'Trademax'
    }
  }
})