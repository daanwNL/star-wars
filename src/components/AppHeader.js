import React from 'react';
import { Button } from 'antd';

const AppHeader = () => {
  return (
    <div className="app-header">
      <h1 className="app-header-title">Fitdate</h1>
      <div className="app-header-actions">
        <Button type="default" ghost>Show likes</Button>
      </div>
    </div>
  );
};

export default AppHeader;
