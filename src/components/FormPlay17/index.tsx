import { Button, Form, Select } from 'antd';
import { useCallback, useMemo } from 'react';

interface CustomInputProps {
  value?: number;
  onChange?: (value: any) => void;
}

const FormPlay17: React.FC = () => {
  const [form] = Form.useForm();

  const handleFinish = useCallback((values: any) => {
    console.log('FormPlay 17', values);
  }, []);

  const options = useMemo(() => {
    return [
      { value: '1', label: 'John' },
      { value: '2', label: 'Adam' },
    ];
  }, []);

  return (
    <>
      <Form form={form} name="form17" onFinish={handleFinish}>
        <Form.Item label={'17'} name="select" key="select">
          <Select options={options} allowClear showSearch></Select>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormPlay17;
