import React, { useEffect, useState } from 'react';
import CustomCard from './CustomCard';
import ButtonLike from "./ButtonLike";
import ButtonDislike from "./ButtonDislike";
import { Row, Col, Space } from 'antd';
import './CardWrapper.css';

const CardWrapper = () => {
  const [users, setUsers] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [likedUsers, setLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);

  useEffect(() => {
    // Ophalen van gebruikersgegevens van een online JSON-bestand
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleNextCard = () => {
    // Ga naar de volgende kaart
    setCurrentCardIndex(currentCardIndex + 1);
  };

  const handleLikeUser = (user) => {
    // Voeg gebruiker toe aan de lijst met gelikete gebruikers en ga naar de volgende kaart
    console.log('Liked Users:', [...likedUsers, user]);
    setLikedUsers([...likedUsers, user]);
    handleNextCard();
  };

  const handleDislikeUser = (user) => {
    // Voeg gebruiker toe aan de lijst met gedislikete gebruikers en ga naar de volgende kaart
    console.log('Disliked Users:', [...dislikedUsers, user]);
    setDislikedUsers([...dislikedUsers, user]);
    handleNextCard();
  };

  return (
    <div className="card-wrapper">
      {users.length > 0 && currentCardIndex < users.length ? (
        <Row justify="center" style={{ marginTop: '10px', marginBottom: '10px' }}>
          <Col span={24}>
            <CustomCard
              user={users[currentCardIndex]}
              profileImageUrl={`https://robohash.org/${users[currentCardIndex].id}?200x200`}
            />
          </Col>
          <Col span={24} style={{ marginTop: '10px', textAlign: 'center' }}>
            <Space size="small">
              <ButtonLike
                user={users[currentCardIndex]}
                handleLikeUser={handleLikeUser}
                handleNextCard={handleNextCard}
              />
              <ButtonDislike
                user={users[currentCardIndex]}
                handleDislikeUser={handleDislikeUser}
                handleNextCard={handleNextCard}
              />
            </Space>
          </Col>
        </Row>
      ) : (
        <>
          <p className="no-cards">Je hebt alle profielen gezien.</p>
          <p className="info-message">In de toekomst kun je ook een lijst met verstuurde likes zien. Deze wordt nu alleen nog op de achtergrond opgeslagen.</p>
        </>
      )}
    </div>
  );
};

export default CardWrapper