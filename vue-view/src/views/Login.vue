<template>
    <div class="login">
        <h4>Login</h4>
        <div class="form">
            <input type="text" placeholder="username" name="username" v-model="username">
            <input type="password" placeholder="password" name="password" v-model="password">
            <input type="button" value="login" @click="login">
        </div>
    </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log(this.username)
    //   this.axios.post('/login', {
    //     'user': this.user,
    //     'pass': this.pass
    //   }).then((data) => {
    //     if (data.data.code === 200) {
    //       this.$router.push({
    //         name: 'publish'
    //       })
    //     } else {
    //       this.$toasted.show(data.data.message)
    //     }
    //   })
    }
  }
}
</script>

