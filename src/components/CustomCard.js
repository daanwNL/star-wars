import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CustomCard = ({ user, profileImageUrl }) => {
  const { name, address: { city } } = user;

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="Profile" src={profileImageUrl} />}
    >
      <Meta title={name} description={city} />
    </Card>
  );
};

export default CustomCard;
