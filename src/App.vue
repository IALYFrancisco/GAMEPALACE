<script>
import {gameStore} from '@/stores/store'

export default {
  name: 'App',
  async beforeMount(){
    await gameStore.commit('getListOfGames')
  }
}
</script>

<template>
  <RouterView />
</template>
