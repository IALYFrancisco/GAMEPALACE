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
      listOfGames: []
    }
  },
  getters: {
    async getListOfGames(state){
      await axios({
        method: 'GET',
        url: `${import.meta.env.VITE_BASE_URL}/game`
      }).then((response)=>{
        return response.data
      })
    },
    sendMessage(){
      return "Hello message"
    }
  }
})