import Portal from '@rc-component/portal';
import { Button } from 'antd';
import Dialog from 'rc-dialog';
import { useCallback, useState } from 'react';

export const RefCallbackPlay3: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [clientWidth, setClientWidth] = useState(-1);
  const handleRef = useCallback((ele: HTMLDivElement) => {
    console.log(ele);
    if (ele) {
      setClientWidth(ele.clientWidth);
    }
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <>
      <div>3</div>
      <Button onClick={openModal}>Open</Button>
      <Portal
        open={open}
        autoDestroy={false}
        getContainer={() => window.document.body}
        autoLock={open}
      ></Portal>
      <Dialog>
        <div
          ref={handleRef}
          style={{
            width: '200px',
            height: '100px',
            backgroundColor: '#4285f4',
          }}
        ></div>
      </Dialog>
      <div>Client width: {clientWidth}</div>
    </>
  );
};
