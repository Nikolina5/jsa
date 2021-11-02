const express = require('express');
const api = express();

api.use(express.json());

 
api.get('/students', (req,res) => {
    res.status(200).send(students);
})

// api.post('/students', students.create);
// api.get('/students', students.create);
// api.put('/students', students.create);
// api.patch('/students', students.create);
// api.delete('/students', students.create);

api.listen(10000, err =>{
    if(err){
        return console.log(err);
    } 
    console.log('Successfully started port od 10 000')
})
