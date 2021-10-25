const express = require('express');
const handlers = require('./handlers');

const api = express();

api.use(express.json());

api.post('/books', handlers.create);
api.get('/books', handlers.getAll);
api.get('/books/:id', handlers.getOne);
api.put('/books/:id', handlers.update);
api.patch('/books/:id', handlers.partialUpdate);
api.delete('/books/:id', handlers.remove);

api.listen(11000, err => {
    if (err) {
        return console.log(err);
    }
    console.log('Services started on port 11000');
});