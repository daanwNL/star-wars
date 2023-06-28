import React from "react";
import Header from "../components/Header";
import CardWrapper from "../components/CardWrapper";
import { ConfigProvider, Layout } from 'antd';
import './App.css';

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#76b296' } }}>
      <Layout>
        <Header />
        <CardWrapper />
      </Layout>
    </ConfigProvider>
  );
}

export default App;