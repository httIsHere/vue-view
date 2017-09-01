<template>
  <div class="world">
      <my-header></my-header>
      ...
      <p>{{msg}}</p>
      <a href="/#/hello">hello</a>
  </div>
</template>

<script>
import MyHeader from './MyHeader'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'htt is here'
    }
  },
  components: {
    MyHeader
  }
}
</script>