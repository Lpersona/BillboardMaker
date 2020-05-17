import { CONTAINER } from '../../config';
import TextItem from '../TextItem';
import ImgItem from '../ImgItem';
import CanvasProps from './CanvasProp';

export interface ICanvasItem {
  name: string;
  context: CanvasRenderingContext2D | null;
  textItem: TextItem | undefined;
  imgItem: ImgItem | undefined;
  prop: CanvasProps | undefined;
}

class CanvasItem implements ICanvasItem {
  private _id: string;

  public name: string = '';
  public context: CanvasRenderingContext2D | null = null;
  public textItem: TextItem | undefined = void 0;
  public imgItem: ImgItem | undefined = void 0;
  public prop: CanvasProps | undefined;

  constructor(id: string) {
    this._init(id);
    this._id = id;
    this.name = `画板${id}`;
  }

  private _init(id: string) {
    const container = document.getElementById(CONTAINER);
    if (document.getElementById(id)) {
      throw new Error('元素已经存在');
    }

    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', id);

    if (container && canvas) {
      container.appendChild(canvas);

      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';

      this.context = canvas.getContext('2d');
      if (this.context) {
        this.prop = new CanvasProps(canvas, this.context);
      }
    }
  }
}

export default CanvasItem;
