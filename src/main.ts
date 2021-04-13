import { createSSRApp } from 'vue'
import App from './App.vue'
import { createRouter } from './router/index'
import { createStore, key } from './store/index'

// 创建应用实例的工厂函数
export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter()
  const store = createStore()
  app.use(router)
  app.use(store, key)
  return { app, router }
}
