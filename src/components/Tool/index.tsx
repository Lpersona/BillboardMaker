import React from "react";
import "./index.css";
import { Button } from "antd";

const Tool: React.FC = () => {
  return (
    <section className="tool">
      <Button>新建画板</Button>
      <Button>文字</Button>
    </section>
  );
};

export default Tool;
