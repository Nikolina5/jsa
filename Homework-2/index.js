const express = require('express');

const api = express();

api.use(express.json())

const students_data = "podatocii.json";

const read = (fileName) => {
  return new Promise((success, fail) => {
    fs.readFile(fileName, (err, data) => {
      if (err) return fail(err);
      return success(data);
    });
  });
};

const write = (fileName, data) => {
  return new Promise((success, fail) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};


api.get('/students', (req,res) => {
    res.status(200).send(students);
})

api.post('/students',(req,res)=>{
    students = [
        ...students,
        req.body
    ];    
    res.status(201).send(req.body);
});


api.get('/students/:id', (req,res)=>{
    id(!students[req.params.id])
        return res.status(404).send('Not found');
    
    res.status(200).send(students[req.params.id]);
});
api.put('/students/:id',(req,res)=>{
    students = students.map((student, index) =>{ 
        if(index == req.params.id){
             student.lastName=req.body.lastName 
             student.name=req.body.name 
        }
        return student
    });
    res.status(200).send('Uspesno')
    console.log(students);
});
api.patch('/students/:id',(req,res)=>{
    students = students.map((student, index) =>{ 
        if(index == req.params.id){
             student.lastName=req.body.lastName 
             student.name=req.body.name 
        }
        return student
    });
    res.status(200).send('Uspesno promento ime')
    console.log(students);
});
api.delete('/students/:id',(req,res)=>{
    id(!students[req.params.id])
        return res.status(404).send('Not found');
        students = students.filter((s,i)=> i != req.params.id);
        res.status(204).send();
});


api.listen(10000, err => {
    if(err){
        return console.log(err)
    }
    return console.log('Server successfully started on port 10000')
});
