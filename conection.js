// MySql
const mysql = require('mysql');
const config = {
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    user: "bsale_test",
    password: "bsale_test",
    database: "bsale_test"
}
const connection = mysql.createConnection(config);
  
// Check connect
connection.connect(error => {
    if (error) throw error;
    console.log('Database server running!');
  }); 

module.exports =  connection;
