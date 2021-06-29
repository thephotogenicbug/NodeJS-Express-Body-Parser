const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// MySQL connection
const mysql = require('mysql');
const mydatabase = mysql.createConnection({
     host: 'localhost',
     user:'root',
     password:'',
     database:'reactone'
});
mydatabase.connect(); // nodejs will get connected to mysql engine and to reactone database

app.get('/booklist', function(req,res){ // req , res are called parameter
mydatabase.query('select * from book', function(error, rows, fields){ // fields number of columns in table
     if(error) throw error
     res.send(JSON.stringify(rows));
     res.end();
})
}) 

app.get('/citylist', function(req,res){ // req , res are called parameter
mydatabase.query('select * from city', function(error, rows, fields){ // fields number of columns in table
     if(error) throw error
     res.send(JSON.stringify(rows));
     res.end();
})
}) 

app.get('/productlist', function(req,res){ // req , res are called parameter
mydatabase.query('select * from product', function(error, rows, fields){ // fields number of columns in table
     if(error) throw error
     res.send(JSON.stringify(rows));
     res.end();
})
})

app.listen(5556, function(){

})