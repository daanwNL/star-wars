import React from "react";
import AppHeader from "../components/AppHeader";
import FilmList from "../components/FilmList";
import { ConfigProvider } from "antd";
import "./App.css";

function App() {
    return (
      <ConfigProvider theme={{ token: { colorPrimary: "#610909" } }}>
        <div className="app-container">
          <div className="app-wrapper">
            <AppHeader/>
            <FilmList/>
          </div>
        </div>
      </ConfigProvider>
  );
}

export default App;