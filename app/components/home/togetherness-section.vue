<script setup lang="ts">
import gsap from 'gsap'
import { useIntersectionObserver } from '@vueuse/core'

const sectionTitle = useTemplateRef('section-title')
useIntersectionObserver(sectionTitle, ([entry], observer) => {
  if (entry?.isIntersecting) {
    gsap.fromTo(
      '.section-title',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out'
      }
    )
    gsap.fromTo(
      '.title',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out'
      }
    )
    if (entry) {
      observer.unobserve(entry?.target)
    }
  }
})
</script>

<template>
  <div class="relative w-full min-h-96 xs:min-h-106 sm:min-h-128">
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source
        src="/videos/togetherness_build.mp4"
        type="video/mp4"
      >
      Your browser does not support the video tag.
    </video>
    <div
      class="relative z-10 min-h-128 h-full xs:text-center text-white px-4 bg-linear-to-br from-black/80 via-black/80 to-primary-800/60 flex items-center justify-center"
    >
      <div class="max-w-3xl mx-auto py-14 xs:py-20 md:py-32">
        <h2
          ref="section-title"
          class="section-title opacity-0 font-black text-gray-100 sm:text-lg"
        >
          Togetherness
        </h2>
        <h1
          class="title opacity-0 text-2xl xsm:text-3xl xs:text-4xl md:text-5xl font-bold pb-5 xsm:pb-7 xs:pb-10 pt-4 xs:pt-6 capitalize"
        >
          Building Together, Succeeding Together
        </h1>
        <p
          v-reveal
          class="text-sm xsm:text-bsae md:text-lg text-balance"
        >
          True perfection isn't achieved in isolation. I believe in deep
          collaboration, working side-by-side with you to transform your ideas
          into a flawless, live reality. Together, we navigate every challenge
          to build something exceptional.
        </p>
        <div class="text-right xs:text-center">
          <UButton
            label="Hire me"
            class="mt-8 xs:mt-10 h-9 px-6 text-white"
            trailing-icon="flowbite:arrow-right-outline"
            @click="useHireMe"
          />
        </div>
      </div>
    </div>
  </div>
</template>
