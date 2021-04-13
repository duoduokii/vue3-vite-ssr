<template>
  <div>
    <router-view v-slot="{ Component }">
      <Suspense>
        <transition :name="transitionName">
          <component :is="Component" />
        </transition>
      </Suspense>
    </router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
//TODO  why is async
export default defineComponent({
  name: 'App',
  setup() {
    const route = useRoute()
    const transitionName = ref<string>('')
    watch(
      () => route.name,
      (to, from) => {
        if (from === 'Land') {
          transitionName.value = 'slide-top'
          return
        }
        if (to === 'Land') {
          transitionName.value = 'slide-down'
          return
        }
        transitionName.value = ''
      }
    )
    return {
      transitionName
    }
  }
})
</script>

<style lang="scss" scoped>
.slide-top-enter-from {
  transform: translate3d(0, 100vh, 0);
}
.slide-top-enter-to {
  transform: translate3d(0, 0 0);
}
.slide-top-leave-to {
  transform: translate3d(0, -100%, 0);
}
.slide-top-enter-active,
.slide-top-leave-active {
  transition: all 2s ease;
}
</style>
