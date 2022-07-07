<template>
  <article class="markdown-body" v-html="intro">
  </article>
</template>

<script lang="ts">
  import intro from '../markdown/intro.md'
  
  export default {
    data(){
      return {intro}
    }
  }
</script>

<style lang="scss" scoped>

</style>