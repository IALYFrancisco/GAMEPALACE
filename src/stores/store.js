import { createStore } from "vuex";

export const authenticationStore = createStore({
  state(){
    return {
      token: localStorage.getItem('token')
    }
  },
  getters: {
    userIsConnected : (state) => !!state.token
  },
  mutations:{
    setUserIsConnected(state){
      localStorage.setItem("_isConnected", true)
      state.user.isConnected = JSON.parse(localStorage.getItem("_isConnected"))
    },
    setUserIsDisconnected(state){
      localStorage.setItem("_isConnected", false)
      state.user.isConnected = JSON.parse(localStorage.getItem("_isConnected"))
    }
  }
})