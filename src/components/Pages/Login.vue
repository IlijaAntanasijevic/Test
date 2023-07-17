<template>
  <div class="container">
    <h1 class="mt-4">Login</h1>
    <div class="row align-items-center flex-column mt-5">
      <ValidationProvider rules="required" v-slot="{errors}" name="Username" class="w-50">
        <TextField label="Username" v-model="username" :error="errors[0]"/>
      </ValidationProvider>
      <ValidationProvider rules="required" v-slot="{errors}" name="Password" class="w-50">
        <TextField label="Password" v-model="password" inputType="password" :error="errors[0]"/>
      </ValidationProvider>
      <!-- <v-btn color="success" elevation="2">Click</v-btn> -->
      <button @click="login" class="btn btn-success w-25 my-5">Submit</button>
      <span class="alert alert-danger" v-if="loginError">{{loginError}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "LoginUser",
  data(){
    return {
      username: "",
      password: "",
      loginError: ""
    }
  },
  computed: {
    ...mapGetters(['users'])
  },
  mounted(){
    let user = JSON.parse(localStorage.getItem('user'))
    if(user){
      this.$router.push('/blog')
    }
  },
  methods: {
    login(){
      this.loginError = ""
      let user = this.users.find(x => x.username == this.username && x.password == this.password);
      if(!user){
        this.loginError = "Invalid credentials";
        return
      }
      let userObj = {
        username: user.username,
        role: user.role
      }
      localStorage.setItem("user", JSON.stringify(userObj));
      this.$store.commit("loginUser",userObj);
      location.reload();
      this.$router.push('/blog')
    }
  }
}
</script>