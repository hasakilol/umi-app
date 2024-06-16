import { useCallback, useState } from 'react';

export const RefCallbackPlay2: React.FC = () => {
  const [clientWidth, setClientWidth] = useState(-1);
  const handleRef = useCallback((ele: HTMLDivElement) => {
    console.log(ele);
    if (ele) {
      setClientWidth(ele.clientWidth);
    }
  }, []);

  return (
    <>
      <div>2</div>
      <div
        ref={handleRef}
        style={{ width: '200px', height: '100px', backgroundColor: '#4285f4' }}
      ></div>
      <div>Client width: {clientWidth}</div>
    </>
  );
};
