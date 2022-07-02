<template>
  <div class="light-tabs">
    <div class="light-tabs-nav">
      <div class="light-tabs-nav-item" :class="{selected:title === selected}" @click="select(title)"
           v-for="(title,index) in titles"
           :key="index">{{ title }}
      </div>
    </div>
    <div class="light-tabs-content">
      <component class="light-tabs-content-item" :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Tab from './Tab.vue';
  import {computed} from 'vue';
  
  export default {
    props: {
      selected: {
        type: String,
      }
    },
    setup(props, context) {
      const defaults = context.slots.default();
      defaults.forEach((tab) => {
        if (tab.type !== Tab) {
          throw new Error('Tabs 的子标签必须是 Tab');
        }
      });
      const select = (title: string) => {
        context.emit('update:selected', title);
      };
      const current = computed(() => {
        return defaults.find((tab) => tab.props.title === props.selected);
      });
      const titles = defaults.map(tab => tab.props.title);
      return {defaults, titles, current, select};
    }
  };
</script>

<style lang="scss" scoped>
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;
  .light-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;
      
      &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;
        
        &:first-child {
          margin-left: 0;
        }
        
        &.selected {
          color: $blue;
        }
      }
    }
    
    &-content {
      padding: 8px 0;
    }
  }
</style>