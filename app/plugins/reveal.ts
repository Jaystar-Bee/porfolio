export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    // SSR compatibility: return empty props during server-side rendering
    getSSRProps() {
      return {}
    },
    // Only execute on client side after hydration
    mounted(el: HTMLElement) {
      // Guard against SSR
      if (typeof window === 'undefined') return

      // Fallback for browsers without IntersectionObserver
      if (!('IntersectionObserver' in window)) {
        el.classList.add('is-visible')
        return
      }

      el.classList.add('reveal')
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            obs.unobserve(el)
          }
        })
      }, { threshold: 0.15 })

      observer.observe(el)
    }
  })
})
