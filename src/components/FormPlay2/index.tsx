import { Form, Input } from 'antd';
import { useEffect, useState } from 'react';

/**
 * Why is component defaultValue not working when inside Form.Item?
 * Components inside Form.Item with name property will turn into controlled mode, which makes defaultValue not work anymore. Please try initialValues of Form to set default value.
 *
 * 怎么好像说得不对啊？？？？
 */

const FormPlay2: React.FC = () => {
  const [initialValues, setInitialValues] = useState<
    { input: number } | undefined
  >(undefined);

  useEffect(() => {
    setInitialValues({ input: 15 });
  }, []);
  return (
    <Form initialValues={initialValues}>
      <Form.Item name="input">
        <Input defaultValue="hello" />
      </Form.Item>
    </Form>
  );
};

export default FormPlay2;
