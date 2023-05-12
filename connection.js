
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

const mysql = require('mysql');
const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'sush',
  password : 'sush123',
  database : 'my_db',
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

module.exports = connection;
