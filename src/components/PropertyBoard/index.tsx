import React from 'react';
import ItemList from './ItemList';
import './index.scss';
import CanvasPropertyList from './CanvasPropertyList';

const PropertyBoard: React.FC = () => {
  return (
    <section className={'property-board'}>
      <ItemList />
      <CanvasPropertyList />
    </section>
  );
};

export default PropertyBoard;
