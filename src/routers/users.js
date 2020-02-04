const { Router } = require('express');

const UsersController = require('../controllers/users');

const router = new Router();

router.post('/users/auth', async (req, res) => {
  const { email, password } = req.body;

  const user = await UsersController.login(email, password);

  res.json(user);
});

module.exports = router;
