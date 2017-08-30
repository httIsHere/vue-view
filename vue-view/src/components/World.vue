<<template>
  <div class="world">
      ...
      <p>{{msg}}</p>
      <a href="/#/hello">hello</a>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'htt is here'
    }
  }
}
</script>