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

/**
 * InputNumber has many bugs.
 * https://github.com/ant-design/ant-design/issues/33549
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

const FormPlay12: React.FC = () => {
  const [form] = Form.useForm();
  const [initialValues] = useState<{ input: number } | undefined>({
    input: 2024,
  });

  /**
   * works but behavior is still strange.
   */
  return (
    <Form initialValues={initialValues} form={form} name="form12">
      <Form.Item
        label={'12'}
        name="input"
        rules={[
          { type: 'string', pattern: /^[0-9]$/, message: 'Illegal number' },
        ]}
      >
        <InputNumber />
      </Form.Item>
    </Form>
  );
};

export default FormPlay12;
