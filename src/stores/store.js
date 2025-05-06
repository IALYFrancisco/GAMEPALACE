import { createStore } from "vuex";

export const authenticationStore = createStore({
  state(){
    return {
      user: JSON.parse(localStorage.getItem('user')) || null,
      token: localStorage.getItem('token') || null
    }
  },
  mutations: {
    getTokenLatestValue(state){
      state.token = localStorage.getItem('token')
    },
    logOut(state){
      localStorage.removeItem('token')
      state.token = null
    }
  },
  getters: {
    userIsConnected: (state) => !!state.token
  }
})