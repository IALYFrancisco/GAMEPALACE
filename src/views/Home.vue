<template>
  <header id="bannier" style="background-image: url('/src/assets/bannier (1).jpg')">
    <router-link v-bind:to="{ name: 'Home' }">
      <div class="element">
        <img src="/src/assets/logo.png" alt="logo" title="logo" class="logo" />
        <span>GAMEPALACE</span>
      </div>
    </router-link>
    <div class="header-actions">
      <img src="/src/assets/cart.png" alt="" id="cart" v-if="_userIsConnected" />
      <button @click="goToLoginRegisterPage" v-if="!_userIsConnected">Login</button>
      <button v-if="_userIsConnected">Log out</button>
    </div>
  </header>
  <nav class="home">
    <ul>
      <li>Tous les jeux</li>
      <li>Consoles</li>
      <li>Gratuits</li>
      <li>Jeux à venir</li>
    </ul>
  </nav>
  <NoGamesComponent />
  <!-- <section id="all_games" v-if="_listOfGames.length > 0">
    <div class="card" v-for="game in _listOfGames">
      <img src="/src/assets/add-to-cart.png" alt="" class="add-to-cart" />
      <img src="/src/assets/view-details.png" alt="" class="view-details" />
      <div class="img">
        <img :src="game.poster_file_url" alt="" />
      </div>
    </div>
  </section> -->
</template>

<script>
import { userStore } from '@/stores/store';
import NoGamesComponent from '@/components/NoGamesComponent.vue'
export default {
  name: 'HomeView',
  components: {
    NoGamesComponent
  },
  data() {
    return {
      _userIsConnected: userStore.state.userIsConnected
    }
  },
  methods: {
    goToLoginRegisterPage() {
      this.$router.push({ name: 'Login-or-register' })
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins;
}

a {
  color: #333;
  text-decoration: none;
}

header {
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 1px 1px 10px #33333356;
  transition: 0.5s;
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

header button {
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

header .header-actions {
  display: flex;
  height: max-content;
  align-items: center;
  column-gap: 20px;
}

#cart {
  cursor: pointer;
}

header div.element {
  width: inherit;
  height: max-content;
  display: flex;
  align-items: center;
}

header div.element span {
  color: white;
  font-size: 20px;
  margin-left: 10px;
}

header div.element img {
  width: 60px;
}

nav.home {
  width: 100%;
  height: 55px;
}

nav.home ul {
  width: 500px;
  height: inherit;
  margin: auto;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
}

nav.home ul li {
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  color: #333;
}

nav.home ul li::before {
  position: absolute;
  content: '';
  width: 0%;
  height: 2px;
  background: #333;
  bottom: 0;
  transition: 0.3s;
}

nav.home ul li:hover::before {
  width: 100%;
  transition: 0.3s;
}

section#all_games {
  width: 100%;
  height: max-content;
  padding: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: center;
  gap: 40px;
}

section#all_games div.card {
  width: 200px;
  height: 300px;
  box-shadow: 1px 1px 5px #3333332a;
  border-radius: 3px;
  transition: 0.3s;
  padding-top: 2px;
  background: #00000028;
  position: relative;
}

.card > img.add-to-cart {
  width: 30px;
  position: absolute;
  top: 60%;
  left: 43%;
  opacity: 0;
  transition: 0.5s;
}

.card:hover > img.add-to-cart {
  opacity: 1;
  top: 35%;
  transition: 0.5s;
  z-index: 1;
}

.card > img.view-details {
  width: 30px;
  position: absolute;
  top: 60%;
  left: 43%;
  opacity: 0;
  transition: 0.5s;
}

.card:hover > img.view-details {
  opacity: 1;
  transition: 0.5s;
  z-index: 1;
  top: 55%;
}

section#all_games div.card:hover {
  margin-top: -10px;
  transition: 0.3s;
  cursor: pointer;
}

section#all_games div.card div.img {
  width: 98%;
  height: 100%;
  margin: auto;
  border-radius: 3px;
  position: relative;
}

section#all_games div.card div.img::before {
  position: absolute;
  content: '';
  background: #33333375;
  width: 100%;
  height: 0;
  bottom: 0;
  transition: 0.4s;
}

section#all_games div.card:hover div.img::before {
  height: 100%;
}

section#all_games div.card div.img img {
  width: 100%;
  height: 100%;
  display: flex;
  object-fit: cover;
}
</style>
