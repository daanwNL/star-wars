import React from 'react';
import { Button } from 'antd';
import { LikeOutlined } from '@ant-design/icons';

const ButtonLike = ({ user, handleLikeUser, handleNextCard }) => {
  const handleLike = () => {
    // Voer de functie uit om een gebruiker te liken en naar de volgende kaart te gaan
    handleLikeUser(user);
    handleNextCard();
  };

  return (
    <Button type="primary" shape="circle" onClick={handleLike} icon={<LikeOutlined />} size="large" />
  );
};

export default ButtonLike;
