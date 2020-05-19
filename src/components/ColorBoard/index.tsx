import React, { useEffect, useState } from "react";
import "./index.scss";
import { Slider } from "antd";
import { SliderValue } from "antd/lib/slider";

const ColorBoard: React.FC = () => {
	const [colorString, setColorString] = useState("");
	const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
	const [baseColor, setBaseColor] = useState(0);

	useEffect(() => {
		const canvas = document.getElementById("color-board");
		const ctx = (canvas as HTMLCanvasElement).getContext("2d");
		if (ctx) {
			setCtx(ctx);
			for (let i = 0; i < 60; i++) {
				ctx.fillStyle = `rgb(${Math.floor(255 - 4.25 * i)}, ${baseColor}, ${baseColor})`;
				for (let j = 0; j < 60; j++) {
					ctx.fillRect(j * 5, i * 5, 5, 5);
				}
			}
		}
	}, [baseColor]);

	const handleGetColor = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>): void => {
		e.persist();
		const canvas = document.getElementById("color-board");
		if (canvas) {
			const rect = canvas.getBoundingClientRect();
			const x = e.clientX - rect.left * ((canvas as HTMLCanvasElement).width / rect.width);
			const y = e.clientY - rect.top * ((canvas as HTMLCanvasElement).height / rect.height);

			const imageData = ctx?.getImageData(x, y, 1, 1);
			setColorString(
				`rgb(${imageData?.data[0]}, ${imageData?.data[1]}, ${imageData?.data[2]})`,
			);
		}
	};

	const handleBaseColorChange = (v: SliderValue) => {
		setBaseColor(v as number);
	};

	return (
		<section className="color-board">
			<canvas id="color-board" width={300} height={300} onClick={handleGetColor}></canvas>
			<section className={"color-slider"}>
				<Slider defaultValue={255} max={255} min={0} onChange={handleBaseColorChange} />
			</section>
			<div className="value">{colorString}</div>
		</section>
	);
};

export default ColorBoard;
