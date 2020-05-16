import { Modal } from 'antd';
import { observer } from 'mobx-react';
import React from 'react';
import { MODEL_TYPE } from '../../config';
import useStores from '../../store';
import CanvasModal from './CanvasModal';
import './index.scss';

const ModePanel: React.FC = (props) => {
  const { modelStore } = useStores();
  const { active, activeKey } = modelStore;

  const context = (key: number) => {
    switch (key) {
      case MODEL_TYPE.CANVAS:
        return <CanvasModal />;
    }
  };

  return (
    <>
      <Modal visible={active} centered={true} closable={false} footer={null}>
        {context(activeKey)}
      </Modal>
    </>
  );
};

export default observer(ModePanel);
