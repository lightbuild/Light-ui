<template>
  <h1>示例1</h1>
  <Tabs v-model:selected="x" >
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航22222">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
  import Tab from '../lib/Tab.vue';
  import Tabs from '../lib/Tabs.vue';
  import {ref} from 'vue';
  
  export default {
    setup() {
      const x = ref('导航1')
      return{x}
    },
    components: {Tabs, Tab}
  };
</script>

<style lang="scss" scoped>

</style>