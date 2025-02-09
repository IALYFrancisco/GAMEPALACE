<script>
import {gameStore} from '@/stores/store'
export default {
  name: 'App',
  async mounted() {
    console.log( await gameStore.getters.requestIsDoneAndListIsNotEmpty )
  },
}
</script>

<template>
  <RouterView />
</template>
