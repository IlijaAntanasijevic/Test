import users from "../data/users.json"

export default {
  state : {
    user: { username: "", role: "" },
    users: users,
    registerUser: {
      fullname: "",
      email: "",
      username: "",
      password: "",
      role: ""
    }
  },
  mutations: {
    loginUser(state,user){
      if(!user){
        state.user.username = ""
        state.user.role = ""
        localStorage.removeItem("user")
        return
      }
      state.user.username = user.username
      state.user.role = user.role 
    },
    registerUser(state,userObj){
      if(userObj){
        state.registerUser.fullname = userObj.fullname
        state.registerUser.email = userObj.email
        state.registerUser.username = userObj.username
        state.registerUser.password = userObj.password
        state.registerUser.role = 'user'
        let lsObject = {
          username: userObj.username,
          role : 'user'
        }
        localStorage.setItem("user", JSON.stringify(lsObject));
        return true
      }
    }
  },
  getters: {
    username(state){
      return state.user.username
    },
    users(state){
      return state.users
    }
  }
}