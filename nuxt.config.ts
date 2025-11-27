// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@vueuse/nuxt'],
  devtools: {
    enabled: true
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1 maximum-scale=1',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: 'description',
          content:
            'With 5 years of experience, I offer end-to-end web solutions. As both a designer and developer, I eliminate the friction between creative vision and technical execution. I manage the entire lifecycle of a project, ensuring that the final website looks stunning, functions flawlessly, and meets business goals.'
        },
        {
          name: 'keywords',
          content:
            'Software developer, I need a developer, Web developer, Web designer, Frontend developer, Freelance developer, Freelance designer, Freelance web developer, Freelance web designer, A Developer, John, John Ayilara, Full-stack Developer, Front-end developer,'
        },
        {
          property: 'og:title',
          content: 'John Ayilara - A software developer'
        },
        {
          property: 'og:description',
          content:
            'With 5 years of experience, I offer end-to-end web solutions. As both a designer and developer, I eliminate the friction between creative vision and technical execution. I manage the entire lifecycle of a project, ensuring that the final website looks stunning, functions flawlessly, and meets business goals.'
        },
        {
          property: 'og:image',
          content: '/images/logo-color.png'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', id: 'favicon' }]
    }
  },
  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
