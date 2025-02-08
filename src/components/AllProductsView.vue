<template>
  <div class="all_product_container">
    <NavbarTopAdminBlog></NavbarTopAdminBlog>
    <nav class="recherche">
      <ul>
        <li class="left">
          <label for="recherche">Rechercher un utilisateur</label>
          <input type="text" name="" id="" placeholder="ex: username: IALY" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import NavbarTopAdminBlog from './NavbarTopAdminBlog.vue'

export default {
  components: {
    NavbarTopAdminBlog
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
