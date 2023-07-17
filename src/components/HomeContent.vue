<template>
        <div class="col-md-8">
          <!-- row -->
          <div class="row">
            <div class="col-md-12">
              <div class="section-title">
                <h2 class="title">Recent posts</h2>
              </div>
            </div>
  
            <div class="col-md-6" v-for="p in lastPost" :key="p.id">
              <div class="post">
                <a class="post-img" href="#" @click="viewPost(p.id)"><img :src="'assets/img/'+p.mainImg" :alt="p.title"></a>
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

</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "BlogContent",
  mounted() {
    //console.log(this.lastPost)
  },
  computed: {
    ...mapGetters(['lastPost'])
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