// full_server/utils.js

import fs from 'fs/promises';

/**
 * Reads the student database file asynchronously and returns an object of arrays of first names per field.
 * @param {string} filePath - The path to the student database file.
 * @returns {Promise<Object>} - A promise that resolves to an object with fields as keys and arrays of first names as values.
 */
async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    const headers = lines.shift(); // Remove the header line
    const fieldMap = {};

    lines.forEach(line => {
      const [firstname, lastname, age, field] = line.split(',');

      if (!fieldMap[field]) {
        fieldMap[field] = [];
      }

      fieldMap[field].push(firstname);
    });

    return fieldMap;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

export { readDatabase };
