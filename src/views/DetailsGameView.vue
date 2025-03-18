<template>
    <header id="bannier">
    <router-link v-bind:to="{ name: 'Home' }">
      <div class="element">
        <img src="/src/assets/logo.png" alt="logo" title="logo" class="logo" />
        <span>GAMEPALACE</span>
      </div>
    </router-link>
    <div class="header-actions">
      <img src="/src/assets/cart.png" alt="" id="cart" v-if="UserIsConnected" />
      <button @click="goToLoginRegisterPage" v-if="!UserIsConnected">Login</button>
      <button v-if="UserIsConnected" @click="_logOut">Log out</button>
    </div>
  </header>
  <main>
    <section class="img-container">
        
    </section>
    <section></section>
  </main>
</template>

<script>

import axios from 'axios';
import { authenticationStore } from '@/stores/store';

export default {
    name: "DetailsGameView",
    data(){
        return {
            gameId: this.$route.params._id,
            UserIsConnected: authenticationStore.getters.userIsConnected,
            game: ''
        }
    },
    methods: {
      goToLoginRegisterPage() {
          this.$router.push({ name: 'Login-or-register' })
      },
      _logOut(){
        authenticationStore.commit('logOut')
        authenticationStore.commit('getTokenLatestValue')
        this.UserIsConnected = authenticationStore.getters.userIsConnected
        this.$router.push({ name: 'Home' })
      }
    },
    async mounted(){
        await axios({
            method: 'GET',
            url: `${import.meta.env.VITE_BASE_URL}/game?_id=${this.$route.params._id}`
        }).then((response) => { this.game = response;}).catch(error=>error)
    }
}

</script>

<style scoped>

#bannier {
    background-image: url('/src/assets/bannier (2).jpg');
}

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
  height: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 1px 1px 10px #33333356;
  transition: 0.5s;
  display: flex;
  justify-content: space-between;
  align-items: center;
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


</style>