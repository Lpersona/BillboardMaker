import React from 'react';
import CanvasItemStore from './CanvasItemStore';
import ItemStore from './ItemStore';
import ModelStore from './ModelStore';

const context = React.createContext({
  canvasItemStore: CanvasItemStore,
  itemStore: ItemStore,
  modelStore: ModelStore,
});

const useStores = () => React.useContext(context);

export default useStores;
