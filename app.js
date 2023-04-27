const express = require('express');
require('dotenv').config();
const app = express();

var con = require("./connection");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs'); //view file
app.use(express.static("public")); // Style.css 

//render port 8000 
app.listen(8000, function(){
    console.log("Server is Running");
});


// Read Data from Database
app.get("/", function(req, res) {
  var sql = 'select * from employee;';

  con.query(sql, function(error, result) {
      if (error) throw error;
      res.render("display", {test: result });
  });
});

// Route for Inserting Data
app.post("/", function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var address = req.body.address;
    console.log(name, email);

    var sql = 'INSERT INTO employee (name, email,phone, address) values (?)';
    var values = [name, email,phone, address];

    con.query(sql, [values], function(err, result) {
        if (err) throw err;
        console.log("Data Uploaded.");
        res.redirect("/");
    });
});

// //Route for reading Data
// app.get("/", function(req, res) {
//   var sql = 'select * from employee;';

//   con.query(sql, function(error, result) {
//       if (error) throw error;
//       res.render("display", {test: result });
//   });
// });







app.get("/update", function(req, res) {
    con.connect(function(error) {
        if (error) console.log(error);

        var sql = "select * from employee where id = ?;";

        var id = req.query.id;    

        con.query(sql,[id], function(error, result) {
            if(error)console.log(error);
            res.render('update',{ test: result });
        });
    });
});
app.post("/updateData", function(req, res) {
  
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var address = req.body.address;
    var id = req.body.id;

    var sql = "update employee set name=? , email=?, phone=?, address=? where id =?;";
    con.query(sql, [name, email,phone, address, id], function(error, result) {

        if (error) console.log(error);
        console.log("data updated");
        res.redirect("/");
    });
});

app.get("/delete", function(req, res) {
    con.connect(function(err) {
        if (err) console.log(err);
        var sql = "delete from employee where id=?";
        var id = req.query.id;

        con.query(sql, [id], function(error, result) {
            if (error) console.log(error);

            res.redirect("/")
        });
    });
});