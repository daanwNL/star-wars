import React from 'react';
import { Card } from 'antd';
import './CustomCard.css'; // Importeer de aangepaste CSS-stijlen

const { Meta } = Card;

const CustomCard = ({ user, profileImageUrl }) => {
  const { name, address: { city } } = user;

  return (
    <Card
      hoverable
      className="custom-card" // Voeg de aangepaste CSS-klasse toe
      cover={<img alt="Profile" src={profileImageUrl} />}
    >
      <Meta title={name} description={city} />
    </Card>
  );
};

export default CustomCard;
