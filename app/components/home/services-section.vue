<script setup lang="ts">
const services = [
  {
    title: 'UI/UX Designer',
    icon: 'ph:palette',
    description:
      'Crafting intuitive and visually appealing user interfaces that enhance user experience and engagement.'
  },
  {
    title: 'Front-End Developer',
    icon: 'hugeicons:web-design-01',
    description:
      'Building responsive and dynamic web applications using modern technologies like HTML, CSS, JavaScript, and frameworks.'
  },
  {
    title: 'Back-End Developer',
    icon: 'hugeicons:database-01',
    description:
      'Developing robust server-side logic, databases, and APIs to ensure seamless functionality and performance.'
  },
  {
    title: 'Full-Stack Developer',
    icon: 'hugeicons:source-code-square',
    description:
      'Combining front-end and back-end expertise to deliver complete web solutions from concept to deployment.'
  },
  {
    title: 'Web Performance Optimization',
    icon: 'ion:speedometer-outline',
    description:
      'Enhancing website speed and efficiency to provide a smooth user experience and improve search engine rankings.'
  }
]
</script>

<template>
  <section id="services">
    <div class="py-14 xs:py-20 md:py-32 container max-w-6xl px-4 mx-auto">
      <div class="xs:text-center">
        <h2 class="font-black text-muted sm:text-lg">
          Services
        </h2>
        <h1
          class="pt-2 font-medium text-2xl xs:text-3xl md:text-4xl capitalize"
        >
          What do i offer?
        </h1>
        <p
          class="pt-4 sm:pt-6 xs:text-balance text-muted leading-7 text-sm md:text-base max-w-2xl xs:mx-auto"
        >
          Full-cycle web solutions blending creative design with technical
          expertise to build impactful online presences.
        </p>
      </div>

      <ul
        class="grid xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 xs:mt-18"
      >
        <li
          v-for="item in services"
          :key="item?.title"
          v-reveal
          class="border border-accented rounded-2xl shadow-lg hover:shadow-sm transition-shadow duration-300 hover:border-primary-400 bg-white dark:bg-slate-800"
        >
          <div class="p-4 sm:p-6">
            <div class="text-primary text-3xl">
              <UIcon :name="item.icon" />
            </div>
            <div class="mt-3">
              <h3 class="sm:text-xl lg:text-2xl font-semibold">
                {{ item.title }}
              </h3>
              <p class="pt-2 text-muted text-sm md:text-base">
                {{ item.description }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
