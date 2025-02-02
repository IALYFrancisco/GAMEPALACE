<template>
  <form action="" id="edit_element" v-on:submit="test()">
    <p>Sign in</p>
    <div class="form_element">
      <label for="username">Type your full name:</label>
      <input type="text" name="username" id="username" placeholder="ex: IALY Francisco Raymond" />
    </div>

    <div class="form_element">
      <label for="userbirthdate">Type your birthdate:</label>
      <input type="date" name="userbirthdate" id="userbirthdate" />
    </div>

    <div class="form_element">
      <label for="usermail">Type your email:</label>
      <input
        type="email"
        name="usermail"
        id="usermail"
        placeholder="ex: ialyfrancisco7@gmail.com"
      />
    </div>

    <div class="form_element">
      <label for="userpassword">Type your password:</label>
      <input
        type="password"
        name="userpassword"
        id="userpassword"
        placeholder="Choose a strong password"
      />
    </div>

    <div class="form_action">
      <button type="submit">Submit</button>
      <a href="#" id="link_to_signup">Skip</a>
    </div>
  </form>

  <div class="all_product_container">
    <NavbarTopAdminBlog></NavbarTopAdminBlog>

    <div class="cards">
      <div class="card">
        <p class="text">Effectifs totals:</p>
        <hr />
        <p class="number">
          {{ effectif_total_de_produits }}
        </p>
      </div>
      <div class="card">
        <p class="text">Votre solde:</p>
        <hr />
        <p class="number">Ar 432000</p>
      </div>
      <div class="card">
        <p class="text">Trafiques:</p>
        <hr />
        <p class="number">4</p>
      </div>
      <div class="card">
        <p class="text">Message:</p>
        <hr />
        <p class="number">13</p>
      </div>
    </div>
    <nav class="recherche">
      <ul>
        <li class="left">
          <label for="recherche">Rechercher un utilisateur</label>
          <input type="text" name="" id="" placeholder="ex: username: IALY" />
        </li>
      </ul>
    </nav>
    <div class="principal">
      <table style="width: 100%">
        <tr>
          <th>Nome des utilisateurs</th>
          <th>Date de naissance</th>
          <th>Poid des utilisateurs</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
        <tr v-for="item in tableau_d_objet">
          <td>
            {{ item.username }}
          </td>
          <td>
            {{ item.userBirthdate }}
          </td>
          <td>
            {{ item.usermail }}
          </td>
          <td>
            {{ item.userpassword }}
          </td>
          <td class="list_action">
            <a
              href="#"
              style="margin-right: 50px"
              v-on:click="_delete(tableau_d_objet.indexOf(item))"
              >Delete</a
            >
            <a href="#" v-on:click="_edit(tableau_d_objet.indexOf(item))">Edit</a>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import NavbarTopAdminBlog from './NavbarTopAdminBlog.vue'

