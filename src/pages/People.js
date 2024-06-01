import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Menu from '../components/Menu'; 
import '../styles/people.css'; 

function People() {
  const [people, setPeople] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        setPeople(response.data.results);
        setError(null);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setError('Error fetching data');
      });
  }, []);

  const handleCardClick = (url) => {
    const match = url.match(/\/(\d+)\//);
    if (match) {
      const id = match[1];
      navigate(`/people/${id}`);
    } else {
      console.error('Invalid URL format:', url);
    }
  };

  return (
    <div className="people">
      <Menu /> {/* Rendering the Menu component */}
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="grid">
          {people.map(person => (
            <div className="people-card" key={person.url} onClick={() => handleCardClick(person.url)}>
              <h2>{person.name}</h2>
              <p>Height: {person.height}</p>
              <p>Mass: {person.mass}</p>
              <p>Gender: {person.gender}</p>
              <p>Birth Year: {person.birth_year}</p>
              <p>Hair color: {person.hair_color}</p>
              <p>Eye color: {person.eye_color}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default People;
