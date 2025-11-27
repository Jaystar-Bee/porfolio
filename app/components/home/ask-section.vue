<script setup lang="ts">
import gsap from 'gsap'
import { useIntersectionObserver } from '@vueuse/core'

const target = useTemplateRef('target')
useIntersectionObserver(target, ([entry], observer) => {
  if (entry?.isIntersecting) {
    gsap.fromTo(
      '.text',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        delay: 0.5,
        ease: 'power2.out'
      }
    )
    gsap.fromTo(
      '.button',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        delay: 0.5,
        ease: 'power2.out'
      }
    )
    observer.unobserve(entry.target)
  }
})

onMounted(() => {
  gsap.to('.rotate_image', {
    rotationY: 360,
    duration: 8,
    ease: 'easeInOut',
    repeat: -1,
    yoyo: true
  })
})
</script>

<template>
  <section class="relative bg-[#0f172a] overflow-hidden">
    <div class="bg-[#91551a]/20 w-40 xs:w-56 h-40 xs:h-56 absolute -left-10 -top-5 rounded-full blur-xl" />
    <div class="bg-primary/15 w-40 xs:w-50 h-40 xs:h-50 absolute -right-10 -bottom-5 rounded-full blur-2xl" />
    <div
      ref="target"
      class="container mx-auto max-w-6xl w-full px-4 py-9"
    >
      <NuxtImg
        src="/images/ask_shape.svg"
        class="w-8 xs:w-10 mx-auto rotate_image mb-6"
      />
      <div class="flex items-center justify-between gap-6">
        <h1 class="font-black text-3xl xsm:text-4xl sm:text-6xl text p-2 capitalize opacity-0">
          Have a project?
        </h1>
        <UButton
          label="Let's talk"
          class="px-5 xs:px-10 cursor-pointer h-12 button opacity-0"
          @click="useHireMe"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.text {
  background: linear-gradient(90deg, var(--color-primary-500) 0%, #91551a 100%);
  background-color: #3b82f6;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
