import { defineComponent, ref, Transition } from 'vue'
import { useStore } from '@/store'
import Style from './Home.module.css'
const Home = defineComponent({
  name: 'Home',
  setup() {
    const store = useStore()
    // return () => <div class={Style['home-page']}></div>
    return () => (
      <div class={`${Style.test} ${Style.clearfix}`}>
        <div class={Style.c}>123</div>
        <div class={Style.c}>123</div>
      </div>
    )
  }
})

export default Home
