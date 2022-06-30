<template>
  <div>
    <button class="light-button" :class="`theme-${theme}`">
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
  export default {
    props:{
      theme:{
        type: String,
        default:'button',
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>