<template>
  <div>导航栏|
    <router-link to="/">菜单1</router-link>
    |
    <router-link to="/doc">菜单2</router-link>
  </div>
  <hr/>
  <router-view/>
</template>

<script>
  
  export default {
    name: 'App',
    components: {}
  }
</script>
