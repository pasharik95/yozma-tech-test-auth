const md5 = require('md5');

const { User } = require('../models');

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
  static async login(email, password) {
    return User.findOne({ where: { email, password: md5(password) } });
  }
}

module.exports = UsersController;
