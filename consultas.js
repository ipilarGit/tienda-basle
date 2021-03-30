// MySql
const mysql = require('mysql');
const connection = mysql.createConnection({
    user: "bsale_test",
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    password: "bsale_test",
    database: "bsale_test",
  });
  
// Check connect
connection.connect(error => {
    if (error) throw error;
    console.log('Database server running!');
  });

const getProducts = async()=>{
    const sql = await connection.query('SELECT * FROM bsale_test.product');
    return sql.rows;

}

module.exports = {
    getProducts
}