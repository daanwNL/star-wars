import React from "react";
import AppHeader from "../components/AppHeader";
import CardWrapper from "../components/CardWrapper";
import { ConfigProvider } from "antd";
import "./App.css";

function App() {
    return (
      <ConfigProvider theme={{ token: { colorPrimary: "#76b296" } }}>
        <div className="app-container">
          <div className="app-wrapper">
            <AppHeader/>
            <CardWrapper/>
          </div>
        </div>
      </ConfigProvider>
  );
}

export default App;