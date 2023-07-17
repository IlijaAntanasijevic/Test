<template>
  <div class="section">
    <!-- container -->
    <div class="container">
      <!-- row -->
      <div id="hot-post" class="row hot-post">
        <div class="col-md-8 hot-post-left">
          <!-- post -->
          <div class="post post-thumb">
            <a class="post-img" href="#" @click="viewPost(topPost.id)"><img :src="'assets/img/'+topPost.mainImg" :alt="topPost.title"></a>
            <div class="post-body">
              <div class="post-category">
                <span class="category">{{topPost.category}}</span>
              </div>
              <h3 class="post-title title-lg"><a href="#"  @click="viewPost(topPost.id)">{{ topPost.title }}</a></h3>
              <ul class="post-meta">
                <li><span>{{topPost.author}}</span></li>
                <li>{{topPost.date}}</li>
              </ul>
            </div>
          </div>
          <!-- /post -->
        </div>
        <div class="col-md-4 hot-post-right">

          <div v-for="p in postsWithMostViews" :key="p.id" class="post post-thumb">
            <a class="post-img" href="#"  @click="viewPost(p.id)"><img :src="'assets/img/'+p.mainImg" :alt="p.title"></a>
            <div class="post-body">
              <div class="post-category">
                <span class="category">{{p.category}}</span>
              </div>
              <h3 class="post-title"><a href="#"  @click="viewPost(p.id)">{{p.title}}</a></h3>
              <ul class="post-meta">
                <li><span>{{p.author}}</span></li>
                <li>{{p.date}}</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "HomeHeader",
  mounted() {
    //console.log(this.topPost)
  },
  computed: {
    ...mapGetters(['postsWithMostViews','topPost'])
  },
  methods: {
    viewPost(id){
      this.$router.push({ name: "post", params: { id: id }});
    }
  }
}
</script>

<style scoped>
.category {
  color: #ee4266;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
}
</style>