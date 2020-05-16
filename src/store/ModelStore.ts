import { observable, action } from 'mobx';

class ModelStore {
  @observable
  active = false;

  @observable
  activeKey = 0;

  @action.bound
  setkey(key: number) {
    if (key) {
      this.activeKey = key;
      this.active = true;
    } else {
      this.active = false;
    }
  }
}

export default new ModelStore();
