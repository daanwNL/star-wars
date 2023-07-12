import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'antd';
import axios from 'axios';

// Functie om een getal om te zetten naar Romeinse cijfers
const toRomanNumeral = (num) => {
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ];

  let result = '';
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }
  return result;
};

const FilmList = () => {
  const [films, setFilms] = useState([]);
  const [currentOrder, setCurrentOrder] = useState('Release order');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('https://swapi.py4e.com/api/films/');
        setFilms(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Fout bij het ophalen van de films:', error);
      }
    };

    fetchFilms();
  }, []);

  const getOrderedList = () => {
    switch (currentOrder) {
      case 'Release order':
        return [4, 5, 6, 1, 2, 3];
      case 'Chronological order':
        return [1, 2, 3, 4, 5, 6];
      case 'Machete order':
        return [4, 5, 2, 3, 6];
      default:
        return [];
    }
  };

  const generateOrderedFilms = () => {
    const orderedIds = getOrderedList();
    return orderedIds.map(episodeId => films.find(film => film.episode_id === episodeId));
  };

  const orderedFilms = generateOrderedFilms();

  const handleOrderChange = (order) => {
    setCurrentOrder(order);
  };

  return (
    <div className="filmlist-wrapper" style={{ padding: '0 10px' }}>
      <Row justify="center" style={{ marginTop: '10px' }}>
        <Col span={24}>
          {loading ? (
            <div>Loading films...</div>
          ) : (
            orderedFilms.map(film => (
              <div key={film.episode_id} className="card-item">
                <div className="episode-id">{toRomanNumeral(film.episode_id)}</div>
                <div className="title">{film.title}</div>
              </div>
            ))            
          )}
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24} style={{ textAlign: 'center' }}>
          <h2 className="button-heading">Select movie viewing order</h2>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Button
            type="primary"
            style={{ marginRight: '10px' }}
            onClick={() => handleOrderChange('Release order')}
          >
            Release
          </Button>
          <Button
            type="primary"
            style={{ marginRight: '10px' }}
            onClick={() => handleOrderChange('Chronological order')}
          >
            Chronological
          </Button>
          <Button
            type="primary"
            onClick={() => handleOrderChange('Machete order')}
          >
            Machete
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default FilmList;
