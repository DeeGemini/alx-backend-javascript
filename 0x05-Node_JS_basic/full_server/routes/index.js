// full_server/routes/index.js

import express from 'express';
import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';

const router = express.Router();

// Route for the homepage
router.get('/', AppController.getHomepage);

// Route for getting all students
router.get('/students', StudentsController.getAllStudents);

// Route for getting students by major
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;

