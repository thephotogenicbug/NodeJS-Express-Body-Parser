const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get("/city", function(req,res){
   // res.writeHead(200, {'Content-Type': 'application/json'})
    var city = ["Bangalore", "Chennai", "Mumbai", "Delhi", "Madras"];
    var jsonData = JSON.stringify(city); // array to json
    res.send(jsonData);
    res.end();
});

app.get("/book", function(req,res){
    var book = ["Java", "NodeJS", "React", "Angular", "Css"];
    var jsonData = JSON.stringify(book); // array to json
    res.send(jsonData);
    res.end();
});

app.get("/course", function(req,res){
    var course = ["Java Training", "NodeJS Training", "React Training", "Angular Training", "Css Training"];
    var jsonData = JSON.stringify(course); // array to json
    res.send(jsonData);
    res.end();
})
app.get("/customer", function(req,res){
    var customer = [
        {name:"Naveen",     age:"24 Years",   mobile:888888888888,     city:"Bangalore"},
        {name:"Boo",        age:"24 Years",   mobile:999999999999,     city:"Bangalore"},
        {name:"Ganesh",     age:"30 Years",   mobile:8888888888,       city:"Pune"},
        {name:"Ramesh",     age:"26 Years",   mobile:99999999999,      city:"Chennai"},
        {name:"Bummo",      age:"28 Years",   mobile:88888888888,      city:"Kerala"},
    ];
    var jsonData = JSON.stringify(customer); // array to json
    res.send(jsonData);
    res.end();
})



app.listen(8080, function(){

})