import React, { useEffect, useState } from "react";
import "./index.scss";

const ColorBoard: React.FC = () => {
	const [colorString, setColorString] = useState("");
	const [ctx, setCtx] = useState<CanvasRenderingContext2D>();

	useEffect(() => {
		const canvas = document.getElementById("color-board");
		const ctx = (canvas as HTMLCanvasElement).getContext("2d");
		if (ctx) {
			setCtx(ctx);
			for (let i = 0; i < 60; i++) {
				for (let j = 0; j < 60; j++) {
					for (let k = 0; k < 60; k++) {
						ctx.fillStyle = `rgb(${Math.floor(255 - 4.25 * i)}, ${Math.floor(
							255 - 4.25 * j,
						)}, ${Math.floor(255 - 4.25 * k)})`;
					}
					ctx.fillRect(j * 5, i * 5, 5, 5);
				}
			}
		}
	}, []);

	const handleGetColor = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>): void => {
		e.persist();
		const canvas = document.getElementById("color-board");
		if (canvas) {
			const rect = canvas.getBoundingClientRect();
			const x = e.clientX - rect.left * ((canvas as HTMLCanvasElement).width / rect.width);
			const y = e.clientY - rect.top * ((canvas as HTMLCanvasElement).height / rect.height);

			const color = ctx?.getImageData(x, y, 1, 1);
			console.log(color);
		}
	};

	return (
		<section className="color-board">
			<canvas id="color-board" width={300} height={300} onClick={handleGetColor}></canvas>
			<div className="value">{colorString}</div>
		</section>
	);
};

export default ColorBoard;
