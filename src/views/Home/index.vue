<template>
  <span>home</span>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('错误'));
      });
    });
  },
});
</script>