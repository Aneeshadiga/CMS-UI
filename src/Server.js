const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// Enable CORS
app.use(cors());

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.json());

// MySQL Connection
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 80,
    user: 'root',
    password: 'Aneesh@60',
    database: 'container',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Example route
app.get('/values', (req, res) => {
    const { option, value } = req.query;
    
    const query = `select * from admin`;
  
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send({ error: 'Internal Server Error' });
        return;
      }
      console.log(results);
    });
    res.json({message:"successfully queried"});
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
