
const mysql = require('mysql2');
const dotenv = require('dotenv')
dotenv.config()

// Connection details
const connection = mysql.createConnection({
  host: process.env.DB_HOST,         
  user: process.env.DB_USER,              
  password: process.env.DB_PASSWORD
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to the MySQL database!');
});

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
