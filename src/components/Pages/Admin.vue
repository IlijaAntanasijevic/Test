<template>
  <div>
    <h1 class="text-center my-5">Admin</h1>
    <div class="container">
      <div class="row">
        <div v-for="b in changeBlogs" :key="b.id" class="post post-widget col-4 border">
          <a class="post-img" href="#" @click="viewPost(b.id)"><img :src="'assets/img/'+b.mainImg" :alt="b.title"></a>
          <div class="post-body text-center">
            <h3 class="post-title"><a href="#" @click="viewPost(b.id)">{{b.title}}</a></h3>
            <p class="p-0 m-0"><i class="fa fa-eye me-2"></i>{{b.views}}</p>
            <button class="btn btn-danger mt-4" @click="deleteBlog(b.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "adminComponent",
  computed: {
      ...mapGetters(["changeBlogs"])
  },
  methods: {
    viewPost(id){
      this.$router.push({ name: "post", params: { id: id }});
    },
    deleteBlog(id){
      this.$store.commit('deletePost',id)
    }
  },
}
</script>