import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Films from './pages/Films';
import Planets from './pages/Planets';
import People from './pages/People';
import Starships from './pages/Starships';
import PlanetDetail from './pages/details/PlanetDetail';
import FilmDetail from './pages/details/FilmDetail';
import StarshipDetail from './pages/details/StarshipDetails';
import PeopleDetail from './pages/details/PeopleDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/people" element={<People />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/planet/:id" element={<PlanetDetail />} /> 
        <Route path="/film/:id" element={<FilmDetail />} />
        <Route path="/starship/:id" element={<StarshipDetail />} />
        <Route path="/people/:id" element={<PeopleDetail />} />
      </Routes>
    </div>
  );
}

export default App;
