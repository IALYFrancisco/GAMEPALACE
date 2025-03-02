<template>
  <form action="" v-bind:class="{ active: formActivClass }" @submit.prevent="addGame">
    <div class="hideForm" @click="hideAddingForm">&Cross;</div>
    <h4>Adding game</h4>
    <hr />
    <div class="form-element">
      <label for="game-name">Name :</label>
      <input type="text" id="game-name" required v-model="gameInfoToAdd.name" />
    </div>
    <div class="form-element">
      <label for="game-poster-file-url">Poster url :</label>
      <input
        type="url"
        id="game-poster-file-url"
        required
        v-model="gameInfoToAdd.poster_file_url"
      />
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
  <LoaderComponent v-if="!requestIsDone" />
  <section class="list-of-games" v-if="requestIsDone && listOfGames.length > 0">
    <ul>
      <li class="title-container">
        <p class="poster">POSTER</p>
        <p class="name">NAME</p>
        <p class="category">CATEGORY</p>
        <p class="actions">ACTIONS</p>
      </li>
      <li v-for="game in listOfGames">
        <div class="img-container">
          <img v-bind:src="game.poster_file_url" :alt="'poster du jeux ' + game.name" />
        </div>
        <p class="name">{{ game.name }}</p>
        <p class="category">{{ game.category }}</p>
        <div class="actions">
          <img src="/src/assets/edit.png" alt="" />
          <img src="/src/assets/trash.png" alt="" />
        </div>
      </li>
    </ul>
  </section>
  <section class="no-games" v-if="requestIsDone && listOfGames.length == 0">
    <h4>No <span class="red">games</span> availables 🎮</h4>
  </section>
</template>

<script>
import axios from 'axios'
import LoaderComponent from '@/components/Others/LoaderComponent.vue'
export default {
  name: 'GamesComponent',
  data() {
    return {
      formActivClass: false,
      gameInfoToAdd: {
        name: '',
        poster_file_url: '',
        category: 'pc'
      },
      listOfGames: [],
      requestIsDone: false
    }
  },
  components: {
    LoaderComponent
  },
  methods: {
    async addGame() {
      try {
        axios({
          method: 'POST',
          url: `${import.meta.env.VITE_BASE_URL}/game`,
          data: this.gameInfoToAdd
        }).then((response) => {
          if (response.status == 201) {
            window.alert('Jeu ajouté dans la base de données ✅✅')
          }
        })
      } catch (error) {
        console.log(`Erreur d'ajout du ressource dans la base de données: ${error}`)
      }
    },
    showAddingForm() {
      this.formActivClass = true
    },
    hideAddingForm() {
      this.formActivClass = false
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
              console.log('La liste des jeux est vide')
            }
          })
          .catch((error) => {
            console.log(`Erreur de récupération de jeux: ${error}`)
          })
      } catch (error) {
        console.log(`Erreur de récupération de liste de jeux: ${error}`)
      } finally {
        this.requestIsDone = true
      }
    }
  },
  async mounted() {
    await this.getListOfGames()
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
  box-shadow:
    1px 1px 10px #7b7b7b29,
    -1px -1px 10px #33333329;
  position: absolute;
  left: 45%;
  top: 100px;
  border-radius: 4px;
  padding: 20px;
  box-sizing: border-box;
  opacity: 0;
  transform: scale(1.25);
  transition:
    opacity 200ms ease-in-out,
    transform 200ms ease-in-out;
}

form.active {
  opacity: 1;
  transform: scale(1);
  transition:
    opacity 200ms ease-in-out,
    transform 200ms ease-in-out;
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

.list-of-games {
  width: 90%;
  margin: 50px auto 0 auto;
}

.list-of-games p {
  color: #333;
}

.list-of-games .img-container {
  width: 50px;
  height: 70px;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.list-of-games ul li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-top: 1px #d8d8d8 solid;
  padding-top: 20px;
}

.list-of-games .name {
  margin-left: 50px;
  width: 35%;
  overflow: auto;
}

.list-of-games .category {
  width: 12%;
}

.list-of-games .title-container {
  font-weight: 900;
  display: flex;
  align-items: center;
}

.actions img {
  width: 25px;
  cursor: pointer;
}

.actions img:last-child {
  margin-left: 15px;
}
</style>
