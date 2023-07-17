<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <Blog/>
        <Sidebar/>
    </div>
  </div>
</div>

</template>


<script>
import Blog from "./HomeContent.vue"
import Sidebar from "./SidebarContent.vue"
export default {
  name: "HomeSidebar",
  components: {
    Blog,
    Sidebar
  }
}
</script>