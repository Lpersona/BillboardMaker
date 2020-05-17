import React from 'react';
import { observer } from 'mobx-react';
import useStores from '../../../store';
import { Input } from 'antd';

const CanvasPropertyList: React.FC = () => {
  const { canvasItemStore } = useStores();
  const { currentCanvasItem } = canvasItemStore;

  const handleChangeWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    currentCanvasItem?.prop?.setWidth(parseInt(value));
  };

  return (
    <>
      {currentCanvasItem && (
        <section>
          <Input
            value={currentCanvasItem.prop?.width}
            onChange={handleChangeWidth}
          />
        </section>
      )}
    </>
  );
};

export default observer(CanvasPropertyList);
