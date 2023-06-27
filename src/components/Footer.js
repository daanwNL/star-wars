import React from "react";
import ButtonLike from "./ButtonLike";
import ButtonDislike from "./ButtonDislike";

const Footer = ({ handleLikeUser, handleDislikeUser, handleNextCard }) => {
  const handleLike = () => {
    handleLikeUser();
    handleNextCard();
  };

  const handleDislike = () => {
    handleDislikeUser();
    handleNextCard();
  };

  return (
    <div>
      <ButtonLike handleLike={handleLike} />
      <ButtonDislike handleDislike={handleDislike} />
    </div>
  );
};

export default Footer;
