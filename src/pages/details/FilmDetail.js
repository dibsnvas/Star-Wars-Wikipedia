import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '/home/diana/Desktop/project/src/styles/Details/FilmDetail.css'; 

function FilmDetail() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/${id}/`)
      .then(response => {
        setFilm(response.data);
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

  if (!film) {
    return <div className="loader"></div>;
  }

  return (
    <div className="film-detail">
      <div className="film-card1">
        <h2>{film.title}</h2>
        <p><span>Episode:</span> {film.episode_id}</p>
        <p><span>Director:</span> {film.director}</p>
        <p><span>Producer:</span> {film.producer}</p>
        <p><span>Release Date:</span> {film.release_date}</p>
        <p><span>Opening Crawl:</span> {film.opening_crawl}</p>
      </div>
    </div>
  );
}

export default FilmDetail;
