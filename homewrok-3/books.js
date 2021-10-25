const fs = require('./fs');
const db = 'books.json';

const create = async (bookData) => {
    let data = await fs.read(db);
    let id = 1;
    if (data.length !== 0) {
        id = data[data.length - 1].id + 1;
    }
    let masthave = {
        id,
        first_name: bookData.book_title,
        last_name: bookData.is_fav,
        gpa: bookData.how_much
    };
    data = [...data, masthave];
    await fs.write(db, data);
    return masthave;
};

const getAll = async () => {
    let data = await fs.read(db);
    return data;
};

const getOne = async (id) => {
    let data = await fs.read(db);
    let masthave = data.filter(s => s.id === Number(id));
    if(masthave.length === 0) return null;
    return masthave[0];
};

const update = async (id, bookData) => {
    let data = await fs.read(db);
    data = data.map(s => {
        if (s.id === Number(id)) {
            s.first_name = bookData.book_title;
            s.last_name = bookData.is_fav;
            s.gpa = bookData.how_much;
        }
        return s;
    });
    await fs.write(db, data);
};

const partialUpdate = async (id, bookData) => {
    let data = await fs.read(db);
    data = data.map(s => {
        if (s.id === Number(id)) {
            s.first_name = bookData.book_title ? bookData.book_title : s.book_title;
            s.last_name = bookData.is_fav ? bookData.is_fav : s.is_fav;
            s.gpa = bookData.how_much ? bookData.how_much : s.how_much;
        }
        return s;
    });
    await fs.write(db, data);
};

const remove = async (id) => {
    let data = await fs.read(db);
    let prevLength = data.length;
    data = data.filter(s => s.id !== Number(id));
    if (data.length === prevLength) {
        return false;
    }
    await fs.write(db, data);
    return true;
};

module.exports = {
    create,
    getAll,
    getOne,
    update,
    partialUpdate,
    remove
};