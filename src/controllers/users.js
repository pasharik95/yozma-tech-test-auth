const md5 = require('md5');
const { promisify } = require('util');

const db = require('../db');

// Convert form callback to promise way
const query = promisify(db.query);

/**
 * Class 'UsersController'
 * Use for working with db table 'users'
 */
class UsersController {
  /**
   * Async function for logining users by email, password
   * @param { string } email
   * @param { string } password
   * @returns { Promise }
   */
  static login(email, password) {
    return query('SELECT * FROM users WHERE email = ? && password = ?', [
      email,
      md5(password),
    ]);
  }
}

module.exports = UsersController;
