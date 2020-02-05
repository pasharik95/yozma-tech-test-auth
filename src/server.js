const express = require('express');
const { NOT_FOUND } = require('http-status-codes');

const { logger, addLoggerMiddlewares } = require('./logger');

const { handleError } = require('./helpers/error');

const usersRouter = require('./routers/users');

const port = process.env.port || 3000;

const app = express();

// Configure logger
addLoggerMiddlewares(app);

// Router for health checker
app.get('/health', (req, res) => {
  res.send('OK');
});

/* Configure server */
app.use(express.json());

app.use(usersRouter);

// Not found middleware
app.use((req, res) => {
  res.status(NOT_FOUND).json({ message: 'Not found' });
});

// Error middleware
app.use(handleError);

app.listen(port, () => {
  logger.info(`Server is running on port: ${port}`);
});
