<script setup lang="ts">
import gsap from 'gsap'

onMounted(() => {
  gsap.fromTo(
    '.project-image',
    { y: -5 },
    {
      y: 5,
      duration: 3,
      ease: 'power2.out',
      repeat: -1,
      yoyo: true
    }
  )
})
</script>

<template>
  <section
    id="about-me"
    class="relative bg-accented/10 dark:bg-accented/20 py-16 xs:py-20 sm:px-4"
  >
    <div class="absolute z-2 top-0 left-0 w-full h-full hidden md:flex">
      <div class="flex-1" />
      <div class="flex-1 h-full bg-primary-50/10 p-4" />
    </div>
    <div
      class="container px-4 max-w-6xl mx-auto flex gap-20 md:gap-8 flex-col-reverse md:flex-row"
    >
      <div class="flex-1 relative">
        <NuxtImg
          src="/images/about-shape.svg"
          class="absolute -left-4 -top-6"
        />
        <div
          class="w-[90%] xs:w-[80%] aspect-7/9 bg-primary-50/30 rounded-xl rounded-bl-none overflow-hidden"
        >
          <NuxtImg
            src="/images/about-me.webp"
            class="w-full h-full object-cover"
          />
        </div>
        <div
          class="project-image absolute bottom-10 right-1 bg-white dark:bg-slate-600 rounded-lg py-2 xs:py-3 px-4 xs:px-6 shadow-lg font-medium text-xs xs:text-sm md:text-base"
        >
          <p>
            10+ Projects
          </p>
        </div>
      </div>
      <div class="relative z-4 flex-1 sm:p-4">
        <h2 class="font-black text-muted sm:text-lg">
          About Me
        </h2>
        <h1 class="pt-2 font-medium text-2xl xs:text-3xl md:text-4xl">
          Why Work With Me?
        </h1>
        <p class="pt-6 text-balance text-muted leading-7 text-sm md:text-base">
          Choosing a partner for your next web project means finding someone who
          can not only bring your vision to life but also ensure flawless
          execution. With over four years of experience as a dedicated Web
          Designer and Developer, I offer the unique advantage of handling your
          project from concept to deployment. This means a single, accountable
          point of contact, seamless communication between design and code, and
          an unwavering commitment to delivering pixel-perfect, performant, and
          user-centric websites that drive results.
        </p>

        <UButton
          label="Hire Me"
          trailing-icon="flowbite:arrow-right-outline"
          class="px-6 h-9 mt-6 md:mt-10 font-semibold rounded-full"
          @click="useHireMe"
        />
      </div>
    </div>
  </section>
</template>
