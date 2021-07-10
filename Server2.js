const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());  // to parse the body while receiving a request from client
var fs = require("fs"); // to read and write the content


// mysql connection 
const mysql = require("mysql");
const mydatabase = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'reactone'
});
mydatabase.connect(); // nodejs will get connected to mysql engine and to reactone databse

/* get method */
app.get("/booklist" , function(req , res){
    mydatabase.query('select * from book' , function(error , rows, fields){
        if(error) throw error
        res.send( JSON.stringify(rows) );
        res.end();
    })
})
/* delete method */
app.post("/deleteBook", function(req,res){
    var id = req.body.id;
    var sql = "delete from book where bookid='"+id+"' "
    mydatabase.query(sql , function(error , rows, fields){
     if(error) throw error
      res.send(id+ " : Book Details Deleted Successfully ");
      res.end();
            
        })
})

/* delete method */
app.post("/deleteEmployee", function(req,res){
    var id = req.body.id;
    var sql = "delete from emp where empid='"+id+"' "
    mydatabase.query(sql , function(error , rows, fields){
     if(error) throw error
      res.send(id+ " : Employee Details Deleted Successfully ");
      res.end();
            
        })
})

/* save method */
app.post("/saveemp", function(req , res){
    var employeeName = req.body.empname;
    var empsalary = req.body.empsal;
    var email = req.body.emailid;
    var mobile = req.body.mobileno;
    var city = req.body.cityname;
    var sql = "insert into emp(name , salary, email , mobile , city) values('"+employeeName+"', '"+empsalary+"', '"+email+"', '"+mobile+"', '"+city+"')";
    mydatabase.query( sql , function(error , rows, fields){
        if(error) throw error
        res.send("Employee Details Received Successfully !");
        res.end();
    })
});

 /* get method */
app.get("/emplist" , function(req , res){
    mydatabase.query('select * from emp order by empid desc' , function(error , rows, fields){
        if(error) throw error
        res.send( JSON.stringify(rows) );
        res.end();
    })
})

 /* Edit + post method */
app.post("/getempinfo", function(req,res){
    var empid = req.body.empid;
    mydatabase.query("select * from emp where empid='"+empid+"'", function(error , rows, fields){
        if(error) throw error
        res.send( JSON.stringify(rows) );
        res.end();
    })

})
/* update employee details */
app.post("/updateemp", function(req,res){
    var  name = req.body.empname;
    var  salary = req.body.empsal;
    var  email = req.body.emailid;
    var  mobile = req.body.mobileno;
    var  city = req.body.cityname;
    var  id = req.body.empid;
    var  sql = "update emp set name='"+name+"', salary='"+salary+"', email='"+email+"', mobile='"+mobile+"', city='"+city+"' where empid='"+id+"' ";
    mydatabase.query( sql , function(error , rows, fields){
        if(error) throw error
        res.send(name +" : Employee Details Updated Successfully !");
        res.end();
    })
})


app.post("/savefiledata", function(req, res){
    var data = req.body.textdata;
    fs.appendFile("message.txt", data, function(){
        res.send("Contents Added in File Successfully !");
        res.end();
    })
})

app.get("/getfiledata", function(req , res){
    
    fs.readFile("message.txt", function(error , filedata){
        res.writeHead(200 , {'Content-Type':'text/html'});
        res.write(filedata);
        res.end();
    })
})

app.listen(2222, function(){
    //   http://localhost:2222/booklist
});
