<template>
  <div>
    <h1>Switch 组件示例</h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <component :is="Switch1Demo"/>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre class="language-html" v-html="Prism.highlight(Switch1Demo.__sourceCode,Prism.languages.html,'html')"></pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持disabled</h2>
      <div class="demo-component">
        <component :is="Switch2Demo"/>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre class="language-html" v-html="Prism.highlight(Switch2Demo.__sourceCode,Prism.languages.html,'html')"></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Switch from '../lib/Switch.vue';
  import {ref} from 'vue';
  import Button from '../lib/Button.vue';
  import Switch1Demo from './Switch1.Demo.vue';
  import Switch2Demo from './Switch2.Demo.vue';
  import 'prismjs';
  import 'prismjs/themes/prism.css'
  const Prism = window.Prism;
  export default {
    components: {Button, Switch},
    setup() {
      const bool = ref(false);
      return {bool, Switch1Demo, Switch2Demo,Prism};
    }
  };
</script>

<style lang="scss" scoped>
  $border-color: #d9d9d9;
  .demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;
    
    > h2 {
      font-size: 20px;
      padding: 8px 16px;
      border-bottom: 1px solid $border-color;
    }
    
    &-component {
      padding: 16px;
    }
    
    &-actions {
      padding: 8px 16px;
      border-top: 1px dashed $border-color;
    }
    
    &-code {
      padding: 8px 16px;
      border-top: 1px dashed $border-color;
      
      > pre {
        line-height: 1.1;
        font-family: Consolas, 'Courier New', Courier, monospace;
        margin: 0;
      }
    }
  }
</style>