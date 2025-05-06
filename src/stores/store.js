import axios from "axios";
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
    _LOGOUT(state){
      state.user = null
      state.token = null
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    }
  },
  actions: {
    async LOGOUT({commit}){
        await axios({
          method: 'POST',
          url: `${import.meta.env.VITE_BASE_URL}/user/logout`,
          data: {}
        }).then(()=>{
          commit('_LOGOUT')
        }).catch((err)=>{ console.log(`Error user logout: error serveur == ${err}`) })
    },
    async REFRESHTOKEN({commit}){
      try{
        await axios({
          method: 'POST',
          url: `${import.meta.env.VITE_BASE_URL}/user/refresh-token`,
          data: {}
        }).then((response)=>{
          commit('SET_TOKEN', response.data.accessToken)
        })
      }catch(err){
        console.log("Error refresh token: "+err)
      }
    }
  },
  getters: {
    userIsConnected: (state) => !!state.token
  }
})