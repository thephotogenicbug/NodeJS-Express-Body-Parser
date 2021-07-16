
// Post method
app.post("/saveemp", function(req , res){
    var name = req.body.uname;
    var password = req.body.password;
    var mobile = req.body.mobile;
    var sql = "insert into emp(name , password, mobile) values('"+name+"', '"+password+"', '"+mobile+"')";
    mydatabase.query( sql , function(error , rows, fields){
        if(error) throw error
        res.send("User Details Received Successfully !");
        res.end();
    })
});


//   Get method 
 app.get("/emplist" , function(req , res){
    mydatabase.query('select * from emp order by empid desc' , function(error , rows, fields){
        if(error) throw error
        res.send( JSON.stringify(rows) );
        res.end();
    })
})

//   Edit + post method 
 app.post("/getempinfo", function(req,res){
    var empid = req.body.empid;
    mydatabase.query("select * from emp where empid='"+empid+"'", function(error , rows, fields){
        if(error) throw error
        res.send( JSON.stringify(rows) );
        res.end();
    })

})

//  update employee details 
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