import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
    console.log('Hello');

    return response.json({ message: 'ok' });
});

app.listen(3333, () => {
    console.log('Server started at 3333! 🚀');
});