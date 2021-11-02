const express = require('express');
const api = express();
require('./pkg/db/index');

api.use(express.json());

const forCarsHandler = require('./handlers/handler_for_cars');
const forBooksHandler = require('./handlers/handler_for_books');

api.get('/books', forBooksHandler.getAll);
api.post('/books', forBooksHandler.create);
api.get('/books/:id', forBooksHandler.getOne);
api.put('/books/:id', forBooksHandler.update);
api.patch('/books/:id', forBooksHandler.partialUpdate);
api.delete('/books/:id', forBooksHandler.remove);

api.get('/cars', forCarsHandler.getAll);
api.post('/cars', forCarsHandler.create);
api.get('/cars/:id', forCarsHandler.getOne);
api.put('/cars/:id', forCarsHandler.update);
api.patch('/cars/:id', forCarsHandler.partialUpdate);
api.delete('/cars/:id', forCarsHandler.remove);

api.listen(4000, (err) => {
    if(err) {
        console.log('Sorry it is error:', err);
    }
    console.log('Succssfully started port od 4000')
});

