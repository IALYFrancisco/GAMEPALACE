import { createStore } from "vuex";

export const authenticationStore = createStore({
  state(){
    return {
      token: localStorage.getItem('token')
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