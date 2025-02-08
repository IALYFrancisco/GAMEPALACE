<template>
  <div class="container">
    <SidebarAdminBlog></SidebarAdminBlog>
    <section class="dynamicPartContainer">
      <RouterView/>
    </section>
  </div>
</template>

<script>
import SidebarAdminBlog from '@/components/SidebarAdminBlog.vue'
import { RouterView } from 'vue-router';
export default {
  name: 'DashboardView',

  data: function () {
    return {}
  },
  components: {
    SidebarAdminBlog,
    RouterView
  }
}
</script>

<style>
div.container {
  width: 100%;
  height: max-content;
  display: flex;
}

.dynamicPartContainer {
  width: calc(100% - 150px);
  height: 100vh;
  overflow-y: auto;
}
</style>
