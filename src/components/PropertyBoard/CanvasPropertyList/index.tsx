import React from "react";
import { observer } from "mobx-react";
import useStores from "../../../store";
import { Input } from "antd";

const CanvasPropertyList: React.FC = () => {
	const { canvasItemStore } = useStores();
	const { currentCanvasItem } = canvasItemStore;

	const handleChangeWidth = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const value = e.target.value;
		currentCanvasItem?.prop?.setWidth(parseInt(value));
	};

	const handleChangeHeight = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const value = e.target.value;
		currentCanvasItem?.prop?.setHeight(parseInt(value));
	};

	const handleBackgroundColor = (color: string): void => {
		console.log(color);
		currentCanvasItem?.prop?.setBackGround(color);
	};

	return (
		<>
			{currentCanvasItem && (
				<section>
					<Input value={currentCanvasItem.prop?.width} onChange={handleChangeWidth} />
					<Input value={currentCanvasItem.prop?.height} onChange={handleChangeHeight} />
				</section>
			)}
		</>
	);
};

export default observer(CanvasPropertyList);
