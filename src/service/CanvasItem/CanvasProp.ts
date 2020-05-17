import { observable, action } from 'mobx';

class CanvasProps {
  private _canvas: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this._canvas = canvas;
    this._ctx = ctx;
  }

  @observable
  width: number = 300;

  @observable
  height: number = 150;

  @observable
  backgroundColor: string | null = null;

  @action
  setWidth(width: number) {
    this.width = width;
    this._canvas.width = width;
  }
}

export default CanvasProps;
