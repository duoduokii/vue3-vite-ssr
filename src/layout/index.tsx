import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from '@/common/navbar/NavBar'
import { useRoute } from 'vue-router'
import Style from './index.module.scss'
const Layout = defineComponent({
  name: 'Layout',
  setup() {
    const route = useRoute()
    return () => (
      <div class={Style.layout}>
        {route.name !== 'Land' && <NavBar />}
        <RouterView></RouterView>
      </div>
    )
  }
})
export default Layout
