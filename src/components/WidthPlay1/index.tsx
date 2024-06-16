import { useCallback, useState } from 'react';

export const WidthPlay1: React.FC = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleRef = useCallback((ele: HTMLDivElement) => {
    if (ele) {
      setScrollWidth(ele.scrollWidth);
    }
  }, []);

  return (
    <>
      <div>1</div>
      <div
        style={{
          width: '200px',
          height: '100px',
          backgroundColor: 'green',
          padding: '20px',
        }}
        ref={handleRef}
      ></div>

      <div>Scroll width: {scrollWidth}</div>
    </>
  );
};
