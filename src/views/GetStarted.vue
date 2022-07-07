<template>
  <article class="markdown-body" v-html="getStarted">
  </article>
</template>

<script lang="ts">
  import getStarted from '../markdown/get-started.md';
  
  export default {
    data(){
      return {getStarted}
    }
  }
</script>

<style lang="scss" scoped>

</style>