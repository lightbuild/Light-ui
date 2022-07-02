<template>
  <div>
    <div v-for="(title,index) in titles" :key="index">{{ title }}</div>
    <component v-for="c in defaults" :is="c"/>
  </div>
</template>

<script lang="ts">
  import Tab from './Tab.vue';
  
  export default {
    setup(props, context) {
      const defaults = context.slots.default();
      defaults.forEach((tab) => {
        if (tab.type !== Tab) {
          throw new Error('Tabs 的子标签必须是 Tab');
        }
      });
      const titles = defaults.map(tab => tab.props.title);
      return {defaults, titles};
    }
  };
</script>

<style lang="scss" scoped>

</style>