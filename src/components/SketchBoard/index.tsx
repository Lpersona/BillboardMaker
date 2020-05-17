import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { CONTAINER } from '../../config';
import './index.scss';
import useStores from '../../store';

const SketchBoard: React.FC = () => {
  const { canvasItemStore } = useStores();
  const { createCanvasItem } = canvasItemStore;

  useEffect(() => {
    createCanvasItem('defult');
  }, []);

  return <section className="sketch-board" id={CONTAINER}></section>;
};

export default observer(SketchBoard);
