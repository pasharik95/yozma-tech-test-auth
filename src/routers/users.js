const { Router } = require('express')

const router = new Router()

router.post('/users/auth', (req, res) => {
  res.json({ name: 'Pavlo', surname: 'Servatovych' })
})

module.exports = router