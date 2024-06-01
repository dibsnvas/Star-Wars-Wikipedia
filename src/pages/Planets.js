// Planets.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import Menu from '../components/Menu';
import '../styles/Planets.css';

function Planets() {
  const [planets, setPlanets] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get('https://swapi.dev/api/planets/')
      .then(response => {
        console.log(response.data.results); // Log data to verify
        setPlanets(response.data.results);
        setError(null);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setError('Error fetching data');
      });
  }, []);

  const handleCardClick = (id) => {
    navigate(`/planet/${id}`); // Update to use navigate
  };

  return (
    <div className="planets">
      <Menu /> 
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="grid">
          {planets.map(planet => (
            <div 
              className="planet-card" 
              key={planet.url}
              onClick={() => handleCardClick(planet.url.split('/').slice(-2, -1)[0])}
            >
              <h2>{planet.name}</h2>
              <p>Diameter: {planet.diameter}</p>
              <p>Population: {planet.population}</p>
              <p>Climate: {planet.climate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Planets;
