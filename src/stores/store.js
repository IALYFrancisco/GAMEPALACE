import { createStore } from 'vuex'

export const userStore = createStore({
  state() {
    return {
      user: {
        isConnected: false,
        info: {
          name: "",
          email: "",
        }
      },
      connected: false,
      cart: []
    }
  },
  mutations: {
    setUserIsConnected(state) {
      state.connected = true
    },
    logOut(state) {
      state.connected = false
      console.log(state.connected)
    }
  }
})