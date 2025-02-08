<template>
  <div id="no-games" v-if="_listOfGames.length==0">
    <h3>No <span class="red">games</span> availables 🎮</h3>
  </div>
</template>

<script>
import { gameStore } from '@/stores/store';
export default {
  name: 'NoGamesComponent',
  data(){
    return{
      _listOfGames: gameStore.state.listOfGames
    }
  }
}
</script>

<style>
#no-games {
  width: 50%;
  height: max-content;
  margin: 100px auto 100px auto;
  text-align: center;
  font-size: 30px;
  color: #333;
}

.red {
  color: #ff0000;
}
</style>
