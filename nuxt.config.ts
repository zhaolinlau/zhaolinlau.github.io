// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
    '@vee-validate/nuxt',
    'nuxt-mail',
    'shadcn-nuxt',
    '@nuxtjs/color-mode'
  ],

  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

  runtimeConfig: {
    mail: {
      message: {
        to: process.env.MESSAGE_TO
      },
      smtp: {
        service: process.env.SMTP_SERVICE,
        auth: {
          user: process.env.SMTP_AUTH_USER,
          pass: process.env.SMTP_AUTH_PASS
        }
      }
    }
  },

  compatibilityDate: '2024-07-18'
});