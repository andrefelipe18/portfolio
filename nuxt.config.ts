// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
      }
    }
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/google-fonts', "@nuxt/image", "@nuxtjs/seo"],

  googleFonts: {
    families: {
      'Noto Sans': true,
    }
  },

  site: {
    url: 'https://andredomingues.online',
    name: 'André Domingues - Portfolio',
    description: 'Portfólio de André Domingues',
    defaultLocale: 'pt-BR',
  }
})