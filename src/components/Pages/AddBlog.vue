<template>
  <div>
    <div  class="text-center my-4">
      <h1>Add your post </h1>
      <h3>Auhtor: <span id="user">{{currentUser.fullname}}</span></h3>
    </div>
    <div class="col-8 mx-auto">
      <TextField v-model="postTitle" label="Title"/>
      <TextField v-model="postText" :multiline="true" rowCount="15"/>
      <div class="tags-widget">
        <ul>
          <li v-for="c,index in categories" :key="index" class="categories">
            <label :for="c.id" class="singleCat">{{c.category}}</label>
            <input v-model="checkedCat" :value="c.id" :id="c.id" name="cat" type='radio' />
          </li>
        </ul>
        <p v-if="checkedCat">Category: <span id="checkedCategoryTxt">{{checkedCategory}}</span></p>
      </div>
    <button class="btn btn-success" @click="addPost()">Submit</button>
      <p v-if="errorMsg" class="alert alert-danger">{{errorMsg}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "AddBlog",
  data(){
    return{
      currentUser: {},
      postText : "",
      checkedCat: 0,
      errorMsg: "",
      postTitle: ""
    }
  },
  mounted(){
    let user = JSON.parse(localStorage.getItem('user'))
    if(!user){
      this.$router.push('/blog')
    }
    this.currentUser = this.users.find(x => x.username == user.username);
   // console.log(this.currentUser);
  },
  computed: {
    ...mapGetters(['users','categories']),
    checkedCategory: function(){
      let tmp = this.categories.find(x => x.id == this.checkedCat);
      return tmp ? tmp.category : '';
      
    }
  },
  methods: {
    addPost(){
      this.errorMsg = "";
      console.log(this.postText.length);
      console.log(this.checkedCat)
      if(!this.checkedCat || !this.postText.length || !this.postTitle.length){
        this.errorMsg = "Invalid data";
        return
      }
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1; 
      const day = date.getDate(); 

      let formattedMonth = month < 10 ? `0${month}` : month;
      let formattedDay = day < 10 ? `0${day}` : day;
      let userDate =`${year}-${formattedMonth}-${formattedDay}`;
      let postObj = {
        text: this.postText,
        author: this.currentUser.fullname,
        date: userDate,
        categoryID: this.checkedCat,
        category: this.checkedCategory,
        tags: [],
        views: 0,
        title: this.postTitle
      }
      this.$store.commit("addBlog",postObj)
      this.$router.push("/blog")
    },
    
  }
}
</script>

<style scoped>
#user {
  color: #ee4266;
  font-weight: 700;
}
.categories{
  display: inline-block;
	margin-right: 4px;
	margin-bottom: 6px;
}
.singleCat {
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

.singleCat:hover{
	color: #fff !important;
    background-color: #ee4266;
}


input[type="radio"] {
  /*display: none;*/
  opacity: 0;
}

/* Style the custom radio */

/* Style the custom radio when selected */
input[type="radio"]:checked + .custom-radio::before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

input[type="radio"]:checked {
    background-color: #ee4266;

}

#checkedCategoryTxt {
  color: #ee4266;
  font-weight: 700;
  text-transform: uppercase;
}
</style>