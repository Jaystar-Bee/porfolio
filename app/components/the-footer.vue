<script setup lang="ts">
const colorMode = useColorMode()
const socials = [
  {
    label: 'Twitter',
    icon: 'ph:twitter-logo',
    href: 'https://x.com/Jaystar_Bee'
  },
  {
    label: 'GitHub',
    icon: 'ph:github-logo',
    href: 'https://github.com/Jaystar-Bee'
  },
  {
    label: 'LinkedIn',
    icon: 'ph:linkedin-logo',
    href: 'https://www.linkedin.com/in/john-ayilara-66140b168/'
  },
  {
    label: 'Instagram',
    icon: 'ph:instagram-logo',
    href: 'https://www.instagram.com/jaystar_insights/'
  },
  {
    label: 'Whatsapp',
    icon: 'ph:whatsapp-logo',
    href: 'https://wa.me/+2349035313391'
  },
  {
    label: 'Email',
    icon: 'ph:envelope',
    href: 'mailto:jbayilara@gmail.com'
  }
]
</script>

<template>
  <footer class="">
    <div class="container mx-auto max-w-6xl w-full px-4 py-6 flex items-center justify-between flex-col md:flex-row gap-6">
      <NuxtImg
        :src="colorMode.preference === 'dark' ? '/logos/logo-white.webp' : '/logos/logo-color.webp'"
        quality="60"
        class="h-9"
        alt="Logo"
      />
      <div class="text-sm text-center text-muted max-w-xl mx-auto">
        <p>
          © {{ new Date().getFullYear() }} Jaystar. All rights reserved.
        </p>
      </div>
      <div class="flex justify-center space-x-2">
        <UButton
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          variant="link"
          size="sm"
          :icon="social.icon"
          external
        />
      </div>
    </div>
  </footer>
</template>
