<template>
  <div class="container">
    <SidebarAdminBlog></SidebarAdminBlog>
  </div>
</template>

<script>
import SidebarAdminBlog from '@/components/SidebarAdminBlog.vue'

export default {
  name: 'DashboardView',

  data: function () {
    return {}
  },
  components: {
    SidebarAdminBlog
  }
}
</script>

<style>
div.container {
  width: 100%;
  height: max-content;
  display: flex;
}
</style>
