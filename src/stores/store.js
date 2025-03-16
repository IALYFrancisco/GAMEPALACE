import { createStore } from "vuex";

export const authenticationStore = createStore({
  state(){
    return {
      user: {
        isConnected: localStorage.getItem("_isConnected")
      }
    }
  },
  getters: {
    userIsConnected(state){
      state.user.isConnected = localStorage.getItem("_isConnected")
      if(state.user.isConnected){
        return true
      }else{
        return false
      }
    }
  },
  mutations:{
    setUserIsConnected(state){
      localStorage.setItem("_isConnected", true)
      state.user.isConnected = localStorage.getItem("_isConnected")
    },
    setUserIsDisconnected(state){
      localStorage.setItem("_isConnected", false)
      state.user.isConnected = localStorage.getItem("_isConnected")
    }
  }
})