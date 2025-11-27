<script setup lang="ts">
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core'

const nameRef = ref<HTMLSpanElement | null>(null)

onMounted(async () => {
  await nextTick()
  if (nameRef.value) {
    const typewriter = new Typewriter(nameRef.value, {
      loop: true,
      delay: 75,
      deleteSpeed: 50
    })
    typewriter
      .typeString('John Ayilara.')
      .pauseFor(5000)
      .deleteAll(200)
      .typeString('Web Designer')
      .pauseFor(2000)
      .deleteChars(8)
      .typeString('Developer.')
      .pauseFor(2000)
      .deleteChars(14)
      .typeString('Software Engineer.')
      .pauseFor(2000)
      .deleteChars(18)
      .start()
  }
})
</script>

<template>
  <div class="relative">
    <div
      class="relative overflow-hidden min-h-[95dvh] bg-primary-50/50 dark:bg-primary-200/10"
    >
      <div class="absolute right-[20%] -top-40 flex rotate-22">
        <div class="w-[10dvw] h-[calc(250vh+40rem)] bg-primary-400/40" />
        <div class="w-[32dvw] h-[calc(250vh+40rem)] bg-primary" />
      </div>
      <div class="h-full min-h-[95dvh] flex items-end relative z-10">
        <section
          class="container px-4 xs:px-8 mx-auto max-w-6xl flex flex-col mt-24 xs:mt-32 md:flex-row items-center justify-between gap-12 md:gap-4"
        >
          <div class="flex-1">
            <div class="text-2xl xxs:text-3xl xs:text-4xl font-black">
              <h2>Hi! I'm</h2>
              <span
                ref="nameRef"
                class="text-primary block py-2"
              />
            </div>

            <p class="text-muted font-medium text-sm sm:text-base mt-4">
              With 5 years of experience, I offer end-to-end web solutions. As
              both a designer and developer, I eliminate the friction between
              creative vision and technical execution. I manage the entire
              lifecycle of a project, ensuring that the final website looks
              stunning, functions flawlessly, and meets business goals.
            </p>
            <div class="flex gap-2 mt-6">
              <UButton
                label="Hire Me"
                class="px-4 cursor-pointer h-9 interactive-element"
                @mouseenter="hover = true"
                @mouseleave="hover = false"
                @click="useHireMe"
              />
              <UButton
                label="Preview CV"
                variant="subtle"
                class="px-4 cursor-pointer h-9 interactive-element"
                @mouseenter="hover = true"
                @mouseleave="hover = false"
                @click="useDownloadCV"
              />
            </div>
          </div>
          <div class="md:min-h-136 md:min-w-sm flex-1">
            <NuxtImg
              src="/images/hero-image.webp"
              alt="Hero Image"
              class="mx-auto md:mx-0 max-w-xs md:max-w-md"
              quality="50"
            />
          </div>
        </section>
      </div>
    </div>
    <div
      class="h-10 w-10 hidden aspect-square absolute z-10 -bottom-5 left-1/2 -translate-x-1/2 bg-white dark:bg-accented shadow-md rounded-full md:flex items-center justify-center animate-bounce"
    >
      <UIcon
        name="flowbite:caret-down-outline"
        class="text-xl"
      />
    </div>
  </div>
</template>
