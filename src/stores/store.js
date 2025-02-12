import axios from "axios";
import { createStore } from 'vuex'

export const userStore = createStore({
  state() {
    return {
      userIsConnected: false
    }
  },
  mutations: {
    setUserIsConnected(state) {
      state.userIsConnected = true
    }
  }
})

export const gamestore = createStore({
  state(){
    return {
      
    }
  }
})