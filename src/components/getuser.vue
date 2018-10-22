<template>
  <p> getUser callback page </p>
</template>

<script>

import Axios from 'axios'
import route from '@/router'

// import Qs from 'qs'

export default {
  name: 'GetUser',
  data () {
    return {}
  },

  beforeCreate () {
    var code = this.$route.query.code
    var params = { code: code }
    console.log(params)
    Axios.get('http://translator.test/api/getUser', { params: params })
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data)
          localStorage.removeItem('user')
          localStorage.setItem('user', JSON.stringify(response.data))
          route.push('/')
        }
      })
  }
}
</script>

<style>
</style>
