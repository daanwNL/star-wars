import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import Content from "../components/Content";
import { ConfigProvider } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  const [currentView, setCurrentView] = useState("cardWrapper");

  const showLikedUsers = () => {
    setCurrentView("likedUsersWrapper");
  };

  const goBackToCardWrapper = () => {
    setCurrentView("cardWrapper");
  };

  return (
    <Router>
      <ConfigProvider theme={{ token: { colorPrimary: "#76b296" } }}>
        <div className="app-container">
          <div className="app-wrapper">
            <AppHeader
              showLikedUsers={showLikedUsers}
              goBack={goBackToCardWrapper}
            />
            <Content currentView={currentView} goBack={goBackToCardWrapper} />
          </div>
        </div>
      </ConfigProvider>
    </Router>
  );
}

export default App;
