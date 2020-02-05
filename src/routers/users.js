const { Router } = require('express');
const { body } = require('express-validator');
const { UNAUTHORIZED } = require('http-status-codes');

const UsersController = require('../controllers/users');
const wrapAsync = require('../helpers/wrapAsyncMiddleware');
const { HttpError } = require('../helpers/error');
const validatorMiddleware = require('../helpers/validatorMiddleware');

const router = new Router();

router.post('/users/auth', [
  body('email').exists(),
  body('password').exists(),
],
validatorMiddleware,
wrapAsync(async (req, res) => {
  const { email, password } = req.body;

  const user = await UsersController.login(email, password);

  if (!user) {
    throw new HttpError(UNAUTHORIZED, 'Unauthorized');
  }

  return res.json(user);
}));

module.exports = router;
