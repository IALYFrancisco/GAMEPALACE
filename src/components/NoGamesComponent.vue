<template>
  <div id="no-games" v-if="true">
    <h3>No <span class="red">games</span> availables 🎮</h3>
  </div>
</template>

<script>
export default {
  name: 'NoGamesComponent'
}
</script>

<style>
#no-games {
  width: 50%;
  height: max-content;
  margin: 100px auto 100px auto;
  text-align: center;
  font-size: 30px;
  color: #333;
}

.red {
  color: #ff0000;
}
</style>
