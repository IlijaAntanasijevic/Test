<template>
  <div class="section">
    <div class="container">
      <div>
        <input type="text" placeholder="Search..." v-model="keyword" class="form-control w-25 mb-4 mt-5"/>
      </div>
      <div v-if="changeBlogs.length" class="row">
          <!-- post -->
          <div v-for="b in changeBlogs" :key="b.id" class="post post-widget col-4">
            <a class="post-img" href="#" @click="viewPost(b.id)"><img :src="'assets/img/'+b.mainImg" :alt="b.title"></a>
            <div class="post-body">
              <div class="post-category">
                <a href="category.html">{{b.category}}</a>
              </div>
              <h3 class="post-title"><a href="#" @click="viewPost(b.id)">{{b.title}}</a></h3>
            </div>
          </div>
        </div>
       <div v-else>
          <p class="alert alert-danger">Sorry, but the requested post does not exist</p>
       </div> 
      </div>
    </div>

</template>


<script>
import { mapGetters } from 'vuex'
export default {
  name: "HomeContent",
  data(){
    return {
      keyword: ""
    }
  },
  computed: {
      ...mapGetters(["changeBlogs"])
  },
  methods: {
    viewPost(id){
      this.$router.push({ name: "post", params: { id: id }});
    }
  },
  watch: {
    keyword(){
      this.$store.dispatch("search",this.keyword)
    }
  }
  
}
</script>