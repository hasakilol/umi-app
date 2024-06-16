import { Button, Modal } from 'antd';
import { useCallback, useState } from 'react';

export const RefCallbackPlay1: React.FC = () => {
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
      <div>1</div>
      <Button onClick={openModal}>Open</Button>
      {open && (
        <Modal
          open={open}
          onCancel={closeModal}
          onOk={closeModal}
          onClose={closeModal}
        >
          <div
            ref={handleRef}
            style={{
              width: '200px',
              height: '100px',
              backgroundColor: '#4285f4',
            }}
          ></div>
        </Modal>
      )}
      <div>Client width: {clientWidth}</div>
    </>
  );
};
