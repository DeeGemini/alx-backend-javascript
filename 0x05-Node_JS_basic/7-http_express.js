// 7-http_express.js

const express = require('express');
const countStudents = require('./3-read_file_async');

// Create an Express application
const app = express();

const databasePath = process.argv[2] || 'database.csv';

// Define the root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define the /students route
app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  try {
    const data = await countStudents(databasePath);
    res.end();
  } catch (error) {
    res.write(error.message);
    res.end();
  }
});

// The server listens on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
