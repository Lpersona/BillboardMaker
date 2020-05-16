import { observer } from 'mobx-react';
import React from 'react';
import { CONTAINER } from '../../config';
import './index.css';

const SketchBoard: React.FC = () => {
  return <section className="sketch-board" id={CONTAINER}></section>;
};

export default observer(SketchBoard);
