import React from "react";
import "./index.css";

const SketchBoard: React.FC = () => {
  return (
    <section className="sketch-board">
      <canvas id="sketch"></canvas>
    </section>
  );
};

export default SketchBoard;
