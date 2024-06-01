import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';
import starWarsRoutes from './routes/starWarsRoutes.js';

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Use the Star Wars routes
app.use('/starwars', starWarsRoutes);

// Root route
app.get('/', (request, response) => {
    return response.status(234).send('Star Wars Wiki');
});

// MongoDB connection and server start
mongoose
    .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(error);
    });