// full_server/controllers/StudentsController.js

import { readDatabase } from '../utils.js';

class StudentsController {
  /**
   * Handles the request and response to get all students.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} - The response object with a list of students per field.
   */
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase('./full_server/database.csv');
      const fields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      
      let responseText = 'This is the list of our students\n';
      
      fields.forEach(field => {
        const students = data[field];
        responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });
      
      return res.status(200).send(responseText.trim());
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }

  /**
   * Handles the request and response to get students by major.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} - The response object with a list of students for the specified major.
   */
  static async getAllStudentsByMajor(req, res) {
    const major = req.query.major;
    
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase('./full_server/database.csv');
      
      if (!data[major]) {
        return res.status(500).send('Cannot load the database');
      }

      const students = data[major];
      return res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;

