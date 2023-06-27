// ButtonDislike.js

import React from 'react';
import { Button } from 'antd';

const ButtonDislike = ({ user, handleDislikeUser, handleNextCard }) => {
  const handleDislike = () => {
    handleDislikeUser(user);
    handleNextCard();
  };

  return (
    <Button type="default" onClick={handleDislike}>
      Dislike
    </Button>
  );
};

export default ButtonDislike;
