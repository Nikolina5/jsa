const mongoose = require('mongoose');

const oneCar = mongoose.model(
    'cars',
    {
        model: String,
        year: Number,
        price: Number
    },
    'cars'
);

const create = async (data) => {
    let car = new oneCar(data);
    return await car.save();
};

const getAll = async () => {
    return await oneCar.find({});
};

const getOne = async(id) => {
    return await oneCar.findById(id);
};

const update = async(id, data) => {
    return await oneCar.updateOne({_id: id}, data);
};

const partialUpdate = async(id, data) => {
    return await oneCar.updateOne({_id: id}, data);
};

const remove = async(id) => {
    return await oneCar.deleteOne({_id:id});
};

module.exports = {
    create,
    getAll,
    getOne,
    update,
    partialUpdate,
    remove
};