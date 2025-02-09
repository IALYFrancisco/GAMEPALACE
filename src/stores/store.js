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
      listOfGames: [],
      stateOfGetGamesListRequest: false
    }
  },
  getters: {
    async requestIsDoneAndListIsNotEmpty(state){

      try {
        await axios({
          method: 'GET',
          url: `${import.meta.env.VITE_BASE_URL}/game`
        }).then((response) => {
          // la liste contient au moins un élément
          if(response.status == 200){
            state.listOfGames = response.data,
            console.log(response.data)
          }
          // la liste est vide
          else if(response.status == 204){
            console.log("Il n'y a aucun jeu dans la liste")
          }
        }).catch((error) => {
          console.log(`Erreur de récupération de liste de jeux: ${error}`)
        })
      }catch(error){
        console.log(`Erreur de récupération de liste de jeux`)
      }finally{
        state.stateOfGetGamesListRequest = true
      }

      if( state.stateOfGetGamesListRequest && state.listOfGames.length > 0 ){
        return true
      }else if ( state.stateOfGetGamesListRequest && state.listOfGames.length == 0 ){
        return false
      }
    }
  }
})