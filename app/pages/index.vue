<script setup lang="ts">
import heroSection from '~/components/home/hero-section.vue'
import aboutMe from '~/components/home/about-me.vue'
import togethernessSection from '~/components/home/togetherness-section.vue'
import servicesSection from '~/components/home/services-section.vue'
import experienceSection from '~/components/home/experience-section.vue'
import commentSection from '~/components/home/comment-section.vue'
import askSection from '~/components/home/ask-section.vue'

import { gsap } from 'gsap'

const customCursorRef = ref(null)
let mouseX = 0
let mouseY = 0

onMounted(() => {
  const customCursorElement = customCursorRef.value
  if (!customCursorElement) return
  gsap.set(customCursorElement, { xPercent: -50, yPercent: -50 })

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    gsap.to(customCursorElement, {
      x: mouseX,
      y: mouseY,
      duration: 0.4,
      ease: 'power2.out',
      overwrite: true
    })
  })

  const interactiveElements = document.querySelectorAll(
    'a, button, input[type="text"], textarea, button, span'
  )

  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('hide-custom-cursor')
    })
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('hide-custom-cursor')
    })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', () => {})
    interactiveElements.forEach((el) => {
      el.removeEventListener('mouseenter', () => {
        document.body.classList.add('hide-custom-cursor')
      })
      el.removeEventListener('mouseleave', () => {
        document.body.classList.remove('hide-custom-cursor')
      })
    })
  })
})
</script>

<template>
  <main class="cursor-container">
    <div
      ref="customCursorRef"
      class="custom-cursor"
    />
    <hero-section />
    <about-me />
    <services-section />
    <togetherness-section />
    <experience-section />
    <comment-section />
    <ask-section />
  </main>
</template>

<style>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  background-color: var(--color-primary-100);
  opacity: 0.5;
  border: 1px solid var(--primary-color);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  will-change: transform, opacity;
  opacity: 1;
  transform: translate(-50%, -50%);
}

@media only screen and (max-width: 768px) {
  .custom-cursor {
    display: none;
  }
}

a,
button,
input[type="text"],
textarea {
  cursor: pointer !important;
}
button,
span {
  user-select: text;
}

body.hide-custom-cursor .custom-cursor {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
}
</style>
