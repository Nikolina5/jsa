// const fs = require('fs');
const express = require('express');

const api=express();
api.use(express.json());

let students = [{
    name: "",
    lastName: "",
}];

api.get('/students',(req,res)=>{
    res.status(200).send(students)
});
api.post('/students',(req,res)=>{
    console.log(students, req.body);
    students = [
        ...students,
        req.body
    ];    
    console.log(api.get);
    res.status(201).send(req.body);
});
api.put('/students/:id',(req,res)=>{
    res.status(200).send('hahahahaha');
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
    res.status(200).send('')
});

api.listen(90000, err => {
    if(err){
        return console.log(err)
    }
    return console.log('Server successfully started on port 90000')
});
