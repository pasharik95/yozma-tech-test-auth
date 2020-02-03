const express = require('express')
const {
  NOT_FOUND,
  INTERNAL_SERVER_ERROR
} = require('http-status-codes')
const usersRouter = require('./routers/users')

const app = express()

// Configure logger
require('./logger')(app)

const port = process.env.port || 3000

/* Configure server */
app.use(express.json())

app.use(usersRouter)

// Not found middleware
app.use((req, res) => {
  res.status(NOT_FOUND).json({ message: 'Not found' })
})

// Error middleware
app.use((err, req, res, next) => {
  res.status(err.status ? err.status : INTERNAL_SERVER_ERROR ).json({ message: err.message })
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})