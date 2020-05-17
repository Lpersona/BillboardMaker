import { observable, action } from 'mobx';
import CanvasItem, { ICanvasItem } from '../service/CanvasItem';

class CanvasItemStore {
  @observable
  canvasItemList: ICanvasItem[] = [];

  @observable
  currentCanvasItem: ICanvasItem | undefined;

  @action.bound
  addItem(item: ICanvasItem) {
    if (item) this.canvasItemList.push(item);
  }

  @action.bound
  setCurrentItem(item: ICanvasItem) {
    if (this.currentCanvasItem?.name !== item.name) {
      this.currentCanvasItem = item;
    }
  }

  @action.bound
  createCanvasItem(id: string) {
    if (id) {
      try {
        const canvasItem = new CanvasItem(id);
        this.canvasItemList.push(canvasItem);
      } catch {
        console.error('创建失败啦 id重复啦');
      }
    }
  }
}

export default new CanvasItemStore();
