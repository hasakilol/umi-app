import { Button, Checkbox } from 'antd';
import { useCallback, useState } from 'react';

export const RefCallbackPlay4: React.FC = () => {
  const [count, setCount] = useState(0);
  const [changes, setChanges] = useState(0);
  const handleRef = useCallback((ele: HTMLDivElement) => {
    setChanges((prev) => prev + 1);
  }, []);

  return (
    <>
      <div>4</div>
      <Button onClick={() => setCount((prev) => prev + 1)}>Increment</Button>
      <div>Count: {count}</div>
      <div>ref changes: {changes}</div>
      <div ref={handleRef}>{count % 2 === 0 && <Checkbox>check</Checkbox>}</div>
    </>
  );
};
