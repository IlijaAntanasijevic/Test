<template>
  <main>
    <header>
    <div id="post-header" class="page-header">
			<div class="page-header-bg w-100" :style="{'background-image': `url(assets/img/${post.mainImg})`}" ></div>
			<div class="container" id="pageHeaderText">
				<div class="row">
					<div class="col-md-10">
						<div class="post-category">
							<a href="category.html">{{post.category}}</a>
						</div>
						<ul class="post-meta">
							<li><a href="author.html">{{post.author}}</a></li>
							<li>{{post.date}}</li>
							<li><i class="fa fa-eye"></i> {{post.views}}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- /PAGE HEADER -->
	</header>
	<!-- /HEADER -->

	<!-- section -->
	<div class="section">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<!-- post share -->
					<div class="section-row">
						<div class="post-share">
							<a href="#" class="social-facebook"><i class="fa fa-facebook"></i><span>Share</span></a>
							<a href="#" class="social-twitter"><i class="fa fa-twitter"></i><span>Tweet</span></a>
							<a href="#" class="social-pinterest"><i class="fa fa-pinterest"></i><span>Pin</span></a>
							<a href="#" ><i class="fa fa-envelope"></i><span>Email</span></a>
						</div>
					</div>
					<!-- /post share -->

					<!-- post content -->
					<div class="section-row">
						<h3>{{post.title}}</h3>
              
						<p>{{post.text.slice(0,331)}}</p>
            <p>{{post.text.slice(331,675)}}</p>
            <p>{{post.text.slice(675,965)}}</p>
						<figure class="pull-right w-50">
							<img :src="'assets/img/'+post.postImages[0]" class="w-100 float-end" alt="blogImage">
						</figure>
						<blockquote class="blockquote w-75">
              <p>{{post.authorQuote}}</p>
							<footer class="blockquote-footer">{{post.author}}</footer>
						</blockquote>
            <p>{{post.text.slice(965,1125)}}</p>
            <p>{{post.text.slice(1125,1395)}}</p>
            <p>{{post.text.slice(1395)}}</p>
						<figure>
							<img :src="'assets/img/'+post.postImages[1]" alt="blogImageSecond">
						</figure>
					</div>
			
					<div class="section-row">
						<div class="post-tags">
							<ul>
								<li>TAGS:</li>
								<li v-for="tag,index in post.tags" :key="index">{{tag}} </li>
							</ul>
						</div>
					</div>

     
          
				</div>
			</div>
      
			<!-- /row -->
		</div>
		<!-- /container -->
	</div>
	<!-- /SECTION -->
  
  </main>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "singlePost",
  data(){
    return{
      id: null,
      post: {},
      paragraphChar: 0
    }
  },
  mounted(){
    //this.$router.go(-1);
    //this.$router.back()
    this.id = this.$route.params.id;
    if(this.$route.params.id){
      this.post = this.Allblogs.find(x => x.id == this.id);
      console.log(this.post)
    }
    //console.log(this.post.text.substring(0,200))
  },
  computed: {
    ...mapGetters(['Allblogs'])
  },
  methods: {
    
  }
}
</script>