<template>
  <header id="bannier" style="background-image: url('/src/assets/bannier (1).jpg')">
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
  <nav class="home">
    <ul>
      <li>Tous les jeux</li>
      <li>Consoles</li>
      <li>Gratuits</li>
      <li>Jeux à venir</li>
    </ul>
  </nav>
  <LoaderComponent v-if="!requestIsDone" />
  <NoGamesComponent v-if="requestIsDone && listOfGames.length == 0" />
  <section id="all_games" v-if="requestIsDone && listOfGames.length > 0">
    <div class="card" v-for="game in listOfGames" :key="game._id">
      <img
        src="/src/assets/add-to-cart.png"
        alt=""
        class="add-to-cart"
        @click="addToCart(game._id)"
      />
      <router-link :to="{name: 'Details-game', params: {_id: game._id}}">
        <img src="/src/assets/view-details.png" alt="" class="view-details" />
      </router-link>
      <div class="img">
        <img :src="game.poster_file_url" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import { authenticationStore } from '@/stores/store'
import NoGamesComponent from '@/components/NoGamesComponent.vue'
import LoaderComponent from '@/components/Others/LoaderComponent.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    NoGamesComponent,
    LoaderComponent
  },
  data() {
    return {
      UserIsConnected: authenticationStore.getters.userIsConnected,
      listOfGames: [],
      requestIsDone: false
    }
  },
  methods: {
    goToLoginRegisterPage() {
      this.$router.push({ name: 'Login-or-register' })
    },
    async getListOfGames() {
      try {
        await axios({
          method: 'GET',
          url: `${import.meta.env.VITE_BASE_URL}/game`
        })
          .then((response) => {
            if (response.status == 200) {
              this.listOfGames = response.data
            } else if (response.status == 204) {
              console.log('Aucun élément dans la liste de jeux')
            }
          })
          .catch((error) => console.log(`Erreur de récupération de liste de jeux: ${error}`))
      } catch (error) {
        console.log(`Erreur de récupération de liste de jeux: ${error}`)
      } finally {
        this.requestIsDone = true
      }
    },
    addToCart(gameId) {
      this.UserIsConnected
        ? this._addToCart(gameId)
        : window.alert('Vous devez vous connecter pour faire un ajout au panier 🎫🎫')
    },
    async _logOut(){
      await authenticationStore.dispatch('LOGOUT')
      this.UserIsConnected = authenticationStore.getters.userIsConnected
      this.$router.push({ name: 'Home' })
    }
  },
  async mounted() {
    await this.getListOfGames()
  }
}
</script>

<style scoped>
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

.card > a img.view-details {
  width: 30px;
  position: absolute;
  top: 60%;
  left: 43%;
  opacity: 0;
  transition: 0.5s;
}

.card:hover > a img.view-details {
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
