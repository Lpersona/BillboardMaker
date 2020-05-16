import { CONTAINER } from '../../config';

export interface ICanvasItem {}

class CanvasItem implements ICanvasItem {
  private _id: string;
  public context: CanvasRenderingContext2D | null = null;

  constructor(id: string) {
    this._init(id);
    this._id = id;
  }

  private _init(id: string) {
    const container = document.getElementById(CONTAINER);
    if (document.getElementById(id)) {
      throw new Error('元素已经存在');
    }

    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', id);
    canvas.width = 320;
    canvas.height = 320;

    if (container && canvas) {
      container.appendChild(canvas);
      console.log(canvas);
      this.context = canvas.getContext('2d');
    }
  }
}

export default CanvasItem;
