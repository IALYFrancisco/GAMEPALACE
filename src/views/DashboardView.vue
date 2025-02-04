<template>
  <div class="container">
    <SidebarAdminBlog></SidebarAdminBlog>
    <AllProductsView></AllProductsView>
  </div>
</template>

<script>
import SidebarAdminBlog from '@/components/SidebarAdminBlog.vue'
import AllProductsView from '@/components/AllProductsView.vue'

export default {
  name: 'DashboardView',

  data: function () {
    return {}
  },
  components: {
    SidebarAdminBlog,
    AllProductsView
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
