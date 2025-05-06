<script>
import { authenticationStore } from './stores/store';

export default {
  name: 'App',
  mounted() {
    setInterval(async ()=> {
      if(authenticationStore.getters.userIsConnected){
        await authenticationStore.dispatch('REFRESH_TOKEN')
      }
    }, 10 * 60 * 1000)  
  }
}
</script>

<template>
  <RouterView />
</template>
