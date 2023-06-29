import React from 'react';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const AppHeader = () => {
  const navigate = useNavigate();

  const handleShowLikes = () => {
    navigate('/likedUsersWrapper');
  };

  return (
    <div className="app-header">
      <Link to="/cardWrapper" className="app-header-title">
        Fitdate
      </Link>
      <div className="app-header-actions">
        <Button type="default" ghost onClick={handleShowLikes}>
          Show likes
        </Button>
      </div>
    </div>
  );
};

export default AppHeader;
