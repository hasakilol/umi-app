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
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  return <Input />;
};

const FormPlay5: React.FC = () => {
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

export default FormPlay5;
