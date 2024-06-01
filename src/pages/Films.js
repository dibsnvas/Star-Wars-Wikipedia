import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/films.css'; 
import Menu from '../components/Menu'; 

function Films() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://swapi.dev/api/films/')
      .then(response => {
        setFilms(response.data.results);
        setError(null);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setError('Error fetching data');
      });
  }, []);

  return (
    <div className="films">
      <Menu /> 
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="grid">
          {films.map((film, index) => (
            <Link to={`/film/${index + 1}`} key={film.episode_id} className="film-card">
              <h2>{film.title}</h2>
              <p>Episode: {film.episode_id}</p>
              <p>Directed by: {film.director}</p>
              <p>Release Date: {film.release_date}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Films;
