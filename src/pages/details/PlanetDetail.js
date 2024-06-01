// PlanetDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '/home/diana/Desktop/project/src/styles/Details/PlanetDetail.css';

function PlanetDetail() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`Fetching planet with id: ${id}`);
    axios.get(`https://swapi.dev/api/planets/${id}/`)
      .then(response => {
        console.log(response.data); // Log data to verify
        setPlanet(response.data);
        setError(null);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setError('Error fetching data');
      });
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!planet) {
    return <div className="loader"></div>;
  }

  return (
    <div className="planet-detail">
      <div className="planet-card1">
        <h2>{planet.name}</h2>
        <p><span>Diameter:</span> {planet.diameter}</p>
        <p><span>Climate:</span> {planet.climate}</p>
        <p><span>Population:</span> {planet.population}</p>
        <p><span>Gravity:</span> {planet.gravity}</p>
        <p><span>Orbital Period:</span> {planet.orbital_period}</p>
        <p><span>Rotation Period:</span> {planet.rotation_period}</p>
        <p><span>Surface Water:</span> {planet.surface_water}</p>
        <p><span>Terrain:</span> {planet.terrain}</p>
      </div>
    </div>
  );
}

export default PlanetDetail;
