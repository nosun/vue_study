<template>
  <ul>
    <li>
      <router-link to="/">Index</router-link>
    </li>
    <li>
      <a href="http://novelbr.test/oauth/authorize?client_id=2&response_type=code&scope=">Login</a>
    </li>
    <li>
      <router-link to="/novels">Novels</router-link>
    </li>
    <li>
      <router-link to="/getuser">GetUser</router-link>
    </li>
    <li>
      <router-link to="/bar">Go to Bar</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'navlist',
  data () {
    return {}
  }
}
</script>
