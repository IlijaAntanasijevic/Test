<template>
    <header id="header">
		<!-- NAV -->
		<div id="nav">
			<!-- Top Nav -->
			<div id="nav-top">
				<div class="container">

							<!-- logo -->
							<div class="nav-logo">
								<a href="index.html" class="logo"><img src="assets/img/logo.png" alt=""></a>
							</div>
							<!-- /logo -->
						<!-- social -->
						<ul class="nav-social">
							<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
							<li><a href="#"><i class="fa fa-instagram"></i></a></li>
						</ul>
						<!-- /social -->

			

					<!-- search & aside toggle -->

					<!-- /search & aside toggle -->
				</div>
			</div>

			<!-- Main Nav -->
			<div id="nav-bottom">
				<div class="container">
					<!-- nav -->
					<ul class="nav-menu">
						<li v-for="item,index in items" :key="index">
							<router-link v-if="checkUser(item.name)" :to="item.path">{{item.name}}</router-link>	
						</li>			
						<li v-if="this.user"><a href="#" @click="logut">Logut</a></li>
					</ul>
					<!-- /nav <li><a href="#">Add Blog</a></li>
						<li><a href="#">Admin</a></li> -->
				</div>
			</div>
			<!-- /Main Nav -->
		</div>
		<!-- /NAV -->
	</header>
</template>

<script>
export default {
    name : "NavComponent",
		data(){
			return {
				user: undefined,
				role: "unauthorized"
			}
		},
		props: {
			items: {
				type: Array,
				required : true
			}
		},
		computed: {
    //...mapGetters(['role'])
    },
		mounted(){
			let user = JSON.parse(localStorage.getItem('user'))
			this.user = user;
				if(user){
					this.role = user.role;
				}
		},
		methods: {
			checkUser(navName){
					switch(navName){
						case 'Login':
							if(!this.user) return true; break;
						case 'Register':
							if(!this.user) return true; break;	
						case 'Admin':
							if(this.user && this.role == 'admin' ) return true;break;
						case 'Add Blog':
							if(this.user && this.role != 'admin') return true; break;	
						default: return true;	
					}
					
			},
			logut(){
				//alert()
				this.$store.commit('loginUser',undefined);
				this.$router.push('/login')
				location.reload();
			}
		}
}
</script>

<style scoped>
#nav-top {
	padding-bottom: 25px;

}
</style>