<template>
    <h1>This is games component!</h1>
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
</style>