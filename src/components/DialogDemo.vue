<template>
  <div>Dialog</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog :visible="visible"></Dialog>
</template>

<script lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';
  import {ref} from 'vue';
  
  export default {
    setup(){
      const visible =ref(false);
      const toggle = ()=>{
        visible.value = !visible.value;
      }
      return{toggle,visible}
    },
    components: {Button, Dialog}
  };
</script>

<style lang="scss" scoped>

</style>