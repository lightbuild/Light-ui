<template>
  <div>导航栏| <router-link to="/">Light</router-link> |<router-link to="/xxx">Light2</router-link></div>
  <hr/>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
