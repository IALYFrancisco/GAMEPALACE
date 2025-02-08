<template>
  <nav>
    <div class="profil-container">
      <img src="../assets/avatar1.png" alt="profil" title="profil" />
      <span>Admin</span>
    </div>
  </nav>

  <hr />
</template>

<script>
export default {
}
</script>

<style>
nav {
  width: 100%;
  height: 63px;
  display: flex;
  align-items: center;
  position: relative;
}

nav div.profil-container {
  position: absolute;
  right: 10px;
  width: 36px;
  overflow: hidden;
  height: max-content;
  padding: 2px;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;
}

nav div.profil-container:hover {
  width: 98px;
  transition: 0.3s;
}

nav div.profil-container span {
  font-size: 12px;
  margin-left: 10px;
  padding-right: 10px;
  width: max-content;
}

nav div.profil-container img {
  width: 30px;
  border-radius: 50%;
}

hr {
  width: 97%;
  height: 0.1px;
  margin: 0 auto 75px auto;
  border: none;
  background-color: rgb(231, 229, 229);
}
</style>
