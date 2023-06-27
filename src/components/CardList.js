import React, { useEffect, useState } from 'react';
import CustomCard from './CustomCard';

const CardList = () => {
  const [users, setUsers] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Index van de huidige kaart
  const [likedUsers, setLikedUsers] = useState([]); // Gelikete gebruikers
  const [dislikedUsers, setDislikedUsers] = useState([]); // Gedislikete gebruikers

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  // Functie om de huidige kaart over te slaan en naar de volgende kaart te gaan
  const handleNextCard = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  };

  // Functie om een gebruiker aan de gelikete lijst toe te voegen en naar de volgende kaart te gaan
  const handleLikeUser = (user) => {
    console.log('Liked Users:', [...likedUsers, user]);
    setLikedUsers([...likedUsers, user]);
    handleNextCard();
  };

  // Functie om een gebruiker aan de gedislikete lijst toe te voegen en naar de volgende kaart te gaan
  const handleDislikeUser = (user) => {
    console.log('Disliked Users:', [...dislikedUsers, user]);
    setDislikedUsers([...dislikedUsers, user]);
    handleNextCard();
  };

  return (
    <div className="card-list">
      {/* Toon alleen de huidige kaart */}
      {users.length > 0 && currentCardIndex < users.length ? (
        <CustomCard
          user={users[currentCardIndex]}
          handleLikeUser={handleLikeUser.bind(null, users[currentCardIndex])}
          handleDislikeUser={handleDislikeUser.bind(null, users[currentCardIndex])}
        />
      ) : (
        <p>Geen kaarten meer</p>
      )}
    </div>
  );
  
};

export default CardList;
