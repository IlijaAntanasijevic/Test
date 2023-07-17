<template>
    <footer id="footer">
		<!-- container -->
		<div class="container">
			<!-- row -->
			<div class="row justify-content-between">
				<div class="col-md-3">
					<div class="footer-widget">
						<div class="footer-logo">
							<a href="index.html" class="logo"><img src="assets/img/logo-alt.png" alt=""></a>
						</div>
						<p>Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.</p>
						<ul class="contact-social">
							<li><a href="#" class="social-facebook"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#" class="social-twitter"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#" class="social-google-plus"><i class="fa fa-google-plus"></i></a></li>
							<li><a href="#" class="social-instagram"><i class="fa fa-instagram"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="col-md-3">
					<div class="footer-widget">
						<h3 class="footer-title">Categories</h3>
						<div class="category-widget">
							<ul>
								<li v-for="c in categories" :key="c.id">
									<p class="categories" href="#" @click="filterCategories(c.id)">{{ c.category }} <span class="float-end">{{c.total}}</span></p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="footer-widget">
						<h3 class="footer-title">Tags</h3>
						<div class="tags-widget">
							<ul>
								<li v-for="t,index in tags" :key="index" class="tags"><span class="footeTags">{{t.tag}}</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!-- /row -->

			<!-- row -->
			<div class="footer-bottom row">
				<div class="col-md-6 col-md-pull-6">
					<div class="footer-copyright">Copyright All rights reserved</div>
				</div>
			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
	</footer>
</template>


<script>
import { mapGetters } from "vuex"
export default {
  name: "FooterComponent",
  computed: {
    ...mapGetters(['categories','tags'])
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
    color: #fff;
		margin: 0px;
		font-size: 1rem;
}
.categories:hover{
  color: #ee4266;
}
.tags {
	display: inline-block;
	margin-right: 4px;
	margin-bottom: 6px;
}
.footeTags{
	text-transform: uppercase;
	display: block;
	padding: 10px 15px;
	font-size: 12px;
	font-weight: 700;
	color: #97989b;
	background-color: #323335;
	border-radius: 2px;
	-webkit-transition: 0.2s all;
	transition: 0.2s all;
}
.footeTags:hover{
	color: #fff !important;
    background-color: #ee4266;
}
</style>