<template>
  <div>
    <el-form>
      <Formfield v-for="formItem in formFields" :props="{...formItem}" :key="formItem.name"></Formfield>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Formfield from '@/components/Formfield';

export default defineComponent({
  components: {
    Formfield,
  },
  setup() {
    return {
      formFields: [
        {
          name: 'name',
          type: 'Input',
          inputConfig: {},
          formConfig: {
            label: '姓名',
          },
        },
        {
          name: 'sex',
          type: 'SelectInput',
          inputConfig: {},
          formConfig: {
            label: '性别',
          },
          options: [{ key: '女', value: 0 }, { key: '男', value: 1 }],
        },
      ],
    };
  },
});
</script>