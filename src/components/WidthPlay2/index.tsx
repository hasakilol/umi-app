import { useCallback, useState } from 'react';

export const WidthPlay2: React.FC = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleRef = useCallback((ele: HTMLDivElement) => {
    if (ele) {
      setScrollWidth(ele.scrollWidth);
    }
  }, []);

  return (
    <>
      <div>2</div>
      <div style={{ width: '200px', height: '100px', overflow: 'auto' }}>
        <div
          ref={handleRef}
          style={{
            width: '300px',
            height: '50px',
            padding: '10px',
            margin: '20px',
            border: '30px',
            backgroundColor: 'green',
          }}
        ></div>
      </div>

      <div>Scroll width: {scrollWidth}</div>
    </>
  );
};
