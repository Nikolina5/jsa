const books = require('./books');

const create = async (req, res) => {
    try {
        let badRequest = !req.body.book_title
            || !req.body.is_fav
            || !req.body.how_much;

        // let condition = req.body.first_name
        //     && req.body.last_name
        //     && req.body.gpa;
        if (badRequest) {
            return res.status(400).send('Bad request');
        }
        let newbook = await books.create(req.body);
        res.status(201).send(newbook);
        console.log(create);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};


const getAll = async (req, res) => {
    try {
        let data = await books.getAll();
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

const getOne = async (req, res) => {
    try {
        let s = await books.getOne(req.params.id);
        if (!s) {
            return res.status(404).send('Not found');
        }
        res.status(200).send(s);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

const update = async (req, res) => {
    try {
        let condition = !req.body.book_title
            || !req.body.is_fav
            || !req.body.how_much;
        if (condition) {
            return res.status(400).send('Bad request');
        }
        await books.update(req.params.id, req.body);
        res.status(204).send();
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

const partialUpdate = async (req, res) => {
    try {
        let condition = req.body.book_title
            || req.body.is_fav
            || req.body.how_much;
        if (!condition) {
            return res.status(400).send('Bad request');
        }
        await books.partialUpdate(req.params.id, req.body);
        res.status(204).send();
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

const remove = async (req, res) => {
    try {
        if(await books.remove(req.params.id)) {
            res.status(204).send();
        }
        return res.status(404).send('Not found');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports = {
    create,
    getAll,
    getOne,
    update,
    partialUpdate,
    remove
};