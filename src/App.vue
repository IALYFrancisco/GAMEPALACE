<script>
import {gameStore} from '@/stores/store'

export default {
  name: 'App',
  async beforeMount(){
    await gameStore.commit('getListOfGames')
    console.log(await gameStore.state.listOfGames)
  }
}
</script>

<template>
  <RouterView />
</template>
