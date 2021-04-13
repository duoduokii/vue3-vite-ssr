import { defineComponent, ref } from 'vue'
import Style from './NavBar.module.scss'
import logo from '@/assets/logo.png'
const NavBar = defineComponent({
  setup() {
    interface Nav {
      title: string
      routerName: string
    }
    const navSet: Array<Nav> = [
      {
        title: '首页',
        routerName: 'Home'
      },
      {
        title: '产品中心',
        routerName: 'Home'
      },
      {
        title: '商务合作',
        routerName: 'Home'
      },
      {
        title: '关于中云',
        routerName: 'Home'
      },
      {
        title: '新闻中心',
        routerName: 'Home'
      }
    ]
    const menuState = ref<boolean>(false)

    return () => {
      const renderNavLi = (navSet: Array<Nav>) => {
        return navSet.map((nav: Nav) => <li>{nav.title}</li>)
      }
      return (
        <header class={Style['nav-bar']}>
          <nav class={Style['container']}>
            <img class={Style.logo} src={logo} alt="logo" />
            <ul>{renderNavLi(navSet)}</ul>
            <div class={Style.menu} onClick={() => (menuState.value = !menuState.value)}>
              <span class={menuState.value && Style['menu-trans-1']}></span>
              <span class={menuState.value && Style['menu-trans-2']}></span>
              <span class={menuState.value && Style['menu-trans-3']}></span>
            </div>
          </nav>
        </header>
      )
    }
  }
})
export default NavBar
