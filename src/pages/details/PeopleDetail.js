import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '/home/diana/Desktop/project/src/styles/Details/PeopleDetails.css'; 

function PeopleDetail() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}/`)
      .then(response => {
        setPerson(response.data);
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

  if (!person) {
    return <div className="loader"></div>;
  }

  return (
    <div className="people-detail">
      <div className="people-card1">
        <h2>{person.name}</h2>
        <p><span>Height:</span> {person.height}</p>
        <p><span>Mass:</span> {person.mass}</p>
        <p><span>Gender:</span> {person.gender}</p>
        <p><span>Birth Year:</span> {person.birth_year}</p>
        <p><span>Hair Color:</span> {person.hair_color}</p>
        <p><span>Eye Color:</span> {person.eye_color}</p>
      </div>
    </div>
  );
}

export default PeopleDetail;
