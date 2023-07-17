import Vue from "vue";
import Vuex from "vuex";
import users from "./modules/users"
import blogs from "./modules/blog"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      users: users,
      blogs: blogs
  }
})