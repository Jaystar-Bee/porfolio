<script setup lang="ts">
const colorMode = useColorMode()
const experiences = computed(() => [
  {
    company: 'VENDAW',
    title: 'Senior Frontend Developer',
    years: 'Jan 2025 - Present',
    logo: colorMode.preference === 'dark' ? '/logos/experience/vendaw-white.png' : '/logos/experience/vendaw.svg',
    description: 'As a Lead/Senior Web Developer, I architected and delivered 3 enterprise Nuxt.js applications serving 10K+ MAU, boosting load times by 45% through advanced optimization. I engineered end-to-end encryption (AES-256/RSA) ensuring GDPR compliance for sensitive financial data, and re-engineered user flows (onboarding, KYC) and platforms (storefront, VDS) that significantly improved completion rates (+30%) and operational efficiency (+35%).',
    link: 'https://vendaw.com'
  },
  {
    company: 'JAPA',
    title: 'Senior Frontend Developer',
    extra: 'Freelance',
    years: 'Mar 2025 - Jun 2025',
    logo: '/logos/experience/japa.png',
    description: 'As a Full-Stack Developer, I architected and delivered a Next.js application with an admin dashboard (React.js) serving 25K+ users, achieving a 95+ Lighthouse score. My work included a PWA with 99.5% offline reliability, a WebSocket-based real-time chat handling 10K+ concurrent connections, and leading CI/CD best practices to reduce deployment time by 73%.',
    link: 'https://japa.run'
  },
  {
    company: 'IBLOOV',
    title: 'Frontend - Mid-Level Frontend Developer',
    years: 'Apr 2022 - Jan 2025',
    coverClass: 'bg-black/90',
    logo: '/logos/experience/ibloov.svg',
    description: 'Built and scaled 5+ production applications for 100K+ users with React, Next.js, and Nuxt.js, optimizing performance and bundle size by 55%. I designed and implemented zero-trust encryption, achieving SOC 2 compliance, and reengineered core UI/UX flows, which boosted event discovery engagement by 35% and ticket purchases by 25%.',
    link: 'https://ibloov.com'
  },
  {
    company: 'PARAMOUNT STUDENTS',
    title: 'Front-End Web Developer',
    extra: 'Part time',
    years: 'Dec 2022 - Jul 2023',
    logo: '/logos/experience/paramount.png',
    description: 'Led front-end development of a Vue.js/TypeScript student platform for 5K+ users. Achieved a 40% faster page load, 45% increase in mobile usage, and 300ms improved responsiveness through advanced optimizations and a custom frontend ORM.',
    link: 'https://paramountstudents.com/'
  },
  {
    company: 'TABAGOODS',
    title: 'Front-End Web Developer',
    class: 'w-full h-full object-cover !p-0',
    years: 'Mar 2020 - Jul 2022',
    logo: '/logos/experience/tabagoods.jpg',
    description: `As Front-end Web Designer, I built and optimized a high-performance e-commerce platform with Nuxt.js and TypeScript, achieving a 92 Lighthouse score and 2.1s load time. My work on PWA features and catalog optimizations drove a 32% increase in mobile conversion and ensured seamless performance for extensive product catalogs.`,
    link: 'https://tabagoods.store'
  }
])
</script>

<template>
  <section id="experience">
    <div class="py-14 xs:py-20 md:py-32 container max-w-6xl px-4 mx-auto">
      <div class="xs:text-center">
        <h2 class="font-black text-muted sm:text-lg">
          Experience
        </h2>
        <h1
          class="pt-2 font-medium text-2xl xs:text-3xl md:text-4xl capitalize"
        >
          Work Experience
        </h1>
        <p
          class="pt-4 sm:pt-6 xs:text-balance text-muted leading-7 text-sm md:text-base max-w-2xl xs:mx-auto"
        >
          5 years as a Web Designer & Developer, specializing in end-to-end web
          project delivery and high-quality digital experiences.
        </p>
      </div>

      <div class="mt-12 xs:mt-18 relative">
        <!-- Timeline line -->
        <div class=" absolute left-3.5  md:left-1/2 transform md:-translate-x-1/2 h-full border border-dashed border-muted" />

        <!-- Experience items -->
        <div class="space-y-12">
          <div
            v-for="(item, index) in experiences"
            :key="item.company"
            class="flex flex-row gap-4 xs:gap-6 md:gap-12 items-start md:items-center"
            :class="{ 'md:flex-row-reverse': index % 2 === 1 }"
          >
            <!-- Left content (alternates) -->
            <div
              v-reveal
              class="w-full md:w-1/2 hidden md:block"
              :class="{ 'md:text-left': index % 2 === 1, 'md:text-right': index % 2 === 0 }"
            >
              <p class="text-muted text-sm font-medium">
                {{ item.years }}
              </p>
              <h3 class="text-lg md:text-xl font-semibold mt-1">
                {{ item.title }}
              </h3>
              <p class="text-muted text-sm leading-relaxed mt-2">
                {{ item.description }}
              </p>
            </div>

            <!-- Center dot -->
            <div class="relative z-1 bg-white dark:bg-slate-600 flex w-7 md:w-9 h-7 md:h-9 rounded-full border-2 border-dashed border-accented items-center justify-center shrink-0 spin">
              <div class="w-4 h-4 bg-primary-400 rounded-full" />
            </div>

            <!-- Right content with company logo -->
            <div
              v-reveal
              class="w-full md:w-1/2 flex flex-col md:flex-row items-start gap-2 sm:gap-4"
              :class="{ 'md:flex-row-reverse md:text-right': index % 2 === 1 }"
            >
              <div>
                <div
                  class="w-10 sm:w-16 h-10 sm:h-16 overflow-hidden rounded-full  dark:bg-slate-800 border border-accented shadow-md flex items-center justify-center"
                  :class="item?.coverClass"
                >
                  <NuxtImg
                    :src="item?.logo"
                    quality="50"
                    class="object-contain p-1.5 sm:p-4"
                    :class="item.class"
                  />
                </div>
              </div>
              <div>
                <h4 class="font-bold xs:text-lg">
                  {{ item.company }}
                </h4>
                <p class="text-muted text-xs xs:text-sm">
                  {{ item.title }}
                </p>
                <p
                  v-if="item?.extra"
                  class="italic text-[10px] xs:text-xs text-toned pt-1"
                >
                  {{ item?.extra }}
                </p>
                <div class="md:hidden mt-2">
                  <p class="text-muted text-xs font-medium">
                    {{ item.years }}
                  </p>
                  <p class="text-muted text-xs leading-relaxed mt-2">
                    {{ item.description }}
                  </p>
                </div>
                <UButton
                  :href="item.link"
                  label="Visit Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="link"
                  trailing-icon="cuida:arrow-up-outline"
                  external
                  size="sm"
                  class="mt-1.5 px-0"
                  :ui="{
                    trailingIcon: 'rotate-45'
                  }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 xs:mt-20 text-center max-w-3xl mx-auto text-xs xs:text-sm">
        <p>A selection of projects are withheld from public view due to privacy terms or internal company policy. Please inquire for more details.</p>
        <div class="mt-4 w-32 mx-auto h-1 bg-primary-400" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.spin { animation: spin 20s linear infinite; }
</style>
