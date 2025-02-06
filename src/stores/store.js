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

import axios from "axios";
import { createStore } from "vuex";

export const gameStore = createStore({
    state(){
        return {
            listOfGames: []
        }
    }, mutations: {
        async getListOfGames(state){
            try {
                await axios({
                    method: 'GET',
                    url: `${import.meta.env.VITE_BASE_URL}/game`
                }).then((response)=>{
                    if(response.status == 200){
                        state.listOfGames = response.data
                    }else if(response.status == 204) {
                        console.log('Aucun jeu disponible, la collection est vide.')
                    }
                })
                .catch(error => console.log(`Erreur de récupération de liste des jeux: ${error}`))           
            }catch(error){
                console.log(`Erreur de récupération de liste des jeux: ${error}`)
            }
        }
    }
})
