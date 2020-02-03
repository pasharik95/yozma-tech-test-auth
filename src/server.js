const express = require('express')

const usersRouter = require('./routers/users')

const app = express()

// Configure logger
require('./logger')(app)

const port = process.env.port || 3000

/* Configure server */
app.use(express.json())

app.use(usersRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})