<template>
  <div class="container">
    <h1 class="mt-4">Register</h1>
    <div class="row  mt-5">
      <ValidationProvider rules="required" v-slot="{errors}" class="col-6" name="Fullname">
        <TextField label="Fullname" :error="errors[0]" v-model="registerObject.fullname"/>
      </ValidationProvider>
      <ValidationProvider rules="email|required" v-slot="{errors}" class="col-6"  name="Email" >
        <TextField label="Email" inputType="email" :error="errors[0]" v-model="registerObject.email"/>
      </ValidationProvider>
      <ValidationProvider rules="required" v-slot="{errors}" class="col-6" name="Username">
        <TextField label="Username" :error="errors[0]" v-model="registerObject.username"/>
      </ValidationProvider>
      <ValidationProvider class="col-6" rules="required" v-slot="{errors}" name="Password" >
        <TextField label="Password" :error="errors[0]" inputType="password" v-model="registerObject.password"/>
      </ValidationProvider>
      <!-- <v-btn color="success" elevation="2">Click</v-btn> -->
      <button class="btn btn-success w-25 my-5" @click="registerUser">Submit</button>
      <span class="alert alert-danger" v-if="registerError">{{registerError}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "RegisterUser",
  data(){
    return {
      registerObject: {
        fullname: "",
        email: "",
        username: "",
        password: ""
      },
      registerError: ""
    }
  },
  computed: {
    ...mapGetters([''])
  },
  mounted(){
    let user = JSON.parse(localStorage.getItem('user'))
    if(user){
      this.$router.push('/blog')
    }
  },
  methods: {
    registerUser: function(){
      this.registerError = "";
      let obj = this.registerObject;
      if(!obj.fullname || !obj.email || !obj.username || !obj.password){
        this.registerError = "Invalid data";
        return;
      }
      this.$store.commit("registerUser",this.registerObject);
      location.reload();
      this.$router.push('/blog')
    }
  }
}
</script>