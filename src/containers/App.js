import React from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import { ConfigProvider, Layout } from 'antd';
import './App.css';

function App() {
  return (
    <ConfigProvider theme={{token: {colorPrimary: '#76b296'}}}>
      <Layout>
        <Header />
        <CardList />
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
