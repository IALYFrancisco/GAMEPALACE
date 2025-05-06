import { createStore } from "vuex";

export const authenticationStore = createStore({
  state(){
    return {
      user: JSON.parse(localStorage.getItem('user')) || null,
      token: localStorage.getItem('token') || null
    }
  },
  mutations: {
    SET_USER(state, user){
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    SET_TOKEN(state, token){
      state.token = token
      localStorage.setItem('token', token)
    },
    getTokenLatestValue(state){
      state.token = localStorage.getItem('token')
    },
    LOGOUT(state){
      state.user = null
      state.token = null
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    }
  },
  getters: {
    userIsConnected: (state) => !!state.token
  }
})