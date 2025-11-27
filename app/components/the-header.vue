<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { useDownloadCV } from '@/composables/useDownloadCV'
// GENERAL VARIABLES
const route = useRoute()
const colorMode = useColorMode()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.hash === '#home' || !route.hash
  },
  {
    label: 'About Me',
    to: { hash: '#about-me' },
    active: route.hash === '#about-me'
  },
  {
    label: 'Services',
    to: { hash: '#services' },
    active: route.hash === '#services'
  },
  {
    label: 'Experience',
    to: { hash: '#experience' },
    active: route.hash === '#experience'
  },
  {
    label: 'Comments',
    to: { hash: '#comments' },
    active: route.hash === '#comments'
  }
])

const scrollPosition = ref(0)
onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollPosition.value = window.scrollY
  })
})
</script>

<template>
  <UHeader
    :ui="{
      root: `fixed left-0 w-full border-b-0 bg-transparent transition-all duration-500 ${
        scrollPosition > 20
          ? 'backdrop-blur bg-accented/70'
          : 'backdrop-blur-none'
      }`
    }"
  >
    <template #title>
      <h1 class="font-black text-2xl">
        <NuxtImg
          :src="
            colorMode.preference == 'dark'
              ? '/logos/logo-white.webp'
              : '/logos/logo-color.webp'
          "
          class="h-9"
          quality="50"
        />
      </h1>
    </template>
    <UNavigationMenu
      :items="items"
      variant="link"
      :ui="{
        childLink: '!before:bg-transparent hover:!bg-transparent ',
        linkLabel: 'font-semibold'
      }"
    />

    <template #right>
      <UButton
        icon="hugeicons:download-03"
        aria-label="CV"
        class="cursor-pointer"
        @click="useDownloadCV"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
        :ui="{
          link: 'py-4',
          item: 'py-1'
        }"
      />
    </template>
  </UHeader>
</template>
