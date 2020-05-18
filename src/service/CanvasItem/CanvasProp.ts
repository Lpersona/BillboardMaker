import { observable, action } from "mobx";

class CanvasProps {
	private _canvas: HTMLCanvasElement;
	private _ctx: CanvasRenderingContext2D;

	constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
		this._canvas = canvas;
		this._ctx = ctx;
	}

	@observable
	width = 300;

	@observable
	height = 150;

	@observable
	backgroundColor: string | null = null;

	@action
	setWidth(width: number): void {
		this.width = width;
		this._canvas.width = width;
	}

	@action
	setHeight(height: number): void {
		this.height = height;
		this._canvas.height = height;
	}

	@action
	setBackGround(color: string): void {
		this.backgroundColor = color;

		this._ctx.fillStyle = color;
		this._ctx.fillRect(0, 0, this.width, this.height);
	}
}

export default CanvasProps;
