import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import Style from './Land.module.scss'
const Land = defineComponent({
  name: 'Land',
  setup() {
    const router = useRouter()
    const enter = () => {
      router.push({ name: 'Home' })
    }
    return () => (
      <div class={Style['landing-page']}>
        <button onClick={enter}>Enter</button>
      </div>
    )
  }
})
export default Land
