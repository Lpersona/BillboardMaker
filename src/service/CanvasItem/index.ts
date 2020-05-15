class CanvasItem {
  private _id: string;
  public context: CanvasRenderingContext2D | undefined;

  constructor(id: string, width: number, height: number) {
    this._init(id);
    this._id = id;
  }

  private _init(id: string) {
    if (document.getElementById(id)) {
      throw new Error("元素已经存在");
    }
    
    const canvas = document.createElement("canvas");
    canvas.setAttribute(id, this._id);
    canvas.width = 
  }
}

export default CanvasItem;
