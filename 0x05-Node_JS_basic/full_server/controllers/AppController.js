// full_server/controllers/AppController.js

class AppController {
  /**
   * Handles the request and response for the homepage.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} - The response object with a 200 status and a message.
   */
  static getHomepage(req, res) {
    return res.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;

