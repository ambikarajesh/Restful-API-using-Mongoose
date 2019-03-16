const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Person = require('./models/Persons');
const ejs = require('ejs')
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', (req,res, next)=>{
    res.send('Home');
})
app.get('/people',(req,res,next)=>{
    //const person = new Person({firstName:'Turiya', lastName:'Rajesh', email:'turiya@gmail.com', phoneNumber:'8015237720', age:31, jobTitle:'Doctor'})
    //person.save();
    Person.find().then(people => {
    //Person.find({_id:'5c8c3a772e295f2d6095d90f'}).then(people => {
    //Person.findOne().then(people => {
    //Person.findById('5c8c3a772e295f2d6095d90f').then(people => {
        //Person.find({age:{$lt:30}}).then(people => {
        res.json({
            complie:'Successfully',
            people:people
        })
    }).catch(err => {
        res.json({
            compile:'Successfully',
            people:'Profile not Found'
        })
    })
})
app.get('/people/remove/:id',(req,res,next)=>{
    
    Person.findByIdAndRemove(req.params.id).then(people => {    
        res.json({
            complie:'Successfully',
            people:people
        })
    }).catch(err => {
        res.json({
            compile:'Successfully',
            people:'Profile not Found'
        })
    })
})
app.post('/people', (req,res,next)=>{
    console.log(req.body)
    Person.create(req.body).then(people => {    
        res.json({
            complie:'Successfully',
            people:people
        })
    }).catch(err => {
        res.json({
            compile:'Successfully',
            people:'Profile not Found'
        })
    })
})

app.get('/people/:id', (req,res,next)=>{
    //Person.findById(req.params.id).then(people => {
    Person.findByIdAndUpdate(req.params.id, req.query, {new: true}).then(people => {
    
        res.json({
            complie:'Successfully',
            people:people
        })
    }).catch(err => {
        res.json({
            compile:'Successfully',
            people:'Profile not Found'
        })
    })
})

app.get('/addData', (req,res,next) =>{
    res.render('form')
})
mongoose.connect(encodeURI('mongodb+srv://Ambika:Dec%401986@cluster0-btzl5.mongodb.net/Information?retryWrites=true')).then(result => {    
    app.listen(3000, ()=>{
        console.log('server start at 3000')
    })
})