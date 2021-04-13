import { defineComponent } from 'vue'

import classNames from 'classnames/bind'
import Style from './Morning.module.scss'

const Morning = defineComponent({
  name: 'Morning',
  setup() {
    const cx = classNames.bind(Style)
    return () => <div>morning</div>
  }
})
export default Morning
