import React from 'react';
import './index.css';
import { Button } from 'antd';
import { observer } from 'mobx-react';
import useStores from '../../store';
import { MODEL_TYPE } from '../../config';

const Tool: React.FC = () => {
  const { modelStore } = useStores();
  const { setkey } = modelStore;

  // const handleCreateCanvas = () => {
  //   setkey(MODEL_TYPE.CANVAS);
  // };

  return (
    <section className="tool">
      {/* <Button onClick={handleCreateCanvas}>新建画板</Button> */}
      <Button>文字</Button>
      <Button>图片</Button>
    </section>
  );
};

export default observer(Tool);
