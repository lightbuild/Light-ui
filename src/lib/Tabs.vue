<template>
  <div class="light-tabs">
    <div class="light-tabs-nav" ref="container">
      <div class="light-tabs-nav-item" :class="{selected:title === selected}" @click="select(title)"
           v-for="(title,index) in titles"
           :ref="el => { if (title === selected) selectedItem = el }"
           :key="index">{{ title }}
      </div>
      <div class="light-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="light-tabs-content">
      <component class="light-tabs-content-item" :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Tab from './Tab.vue';
  import {computed, ref, onMounted,watchEffect} from 'vue';
  
  export default {
    props: {
      selected: {
        type: String,
      }
    },
    setup(props, context) {
      const selectedItem = ref<HTMLDivElement>(null);
      const indicator = ref<HTMLDivElement>(null);
      const container = ref<HTMLDivElement>(null);
      const defaults = context.slots.default();
      onMounted(()=>{
        watchEffect(() => {
          const {width} = selectedItem.value.getBoundingClientRect();
          indicator.value.style.width = width + 'px';
          const {left: left1} = container.value.getBoundingClientRect();
          const {left: left2} = selectedItem.value.getBoundingClientRect();
          const left = left2 - left1;
          indicator.value.style.left = left + 'px';
        })
      });
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
      return {defaults, titles, current, select, selectedItem, indicator, container};
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
      position: relative;
      
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
      
      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        width: 100px;
        transition: all 250ms;
      }
    }
    
    &-content {
      padding: 8px 0;
    }
  }
</style>