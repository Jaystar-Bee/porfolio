<script setup>
import theHeader from '@/components/the-header.vue'
import theFooter from '@/components/the-footer.vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

// GENERAL VARIABLES
const breakpoints = useBreakpoints(breakpointsTailwind)
const isSmallScreen = breakpoints.smaller('md')

const title = 'John Ayilara'
const description = `With 5 years of experience, I offer end-to-end web solutions. As both a designer and developer, I eliminate the friction between creative vision and technical execution. I manage the entire lifecycle of a project, ensuring that the final website looks stunning, functions flawlessly, and meets business goals.`

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/logos/logo-color.png',
  // twitterImage: '',
  twitterCard: 'summary_large_image'
})

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  }
})

const systemPrefersDark = ref(false)
const setFavicon = () => {
  const faviconLink = document.getElementById('favicon')
  if (!faviconLink) return

  // Use system preference
  if (systemPrefersDark.value && faviconLink) {
    faviconLink.href = '/favicon-dark.ico'
  } else {
    faviconLink.href = '/favicon.ico'
  }
}

onMounted(() => {
  systemPrefersDark.value = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  setFavicon()

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
      systemPrefersDark.value = event.matches
      setFavicon()
    })
})
</script>

<template>
  <UApp>
    <the-header />

    <UMain>
      <NuxtPage />
    </UMain>

    <the-footer />
    <div class="fixed -right-2 z-20 rotate-90 top-1/2 -translate-y-1/2">
      <USwitch
        v-model="isDark"
        unchecked-icon="line-md:moon-twotone"
        checked-icon="line-md:sun-rising-loop"
        aria-label="Toggle Dark Mode"
        :size="isSmallScreen ? 'sm' : 'xl'"
        :ui="{
          base: 'data-[state=unchecked]:bg-primary-200 data-[state=checked]:bg-gray-700 shadow cursor-pointer',
          thumb: 'shadow data-[state=checked]:bg-white',
          icon: 'text-white data-[state=checked]:text-primary'
        }"
      />
    </div>
  </UApp>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
