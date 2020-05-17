import { observer } from 'mobx-react';
import React from 'react';
import useStores from '../../../store';
import './index.scss';

const ItemList: React.FC = () => {
  const { canvasItemStore } = useStores();
  const { canvasItemList, setCurrentItem } = canvasItemStore;

  return (
    <section className={'item-list'}>
      {canvasItemList &&
        canvasItemList.map((item) => {
          return (
            <div
              className={`item`}
              key={item.name}
              onClick={(e) => {
                setCurrentItem(item);
              }}
            >
              {item.name}
            </div>
          );
        })}
    </section>
  );
};

export default observer(ItemList);
