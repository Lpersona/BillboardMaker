import React from 'react';
import CanvasItemStore from './CanvasItemStore';
import ModelStore from './ModelStore';

const context = React.createContext({
  canvasItemStore: CanvasItemStore,
  modelStore: ModelStore,
});

const useStores = () => React.useContext(context);

export default useStores;
