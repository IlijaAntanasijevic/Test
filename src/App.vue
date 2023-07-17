<template>
  <div id="app">
    <Head/>
	<Nav :items="navItems"/>
	<router-view></router-view>
  <Footer/>


  </div>
</template>

<script>
import Head from "./components/fixed/Head.vue"
import Nav from "./components/fixed/Nav.vue"
import Footer from "./components/fixed/Footer.vue"

export default {
  name: 'App',
  components: {
    Head,
    Nav,
    Footer,
  },
	data(){
		return {
			navItems : [
				{path: "/home", name: "Home"},
				{path: "/blog", name: "Blog"},
				{path: "/contact", name: "Contact"},
				{path: "/addBlog", name: "Add Blog"},
				{path: "/admin", name: "Admin"},
				{path: "/login", name: "Login"},
				{path: "/register", name: "Register"},
			]
		}
	}
}
</script>

<style>

</style>
