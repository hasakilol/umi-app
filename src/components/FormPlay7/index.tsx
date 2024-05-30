import { Form, Input } from 'antd';
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
  value?: string;
  onChange?: (value: any) => void;
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { value, onChange } = props;

  // const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  //   onChange?.(e.target.value);
  // }, []);

  return <Input value={value} onChange={onChange} />;
};

const FormPlay7: React.FC = () => {
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState<
    { input: string } | undefined
  >({ input: 'world' });

  return (
    <Form initialValues={initialValues} form={form}>
      <Form.Item name="input">
        <CustomInput />
      </Form.Item>
    </Form>
  );
};

export default FormPlay7;
