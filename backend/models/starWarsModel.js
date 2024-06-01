import mongoose from 'mongoose';

const starWarsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    releaseDate: { type: Number, required: true }, // Assuming releaseDate is a year
}, {
    timestamps: true,
});

export const StarWars = mongoose.model('StarWars', starWarsSchema);