import { useMouse } from '@vueuse/core'
import { gsap } from 'gsap' // Assuming GSAP is installed

export const useCursor = (hover?: Ref<boolean>) => {
  const { x, y } = useMouse() // Reactive mouse coordinates

  // Refs for the cursor's actual position, smoothly updated by GSAP
  const cursorX = ref(0)
  const cursorY = ref(0)

  onMounted(() => {
  // GSAP ticker for smooth animation loop
    gsap.ticker.add(() => {
    // Smoothly interpolate cursor position towards mouse position
      cursorX.value = gsap.utils.interpolate(cursorX.value, x.value, 0.1)
      cursorY.value = gsap.utils.interpolate(cursorY.value, y.value, 0.1)
    })
  })
  console.log(hover && hover.value)

  const cursorStyle = computed(() => ({
    transform: `translate(-50%, -50%) translate3d(${cursorX.value}px, ${
      cursorY.value
    }px, 0) scale(${hover && hover.value ? 1.5 : 1})`,
    backgroundColor: hover && hover.value
      ? 'rgba(255,255,255,0.8)'
      : 'rgba(97, 218, 251, 0.7)'
    // Using transform for position and scale is generally better for performance
  }))

  return { cursorStyle }
}
