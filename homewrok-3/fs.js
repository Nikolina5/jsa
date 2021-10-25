const fs = require('fs');

const read = (fileName) => {
    return new Promise((res, rej)=>{
        fs.readFile(fileName, (err, data) =>{
            if(err) return rej(err);
            data = JSON.parse(data);
            return res(data);
        });
    });
};


const write = (fileName, content) => {
    return new Promise((res,rej)=>{
        content = JSON.stringify(content);
        fs.writeFile(fileName, content, err => {
            if(err) return rej(err);
            return res();
        });
    });
};

module.exports = {
    read,
    write
};