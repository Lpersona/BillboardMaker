import { observable, action } from 'mobx';

class ItemStore {
  @observable
  itemList: Array<any> = [];

  @action
  setItem(item: any) {
    if (item) this.itemList.push(item);
  }
}

export default new ItemStore();
