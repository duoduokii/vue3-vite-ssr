import { defineComponent, ref, Transition } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'

import classNames from 'classnames/bind'
import Style from './Home.module.scss'
const Home = defineComponent({
  name: 'Home',
  setup() {
    const router = useRouter()
    const store = useStore()
    const cx = classNames.bind(Style)

    const handleClick = (type: string) => {
      router.push({ name: type })
    }

    return () => (
      <div class={cx('home')}>
        <div class={cx('morning')} onClick={() => handleClick('Morning')}></div>
        <div class={cx('afternoon')}></div>
        <div class={cx('evening')}></div>
      </div>
    )
  }
})

export default Home
