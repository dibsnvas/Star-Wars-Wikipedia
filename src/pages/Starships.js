// pages/Starships.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Starships.css';
import Menu from '../components/Menu';

function Starships() {
  const [starships, setStarships] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/')
      .then(response => {
        setStarships(response.data.results); // Access the 'results' array
        setError(null); // Reset error state if successful
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setError('Error fetching data'); // Set error state if there's an error
      });
  }, []);

  const handleCardClick = (url) => {
    const id = url.match(/\/(\d+)\//)[1];
    navigate(`/starship/${id}`);
  };

  return (
    <div className="starships">
      <Menu /> 
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="grid">
          {starships.map(starship => (
            <div className="starship-card" key={starship.url} onClick={() => handleCardClick(starship.url)}>
              <h2>{starship.name}</h2>
              <p>Cost: {starship.cost_in_credits}</p>
              <p>Max speed: {starship.max_atmosphering_speed}</p>
              <p>Max passengers: {starship.passengers}</p>
              <p>Model: {starship.model}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Starships;
