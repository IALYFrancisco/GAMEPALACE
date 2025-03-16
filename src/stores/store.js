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
      if(state.isConnected){
        return true
      }else{
        return false
      }
    }
  }
})