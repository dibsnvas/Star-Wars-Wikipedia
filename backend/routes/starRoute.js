import express from 'express';
import { StarWars } from '../models/starWarsModel.js';
import axios from 'axios';

const router = express.Router();

// Route to save a new Star Wars entry
router.post('/', async (request, response) => {
  try {
    const { title, director, releaseDate } = request.body;
    if (!title || !director || !releaseDate) {
      return response.status(400).send({
        message: 'Send all required fields: title, director, releaseDate',
      });
    }
    
    const newStar = { title, director, releaseDate };
    const star = await StarWars.create(newStar);
    
    return response.status(201).send(star);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

// Route to get all Star Wars entries
router.get('/', async (request, response) => {
  try {
    const starwars = await StarWars.find({});
    return response.status(200).json({
      count: starwars.length,
      data: starwars,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to get a Star Wars entry by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const star = await StarWars.findById(id);

    if (!star) {
      return response.status(404).send({ message: 'Star Wars entry not found' });
    }

    return response.status(200).json(star);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to update a Star Wars entry by id
router.put('/:id', async (request, response) => {
  try {
    const { title, director, releaseDate } = request.body;
    if (!title || !director || !releaseDate) {
      return response.status(400).send({
        message: 'Send all required fields: title, director, releaseDate',
      });
    }

    const { id } = request.params;
    const star = await StarWars.findByIdAndUpdate(id, request.body, { new: true });

    if (!star) {
      return response.status(404).send({ message: 'Star Wars entry not found' });
    }

    return response.status(200).send(star);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to delete a Star Wars entry by id
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const star = await StarWars.findByIdAndDelete(id);

    if (!star) {
      return response.status(404).send({ message: 'Star Wars entry not found' });
    }

    return response.status(200).send({ message: 'Star Wars entry deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to fetch data from SWAPI
router.get('/api/:resource/:id', async (request, response) => {
  const { resource, id } = request.params;
  try {
    const swapiResponse = await axios.get(`https://swapi.dev/api/${resource}/${id}/`);
    return response.status(200).json(swapiResponse.data);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

export default router;