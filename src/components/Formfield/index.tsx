import { Form, Input, Select } from 'ant-design-vue';
import { IFormFieldProps, KeyParams, OptionsKey } from './types';

const { Option } = Select;

const SelectInput = (props: IFormFieldProps) => {
  const {
    name,
    inputConfig,
    formConfig,
    options,
  } = props;
  return (
    <Form.Item
      name={name}
      {...formConfig}
    >
      <Select
        {...inputConfig}
        virtual={options && options.length > 8}
      >
        {
          options?.map((option: OptionsKey) => <Option {...option} key={option.key}>{option.key}</Option>)
        }
      </Select>
    </Form.Item>
  );
};

const InputComponent = (props: IFormFieldProps) => {
  const {
    name,
    formConfig,
    inputConfig,
  } = props;
  return (
    <Form.Item
      label={name}
      {...formConfig}
    >
      <Input { ...inputConfig } />
    </Form.Item>
  );
};

export default (formFieldProps: IFormFieldProps) => {
  const { props } = formFieldProps;
  const { type } = props;
  const typeComponent: KeyParams = {
    SelectInput: <SelectInput {...props} />,
    Input: <InputComponent {...props}/>,
  };
  return type && typeComponent[type];
};
