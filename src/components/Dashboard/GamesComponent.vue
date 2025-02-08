<template>
    <form action="" v-bind:class="{'active' : formActivClass}" @submit.prevent="addGame">
        <div class="hideForm" @click="hideAddingForm">
            &Cross;
        </div>
        <h4>Adding game</h4>
        <hr>
        <div class="form-element">
            <label for="game-name">Name :</label>
            <input type="text" id="game-name" required v-model="gameInfoToAdd.name">
        </div>
        <div class="form-element">
            <label for="game-poster-file-url">Poster url :</label>
            <input type="url" id="game-poster-file-url" required v-model="gameInfoToAdd.poster_url">
        </div>
        <div class="form-element">
            <label for="game-category">Category</label>
            <select name="" id="game-category" v-model="gameInfoToAdd.category">
                <option value="pc">PC</option>
                <option value="xbox">Xbox</option>
                <option value="ps">PlayStation</option>
            </select>
        </div>
        <button>submit</button>
    </form>
    <section class="action">
        <button @click="showAddingForm">add game</button>
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
            _listOfGames: gameStore.state.listOfGames,
            formActivClass: false,
            gameInfoToAdd: {
                name: '',
                poster_url: '',
                category: 'pc'
            }
        }
    },
    methods: {
        addGame(){
            console.log(this.gameInfoToAdd)
        },
        showAddingForm(){
            this.formActivClass = true
        },
        hideAddingForm(){
            this.formActivClass = false
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

form {
    width: 300px;
    background: #333;
    box-shadow: 1px 1px 10px #7b7b7b29, -1px -1px 10px #33333329;
    position: absolute;
    left: 45%;
    top: 100px;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
    opacity: 0;
    transform: scale(1.25);
    transition: opacity 200ms ease-in-out, transform 200ms ease-in-out;
}

form.active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 200ms ease-in-out, transform 200ms ease-in-out;
}

form label {
    font-size: 13px;
    color: white;
    font-weight: 300;
    display: block;
    margin-bottom: 3px;
}

form h4 {
    color: white;
    font-weight: 400;
    margin: 0;
}

form hr {
  height: 0.1px;
  border: none;
  background: rgb(78, 77, 77);
  margin-bottom: 20px;
}

.form-element {
    width: 100%;
    margin-bottom: 25px;
}

.form-element input {
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    border: none;
    outline: none;
    border-radius: 3px;
    padding: 10px;
    color: #333;
}

form select {
    width: 100%;
    outline: none;
    border: none;
    padding: 10px;
    border-radius: 3px;
}

form button {
    float: right;
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

.hideForm {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: white;
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 50%;
    font-size: 13px;
    cursor: pointer;
}
</style>