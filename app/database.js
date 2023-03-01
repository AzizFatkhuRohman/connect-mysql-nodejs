const mysql = require('mysql');
const port = process.env.port || 5000;
let con = mysql.createConnection({
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD
});