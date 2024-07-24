// full_server/server.js

import express from 'express';
import router from './routes/index.js';
import path from 'path';
import process from 'process';

const app = express();
const port = 1245;

// Get the database filename from the command-line arguments
const databaseFile = process.argv[2] || './full_server/database.csv';

// Middleware to make the database file available to controllers
app.use((req, res, next) => {
  req.databaseFile = databaseFile;
  next();
});

// Use the routes defined in the routes directory
app.use(router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;

