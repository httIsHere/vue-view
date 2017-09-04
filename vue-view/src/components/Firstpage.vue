<template>
  <div class="Firstpage">
      <my-header></my-header>
      <my-main></my-main>
  </div>
</template>

<script>
import MyHeader from './MyHeader'
import MyMain from './MyMain'
export default {
  name: 'firstpage',
  data () {
    return {
      msg: 'htt is here'
    }
  },
  components: {
    MyHeader,
    MyMain
  }
}
</script>