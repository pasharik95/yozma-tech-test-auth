const express = require('express')

const app = express()

// Configure logger
require('./logger')(app)

const port = process.env.port || 3000


/* Configure server */
app.get('/', (req, res) => res.send('It is test task from yozma.tech!'))

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})