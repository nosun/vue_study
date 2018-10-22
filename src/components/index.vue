<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

import Axios from 'axios'

export default {
  name: 'IndexPage',
  data () {
    return {
      msg: 'Hello world'
    }
  },
  created () {
    Axios.post('http://testapi.novelspread.com/api/search/novel', { keywords: 'as', number: '2', fingerprint: '1232131233' }).then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
