import React from 'react';
import { Button } from 'antd';

const ButtonDislike = ({ user, handleDislikeUser, handleNextCard }) => {
  const handleDislike = () => {
    // Voer de functie uit om een gebruiker te disliken en naar de volgende kaart te gaan
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
