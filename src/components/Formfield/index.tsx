import { Form, Input, Select } from 'ant-design-vue';
import {
  defineComponent,
  PropType,
  defineProps,
} from 'vue';
import { IFormFieldProps, KeyParams } from './types';

const { Option } = Select;

const SelectInput = () => defineComponent({
  props: {
    formField: {
      type: Object as PropType<IFormFieldProps>,
    },
  },
  setup(props, ctx: any) {
    console.log(props);
    return () => (
      <Form.Item label={props.formField?.name}>
        <Select>
          <Option>111</Option>
          <Option>222</Option>
        </Select>
      </Form.Item>
    );
  },
});

const InputComponent = () => defineComponent({
  props: {
    formField: {
      type: Object as PropType<IFormFieldProps>,
    },
  },
  setup(props, ctx: any) {
    return {
      props,
    };
  },
  render() {
    return () => (
      <Form.Item label={this.props.formField?.name}>
        <Input />
      </Form.Item>
    );
  },
});

export default (props: IFormFieldProps) => {
  console.log(props);
  const { type } = props;
  const typeComponent: KeyParams = {
    SelectInput,
    Input: InputComponent,
  };
  // eslint-disable-next-line
  console.log(typeComponent['Input']);
  return type && typeComponent[type];
};
