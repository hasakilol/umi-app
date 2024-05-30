import { Form, InputNumber } from 'antd';
import { useCallback, useState } from 'react';

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
      formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value) => value?.replace(/,/g, '') as unknown as number}
    />
  );
};

const FormPlay15: React.FC = () => {
  const [form] = Form.useForm();
  const [initialValues] = useState<{ input: number } | undefined>({
    input: 2024,
  });
  const [changedValues, setChangedValues] = useState(undefined);

  const handleValuesChange = useCallback((changedValues: any) => {
    setChangedValues(changedValues);
  }, []);

  /**
   * works. behavior is the same with FormPlay9 (not thoroughly tested).
   */
  return (
    <>
      <Form
        initialValues={initialValues}
        form={form}
        name="form15"
        onValuesChange={handleValuesChange}
      >
        <Form.Item
          label={'15'}
          name="input"
          rules={[{ pattern: /^[0-9]$/, message: 'Illegal number' }]}
        >
          <CustomInput />
        </Form.Item>
      </Form>
      <div>{JSON.stringify(changedValues)}</div>
    </>
  );
};

export default FormPlay15;
