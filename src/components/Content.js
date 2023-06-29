import React from "react";
import CardWrapper from "./CardWrapper";
import LikedUsersWrapper from "./LikedUsersWrapper";

const Content = ({ currentView }) => {
  if (currentView === "cardWrapper") {
    return <CardWrapper />;
  } else if (currentView === "likedUsersWrapper") {
    return <LikedUsersWrapper />;
  }

  return null;
};

export default Content;
