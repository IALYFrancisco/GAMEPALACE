<template>
    <section class="action">
        <button>add game</button>
    </section>
    <section class="no-games" v-if="_listOfGames.length == 0">
        <h4>No <span class="red">games</span> availables 🎮</h4>
    </section>
    <section v-else>
        <table>
        </table>
    </section>
</template>

<script>
import { gameStore } from '@/stores/store';
export default {
    name: "GamesComponent",
    data(){
        return {
            _listOfGames: gameStore.state.listOfGames
        }
    },
    mounted(){
        gameStore.commit('getListOfGames')
    }
}
</script>

<style>
.no-games {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
}

.no-games h4 {
    color: #333;
}

.no-games h4 span {
    color: #ff0000;
}

.action {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 30px;
}

.action button {
  padding: 5px 20px;
  font-size: 13px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 3px;
  box-shadow: 1px 1px 10px #33333356;
  background-color: #ff0000;
  color: white;
}
</style>