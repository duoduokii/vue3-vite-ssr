import { InjectionKey } from 'vue'
import { createStore as _createStore, useStore as _useStore, Store } from 'vuex'
import { State } from './types'

const store = {
  state: {
    isMobile: false,
    screenWidth: undefined
  },
  mutations: {
    SET_ISMOBILE(state: State, isMobile: boolean) {
      state.isMobile = isMobile
    },
    SET_SCREEN_WIDTH(state: State, screenWidth: number) {
      state.screenWidth = screenWidth
    }
  }
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export function createStore() {
  return _createStore<State>(store)
}

export function useStore() {
  return _useStore(key)
}
