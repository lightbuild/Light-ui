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
  <div>
    <h1>示例2</h1>
    <Button @click="showDialog">show</Button>
  </div>
</template>

<script lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';
  import {ref,h} from 'vue';
  import {openDialog} from "../lib/openDialog"
  
  export default {
    components: {Button, Dialog},
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
      const showDialog = () => {
        openDialog({
          title: h('strong', {}, '标题'),
          content: '你好',
          closeOnclickOverlay:false,
          ok() {
            console.log('ok')
            return false;
          },
          cancel() {
            console.log('cancel')
          }
        })
      }
      return {toggle, visible, f1, f2,showDialog};
    },
    
  };
</script>

<style lang="scss" scoped>

</style>