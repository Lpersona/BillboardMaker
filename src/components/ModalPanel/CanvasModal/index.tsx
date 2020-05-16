import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { observer } from 'mobx-react';
import useStores from '../../../store';
import { MODEL_TYPE } from '../../../config';

const CanvasModal: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const { canvasItemStore, modelStore } = useStores();
  const { createCanvasItem } = canvasItemStore;
  const { setkey } = modelStore;

  const handleOk = () => {
    if (value) createCanvasItem(value);
    setkey(MODEL_TYPE.CLOSE);
  };

  const handleCancel = () => {
    setkey(MODEL_TYPE.CLOSE);
  };

  return (
    <>
      <Input
        placeholder={'请输入画板名称'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="default" onClick={handleCancel}>
        取消
      </Button>
      <Button type="primary" onClick={handleOk}>
        确定
      </Button>
    </>
  );
};

export default observer(CanvasModal);
