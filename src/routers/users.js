const { Router } = require('express');

const router = new Router();

router.post('/users/auth', (req, res) => {
  res.json({ name: 'Pavlo1', surname: 'Servatovych1' });
});

module.exports = router;
