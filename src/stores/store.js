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


export const gameStore = createStore({
    state(){
        return {
        }
    },
    getters: {
        async getListOfGames(){
            try {
                await axios({
                    method: 'GET',
                    url: `${import.meta.env.VITE_BASE_URL}/game`
                }).then((response) => {
                    // la liste contient au moins un élément
                    if(response.status == 200){
                        return response.data
                    }
                    // aucun élément dans la liste des jeux
                    else if (response.status == 204){
                        return
                    }
                })
            }catch(error){
                console.log(`Erreur de récupération de liste des jeux: ${error}`)
                return
            }
        }
    }
})
