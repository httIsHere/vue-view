<template>
    <div class="login">
        <h4>Login</h4>
        <div class="form">
            <input type="text" placeholder="username" name="username" v-model="username">
            <input type="password" placeholder="password" name="password" v-model="password">
            <input type="button" value="login" @click="login">
            <label>{{result}}</label>
        </div>
    </div>
</template>
<script>
import {login} from "../api/login";
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      result: ''
    }
  },
  methods: {
    login () {
	  login('/login', this.username, this.password, this.initLogin);
    },
    initLogin(data){
        if (data.data.code === 200) {
          this.$router.push({
            name: 'Hello'
          })
        } else {
          console.log(data)
          this.result = data.data.message
        }
    }
  }
}
</script>

