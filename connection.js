
// Comment this if you are in server 
// const mysql = require('mysql');
// require('dotenv').config();
// var con = mysql.createConnection({
//   host:process.env.HOST,
//   user:process.env.USER,
//   password:process.env.PASSWORD,
//   database:process.env.DATABASE
// });
// con.connect(function(error){
//   if(error) throw error;
//   console.log("Database is Connected Successfully")
// });
 
// Comment  this if you are in local Machine

var mysql = require('mysql');
var con = mysql.createConnection({
  host     : 'presentation-db.cmuokqciitb8.us-east-1.rds.amazonaws.com',
  user     : 'imroshan_adex',
  password : 'ugra#3194',
  port     : '3306',
  database : 'presentation_db',
});
con.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

module.exports = con;