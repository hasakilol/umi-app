import { useCallback, useState } from 'react';

export const WidthPlay3: React.FC = () => {
  const [offsetTop, setOffsetTop] = useState(0);

  const handleRef = useCallback((ele: HTMLDivElement) => {
    if (ele) {
      setOffsetTop(ele.offsetTop);
    }
  }, []);

  return (
    <>
      <div>3</div>
      <div
        style={{
          width: '200px',
          height: '100px',
          padding: '11px',
          position: 'relative',
        }}
      >
        <div
          ref={handleRef}
          style={{
            width: '50px',
            height: '50px',
            padding: '10px',
            margin: '21px',
            border: '5px',
            backgroundColor: 'green',
          }}
        ></div>
      </div>

      <div>offsetTop: {offsetTop}</div>
    </>
  );
};
