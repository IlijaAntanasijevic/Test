<template>
  <div class="col-md-4">
    <!-- ad widget-->
      <div class="aside-widget text-center">
        <a href="#" style="display: inline-block;margin: auto;">
          <img class="img-responsive" src="assets/img/ad-3.jpg" alt="">
        </a>
      </div>
    <!-- /ad widget -->

    <!-- social widget -->
    <div class="aside-widget">
      <div class="section-title">
        <h2 class="title">Social Media</h2>
      </div>
      <div class="social-widget">
        <ul>
          <li>
            <a href="#" class="social-facebook">
              <i class="fa fa-facebook"></i>
              <span>21.2K<br>Followers</span>
            </a>
          </li>
          <li>
            <a href="#" class="social-twitter">
              <i class="fa fa-twitter"></i>
              <span>10.2K<br>Followers</span>
            </a>
          </li>
          <li>
            <a href="#" class="social-google-plus">
              <i class="fa fa-google-plus"></i>
              <span>5K<br>Followers</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- /social widget -->

    <!-- category widget -->
    <div class="aside-widget">
      <div class="section-title">
        <h2 class="title">Categories</h2>
      </div>
      <div class="category-widget">
        <ul>
          <li v-for="c in categories" :key="c.id">
            <p class="categories" href="#" @click="filterCategories(c.id)">{{ c.category }} <span class="float-end">{{c.total}}</span></p>
          </li>
        </ul>
      </div>
    </div>
    <!-- /category widget -->
      </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "SidebarContent",
  computed: {
    ...mapGetters(['categories'])
  },
  methods: {
    filterCategories(id){
      this.$store.dispatch("filterPosts",id)
    }
  }
}
</script>

<style scoped>
.categories {
    cursor: pointer;
    display: block;
    text-transform: uppercase;
    font-weight: 700;
    color: #11151c;
}
.categories:hover{
  color: #ee4266;
}
</style>