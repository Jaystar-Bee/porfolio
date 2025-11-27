<script setup lang="ts">
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const isSm = breakpoints.smaller('sm')
const comments = [
  {
    name: 'Tokunbo Ojo',
    role: 'CEO at Vendaw & Co-Founder at Ibloov',
    comment: `You good are at what you do. We'd definitely work together alot.`
  },
  {
    name: 'Ayodeji Adeyemi',
    role: 'Senior Frontend Engineer at Japa (Contract)',
    comment: `Your expertise in front-end development is impressive. The solutions you provided significantly improved our application's performance and user experience.`
  },
  {
    name: 'Ope',
    role: 'Product Manager at Ibloov',
    comment: `John is really good. I trust him dealing with complex designs and tasks. He delivers on time.`
  },
  {
    name: 'Omotoyosi',
    role: 'Product Manager at Vendaw',
    comment: `Working with you was a game-changer for our project. Your ability to understand our needs and translate them into a functional and visually appealing interface was outstanding. You're indeed our batman 😎`
  },
  {
    name: 'Tope',
    role: 'CEO at Japa',
    comment: `Your dedication to delivering high-quality work is commendable. You've done so well ever since you joined us and I'm happy we able to launch the best MVP on time.`
  },
  {
    name: 'Damilare',
    role: 'Product Designer at Vendaw',
    comment: `John is a highly skilled and reliable developer. His attention to detail and commitment to delivering top-notch results make him an invaluable asset to any team. 'He be Agba'`
  }
]
</script>

<template>
  <section
    id="comments"
    class="bg-primary/10"
  >
    <div class="py-14 xs:py-20 md:py-32 px-4 lg:px-8 mx-auto">
      <div class="flex flex-col lg:flex-row gap-14 lg:gap-4">
        <div
          v-reveal
          class="flex-1 xs:text-center lg:text-left lg:max-w-sm xl:max-w-lg"
        >
          <h2 class="font-black text-muted sm:text-lg">
            Comments
          </h2>
          <h1
            class="pt-2 font-medium text-2xl xs:text-3xl md:text-4xl capitalize"
          >
            What people are saying?
          </h1>
          <p
            class="pt-4 sm:pt-6 xs:text-balance text-muted leading-7 text-sm md:text-base max-w-2xl xs:mx-auto"
          >
            Hear directly from clients and collaborators about the impact of our
            partnership and the results we've achieved together.
          </p>
        </div>

        <div class="mb-10 md:flex-1 sm:overflow-x-hidden">
          <UCarousel
            v-slot="{ item }"
            :auto-height="isSm ? true : false"
            loop
            :arrows="isSm ? true : false"
            :auto-scroll="isSm ? false : true"
            :items="comments"
            :ui="{
              container: 'items-stretch sm:h-[20rem]',
              item: 'sm:shrink sm:min-w-[24rem] !h-full',
              controls: 'absolute -bottom-6 inset-x-0'
            }"
            class="w-full"
          >
            <UCard
              :ui="{
                root: '!h-full'
              }"
            >
              <div class="flex justify-center">
                <UAvatar
                  size="2xl"
                  color="primary"
                  :alt="item.name"
                />
              </div>

              <div class="text-center mb-4 mt-1">
                <h3 class="font-semibold text-sm xs:text-base">
                  {{ item.name }}
                </h3>
                <p class="text-muted text-[10px] xs:text-xs">
                  {{ item.role }}
                </p>
              </div>
              <p class="text-sm md:text-base text-muted leading-relaxed pt-2">
                "{{ item.comment }}"
              </p>
            </UCard>
          </UCarousel>
        </div>
      </div>
      <div
        class="mt-12 xs:mt-20 mb-4 text-center max-w-3xl mx-auto text-xs xs:text-sm"
      >
        <p>
          Authentic feedback from partners, compiled from organic comments
          during meetings and chats, as well as specific questions designed to
          capture their experience working with me.
        </p>
        <div class="mt-4 w-32 mx-auto h-1 bg-primary-400" />
      </div>
    </div>
  </section>
</template>
