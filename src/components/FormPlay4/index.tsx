import { Form, Select } from 'antd';
import { useEffect, useState } from 'react';

/**
 * Why is component defaultValue not working when inside Form.Item?
 * Components inside Form.Item with name property will turn into controlled mode, which makes defaultValue not work anymore. Please try initialValues of Form to set default value.
 *
 * 怎么好像说得不对啊？？？？
 *
 * initialValues 优先级高于 defaultValue
 */

const FormPlay4: React.FC = () => {
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState<
    { input: string } | undefined
  >({ input: 'world' });

  useEffect(() => {
    setInitialValues({ input: 'test' });
  }, []);

  return (
    <Form initialValues={initialValues} form={form}>
      <Form.Item name="input">
        <Select
          options={[
            { value: 'hello', label: 'hello' },
            { value: 'world', label: 'world' },
            { value: 'test', label: 'test' },
          ]}
          defaultValue="hello"
        />
      </Form.Item>
    </Form>
  );
};

export default FormPlay4;
