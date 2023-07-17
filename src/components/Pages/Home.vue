<template>
   <main>
    <HomeHeader/>
    <Main />
  </main>
</template>
<script>
import HomeHeader from "../HomeHeader.vue"
import Main from "../Main.vue"
export default {
  name: "HomePage",
  components: {
    HomeHeader,
    Main
  }
}
</script>