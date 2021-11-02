const mongoose = require('mongoose');

const schemaForBook = new mongoose.Schema({
    title: String,
    author: String
});

const book = mongoose.model('books', schemaForBook);

const create = async (data) => {
    let booK = new book(data);
    return await booK.save();
};

const getAll = async () => {
    return await book.find({});
};

const getOne = async(id) => {
    return await book.findById(id);
};

const update = async(id, data) => {
    return await book.updateOne({_id: id}, data);
};

const partialUpdate = async(id, data) => {
    return await book.updateOne({_id: id}, data);
};

const remove = async(id) => {
    return await book.deleteOne({_id:id});
};

module.exports = {
    create,
    getAll,
    getOne,
    update,
    partialUpdate,
    remove
};