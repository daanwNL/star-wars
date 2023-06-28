import React from 'react';
import { Button } from 'antd';
import { DislikeOutlined } from '@ant-design/icons';

const ButtonDislike = ({ user, handleDislikeUser, handleNextCard }) => {
  const handleDislike = () => {
    // Voer de functie uit om een gebruiker te disliken en naar de volgende kaart te gaan
    handleDislikeUser(user);
    handleNextCard();
  };

  return (
    <Button type="default" shape="circle" onClick={handleDislike} icon={<DislikeOutlined />} size="large" />
  );
};

export default ButtonDislike;
