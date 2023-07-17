import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from "vue-router";
import { ValidationProvider,extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import 'vuetify/dist/vuetify.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/style.css";
import store from "./store/store.js";
/* Components */
import Contact from "./components/Pages/Contact.vue"
import Home from "./components/Pages/Home.vue"
import Blog from "./components/Pages/Content.vue"
import Login from "./components/Pages/Login.vue"
import Register from "./components/Pages/Register.vue"
import TextField from './components/Forms/TextField.vue'
import SinglePost from './components/Pages/Post.vue'
import AddBlog from './components/Pages/AddBlog.vue'
import Admin from "./components/Pages/Admin.vue"

const routes = [
  {path: "/home", component: Home},
  {path: "/", component: Home},
  {path: "/contact", component: Contact},
  {path: "/blog", component: Blog},
  {path: "/login", component: Login},
  {path: "/register", component: Register},
  {path: "/addBlog", component: AddBlog},
  {path: "/admin", component: Admin},
  {path: "/post/:id", name: "post", component: SinglePost}

]

const router = new VueRouter({
  routes
})

Vue.component("TextField",TextField)
Vue.component("ValidationProvider",ValidationProvider)

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.config.productionTip = false

Object.keys(rules).forEach(rule => {
  extend(rule,rules[rule]);
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
