const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/planets', async (req, res) => {
  try {
    const response = await axios.get('https://swapi.dev/api/planets/');
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/api/films', async (req, res) => {
  try {
    const response = await axios.get('https://swapi.dev/api/films/');
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/api/people', async (req, res) => {
  try {
    const response = await axios.get('https://swapi.dev/api/people/');
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/api/starships', async (req, res) => {
  try {
    const response = await axios.get('https://swapi.dev/api/starships/');
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = 5555;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
