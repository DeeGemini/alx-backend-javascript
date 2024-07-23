// 3-read_file_async.js

const fs = require('fs').promises;

/**
 * Reads the student database file asynchronously and logs the number of students.
 * @param {string} filePath - The path to the student database file.
 * @returns {Promise<void>}
 */
async function countStudents(filePath) {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(filePath, 'utf8');
    
    // Split the file content by lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    // Remove the header line
    const headers = lines.shift();

    // Initialize a map to store the field-wise student details
    const fieldMap = {};

    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');

      if (!fieldMap[field]) {
        fieldMap[field] = [];
      }
      
      fieldMap[field].push(firstname);
    });

    const totalStudents = lines.length;

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, students] of Object.entries(fieldMap)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
