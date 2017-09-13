<template>
  <div class="Firstpage">
  	<!--<router-link :to="/login">Login</router-link>-->
      <!--<my-header></my-header>-->
     <my-main></my-main>
     <corner></corner>
  </div>
</template>

<script>
import MyHeader from './MyHeader'
import MyMain from './MyMain'
import Corner from './Corner'
export default {
  name: 'firstpage',
  data () {
    return {
      msg: 'htt is here',
      count: this.$store.state.count,
      todos: this.$store.getters.doneTodos
    }
  },
  components: {
    MyHeader,
    MyMain,
    Corner
  },
  methods:{
  	cnt () {
			this.$store.commit('updateDate', this.count)
			console.log(this.$store.state.count)
  	}
  }
}
</script>