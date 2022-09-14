import express from 'express';

const app = express();

// List games
app.get('/games', (request, response) => {
    return response.json([]);
});

// List game ads
app.get('/games/:id/ads', (request, response) => {
    return response.json([]);
});

// Fetch discord from an ad
app.get('/ads/:id/discord', (request, response) => {
    return response.json([]);
});

// List ads
app.get('/ads', (request, response) => {
    return response.json({ message: 'ok' });
});

// Create an ad
app.post('/ads', (request, response) => {
    return response.status(201).json([]);
});

// Init server
app.listen(3333, () => {
    console.log('Server started at 3333! 🚀');
});