// 2-read_file.js

const fs = require('fs');
const path = require('path');

/**
 * Reads the student database file and logs the number of students.
 * @param {string} filePath - The path to the student database file.
 */
function countStudents(filePath) {
    try {
        // Read the file synchronously
        const data = fs.readFileSync(filePath, 'utf8');

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

        const totalStudents = line.length;

        console.log(`Number of students: ${totalStudents}`);
        for (const [field, students] of Object.entries(fieldMap)) {
            console.log(`Number of students in ${field}: ${student.length}. List: ${students.join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.export = countStudents;
