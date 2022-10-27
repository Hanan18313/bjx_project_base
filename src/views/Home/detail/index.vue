<template>
  <div>
    <span>{{ span }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      span: 'detail',
    };
  },
});
</script>