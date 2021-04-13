import { createMemoryHistory, createRouter as _createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import component from '*.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/land'
  },
  {
    path: '/land',
    name: 'Land',
    component: () => import('@/pages/land/Land')
  },
  {
    path: '/site',
    component: () => import('@/layout'),
    redirect: '/site/home',
    children: [
      {
        path: '/site/home',
        name: 'Home',
        component: () => import('@/pages/home/Home')
      },
      {
        path: '/site/about',
        name: 'About',
        component: () => import('@/pages/about/About')
      }
    ]
  }
]

export function createRouter() {
  return _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  })
}
