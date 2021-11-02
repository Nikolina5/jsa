const { Validator } = require('node-input-validator');

const BookSchemaInsert = {
    book_title: 'required|minLength:3',
    price: 'required|between:5,10'
};

const BookSchemaUpdate = {
    book_title: 'minLength:3',
    price: 'between:5,10' 
};

const validate = async(data, schema = "INSERT") => {
    let sch;
    switch(schema) {
        case 'INSERT':
            sch = BookSchemaInsert;
            break;
        case 'UPDATE':
            sch = BookSchemaUpdate;
            break;
    }
    let v = new Validator(data, sch);
    let e = await v.check();
    if(!e) {
        throw v.errors
    }
};

module.exports = validate;



