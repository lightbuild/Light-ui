<template>
  <div>Dialog</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible" :close-onclick-overlay="false" :ok="f1" :cancel="f2" title="hahh">
    <template v-slot:title><h1>标题1</h1></template>
    <template v-slot:content>
      <p>内容1</p>
      <p>内容2</p>
    </template>
    <p>哈哈哈222</p>
  </Dialog>
</template>

<script lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';
  import {ref} from 'vue';
  
  export default {
    setup() {
      const visible = ref(false);
      const toggle = () => {
        visible.value = !visible.value;
      };
      const f1 = () => {
        console.log(1);
        return false;
      };
      const f2 = () => {
        console.log(2);
      };
      return {toggle, visible, f1, f2};
    },
    components: {Button, Dialog}
  };
</script>

<style lang="scss" scoped>

</style>