// ButtonLike.js

import React from 'react';
import { Button } from 'antd';

const ButtonLike = ({ user, handleLikeUser, handleNextCard }) => {
  const handleLike = () => {
    handleLikeUser(user);
    handleNextCard();
  };

  return (
    <Button type="primary" onClick={handleLike}>
      Like
    </Button>
  );
};

export default ButtonLike;
