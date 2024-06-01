// pages/details/StarshipDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '/home/diana/Desktop/project/src/styles/Details/StarshipDetails.css'; 

function StarshipDetail() {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/${id}/`)
      .then(response => {
        setStarship(response.data);
        setError(null); // Reset error state if successful
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setError('Error fetching data'); // Set error state if there's an error
      });
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!starship) {
    return <div className="loader"></div>;
  }

  return (
    <div className="starship-detail">
      <div className="starship-card1">
        <h2>{starship.name}</h2>
        <p><span>Model:</span> {starship.model}</p>
        <p><span>Manufacturer:</span> {starship.manufacturer}</p>
        <p><span>Cost:</span> {starship.cost_in_credits}</p>
        <p><span>Length:</span> {starship.length}</p>
        <p><span>Max Speed:</span> {starship.max_atmosphering_speed}</p>
        <p><span>Crew:</span> {starship.crew}</p>
        <p><span>Passengers:</span> {starship.passengers}</p>
        <p><span>Cargo Capacity:</span> {starship.cargo_capacity}</p>
      </div>
    </div>
  );
}

export default StarshipDetail;
