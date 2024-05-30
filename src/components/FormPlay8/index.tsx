import { Form, InputNumber } from 'antd';
import { useState } from 'react';

/**
 * Why is component defaultValue not working when inside Form.Item?
 * Components inside Form.Item with name property will turn into controlled mode, which makes defaultValue not work anymore. Please try initialValues of Form to set default value.
 *
 * 怎么好像说得不对啊？？？？
 *
 * initialValues 优先级高于 defaultValue
 */

interface CustomInputProps {
  value?: number;
  onChange?: (value: any) => void;
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { value, onChange } = props;

  // const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  //   onChange?.(e.target.value);
  // }, []);

  /**
   * defaultValue takes higher priority than initialValues
   */
  return (
    <InputNumber<number>
      value={value}
      onChange={onChange}
      formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number}
    />
  );
};

const FormPlay8: React.FC = () => {
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState<
    { input: number } | undefined
  >({ input: 2024 });

  return (
    <Form initialValues={initialValues} form={form}>
      <Form.Item
        label={'8'}
        name="input"
        rules={[{ pattern: /^\d+$/, message: 'Illegal number' }]}
      >
        <CustomInput />
      </Form.Item>
    </Form>
  );
};

export default FormPlay8;
