import "antd/dist/antd.css";
import React from "react";
import "./App.css";
import Tool from "./components/Tool";
import SketchBoard from "./components/SketchBoard";
import PropertyBoard from "./components/PropertyBoard";
import { Layout } from "antd";

const { Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Sider>
          <Tool />
        </Sider>
        <Content>
          <SketchBoard />
        </Content>
        <Sider>
          <PropertyBoard />
        </Sider>
      </Layout>
    </div>
  );
}

export default App;
