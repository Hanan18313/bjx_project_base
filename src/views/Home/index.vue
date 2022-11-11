<template>
  <div>
    <span>{{ span }}</span>
    <a-form><Formfield type="Input" name="form"></Formfield></a-form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Formfield from '@/components/Formfield';

export default defineComponent(() => ({
  components: {
    Formfield,
  },
  setup() {
    return {
      span: 'Home',
    };
  },
}));
</script>
<!-- // import Formfield from '@/components/Formfield';
// import { Form } from 'ant-design-vue';
// import { defineComponent } from 'vue';

// export default defineComponent({
//   setup(props, ctx) {
//     console.log(props);
//   },
//   render() {
//     return () => (
//       <Form>
//         <Formfield name='ssss' type='Input'></Formfield>
//       </Form>
//     );
//   },
// }); -->
