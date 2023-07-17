<template>
  <div class="section">
		<!-- container -->
		<div class="container">
			<!-- row -->
			<div class="row">
				<div class="col-md-8">
					<div class="section-row">
						<div class="section-title">
							<h2 class="title">Contact Information</h2>
						</div>
						<p>Malis debet quo et, eam an lorem quaestio. Mea ex quod facer decore, eu nam mazim postea. Eu deleniti pertinacia ius. Ad elitr latine eam, ius sanctus eleifend no, cu primis graecis comprehensam eum. Ne vim prompta consectetuer, etiam signiferumque ea eum.</p>
						<ul class="contact">
							<li><i class="fa fa-phone"></i> 202-555-0194</li>
							<li><i class="fa fa-envelope"></i> <a href="#">callie@email.com</a></li>
							<li><i class="fa fa-map-marker"></i> 123 6th St.Melbourne, FL 32904</li>
						</ul>
					</div>

					<div class="section-row">
						<div class="section-title">
							<h2 class="title">Mail us</h2>
						</div>
						<form>
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<TextField v-model="contactObj.email" placeholder="Email"/>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<TextField v-model="contactObj.subject" placeholder="Subject"/>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<TextField v-model="contactObj.message" label="Message" :multiline="true"/>
									</div>
									<button class="primary-button" @click="sendMessage">Submit</button>
								</div>
								<span class="alert alert-danger" v-if="error">{{error}}</span>
								<span class="alert alert-success" v-if="success">{{success}}</span>

							</div>
						</form>
					</div>
				</div>
				<div class="col-md-4">
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
				</div>
			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
	</div>
</template>

<script>
export default {
  name: "ContactComponent",
	data(){
		return {
			contactObj : {
				email : "",
				subject: "",
				message: "",
				
			},
			error: "",
			success: ""
		}
	},
	methods: {
		sendMessage(){
			this.error = ""
			if (!this.contactObj.email || !this.contactObj.subject || !this.contactObj.message) {
				this.error = "All fields are required";
				return;
			}
			this.success = "Message sent successfully";
		}
	}
}
</script>