export default {
  data: function () {
    return {
      effectif_total_de_produits: localStorage.length,
      tableau_d_objet: [],
      element_edit_index: null
    }
  },
  components: {
    NavbarTopAdminBlog
  },
  methods: {
    _delete(_index) {
      this.tableau_d_objet.shift(_index)
      localStorage.clear()

      for (let counter = 0; counter < this.tableau_d_objet.length; counter++) {
        localStorage.setItem(
          `key${localStorage.length}`,
          JSON.stringify(this.tableau_d_objet[counter])
        )
      }

      this.effectif_total_de_produits = localStorage.length
    },

    _edit(index) {
      const all_edit_form_input = document.querySelectorAll('form#edit_element input')

      const form_to_edit = document.querySelector('form#edit_element')

      for (let counter = 0; counter < all_edit_form_input.length; counter++) {
        if (counter == 0) {
          all_edit_form_input[counter].value = this.tableau_d_objet[index]['username']
        } else if (counter == 1) {
          all_edit_form_input[counter].value = this.tableau_d_objet[index]['userBirthdate']
        } else if (counter == 2) {
          all_edit_form_input[counter].value = this.tableau_d_objet[index]['usermail']
        } else {
          all_edit_form_input[counter].value = this.tableau_d_objet[index]['userpassword']
        }
      }

      form_to_edit.style.display = 'block'
      form_to_edit.style.opacity = '1'
      form_to_edit.style.transition = '3s'

      this.element_edit_index = index
    },

    skip_form() {
      const form_to_edit = document.querySelector('form#edit_element')
      form_to_edit.style.opacity = '0'
      form_to_edit.style.display = 'none'
      form_to_edit.style.transition = '3s'
    },

    // addingNewValues(index){

    //     const all_edit_form_input = document.querySelectorAll("form#edit_element input");

    //     for(let counter = 0; counter < all_edit_form_input.length; counter++) {
    //         if(counter == 0){
    //             this.tableau_d_objet[index]["username"] = all_edit_form_input[counter].value
    //         }else if(counter == 1){
    //             this.tableau_d_objet[index]["userBirthdate"] = all_edit_form_input[counter].value
    //         }
    //         else if(counter == 2){
    //             this.tableau_d_objet[index]["usermail"] = all_edit_form_input[counter].value
    //         }else {
    //             this.tableau_d_objet[index]["userpassword"] = all_edit_form_input[counter].value
    //         }
    //     }

    //     localStorage.clear()

    //     for(let counter = 0; counter < this.tableau_d_objet.length; counter++){
    //         localStorage.setItem(`key${localStorage.length}`, JSON.stringify((this.tableau_d_objet[counter])));
    //     }
    // },
    test() {
      var index = this.element_edit_index

      const all_edit_form_input = document.querySelectorAll('form#edit_element input')

      for (let counter = 0; counter < all_edit_form_input.length; counter++) {
        if (counter == 0) {
          this.tableau_d_objet[index]['username'] = all_edit_form_input[counter].value
        } else if (counter == 1) {
          this.tableau_d_objet[index]['userBirthdate'] = all_edit_form_input[counter].value
        } else if (counter == 2) {
          this.tableau_d_objet[index]['usermail'] = all_edit_form_input[counter].value
        } else {
          this.tableau_d_objet[index]['userpassword'] = all_edit_form_input[counter].value
        }
      }

      localStorage.clear()

      for (let counter = 0; counter < this.tableau_d_objet.length; counter++) {
        localStorage.setItem(
          `key${localStorage.length}`,
          JSON.stringify(this.tableau_d_objet[counter])
        )
      }
    }
  },
  //created() est une fonction prédéfinie, une fonction hook.
  created() {
    for (let counter = 0; counter < localStorage.length; counter++) {
      this.tableau_d_objet.push(JSON.parse(localStorage.getItem(`key${counter}`)))
    }
  }
}
</script>
<style>
form#edit_element {
  position: absolute;
  top: 100px;
  left: 550px;
  height: max-content;
  background-color: #fff;
  box-shadow: 2px 2px 10px #00000075;
  border-radius: 5px;
  padding: 18px;
  opacity: 0;
  display: none;
  transition: 3s;
}

form#edit_element div.form_element {
  margin-bottom: 15px;
}

form#edit_element div.form_action {
  margin-top: 25px;
}

form#edit_element div.form_action button {
  cursor: pointer;
  background: #333;
  height: 30px;
  border-radius: 4px;
  color: white;
  outline: none;
  width: 100px;
  margin-right: 140px;
  border: none;
  box-shadow: 2px 2px 5px #3333336b;
}

form#edit_element div.form_action a {
  font-size: 10px;
  color: #000;
}

form#edit_element p {
  width: 100%;
  border-bottom: 2px #333 solid;
  font-size: 25px;
  margin-bottom: 25px;
  color: #333;
}

form#edit_element label {
  color: #333;
  font-size: 12px;
}

form#edit_element input {
  outline: none;
  width: 100%;
  height: 35px;
  padding-left: 5px;
}

div.all_product_container {
  width: 100%;
  height: 60px;
}

div.all_product_container div.principal {
  width: 95%;
  height: 45vh;
  margin: 20px auto;
  overflow-y: scroll;
}

div.all_product_container .cards {
  width: max-content;
  margin: 20px auto;
  height: max-content;
  display: flex;
  justify-content: space-around;
}

div.all_product_container .cards .card {
  width: 250px;
  height: 150px;
  background: #333;
  margin: 10px 10px;
  border-radius: 4px;
}

div.all_product_container .cards .card p.text {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 20px;
  color: white;
}

div.all_product_container .cards .card p.number {
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
}

div.all_product_container .cards .card hr {
  border: none;
  background: rgb(78, 77, 77);
}

table,
th,
td {
  color: white;
  border: 2px solid #818181;
  border-collapse: collapse;
}

th,
td {
  height: 50px;
}

th {
  background: #333;
}

td {
  color: #333;
  padding-left: 45px;
}

nav.recherche {
  margin: auto;
  width: 92%;
}

nav.recherche ul {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
}

nav.recherche ul li {
  display: flex;
  position: absolute;
  right: 25px;
  flex-direction: column;
}

nav.recherche ul li input {
  width: 300px;
  outline: none;
  height: 37px;
  border: 2px #5a5a5a solid;
  border-radius: 5px;
  padding-left: 10px;
}

nav.recherche ul li label {
  color: #5a5a5a;
}
</style>
