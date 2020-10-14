// simple express middleware use cases

// WHY - JavaScript scope and context. Functional programming
// WHAT - HOF

// Example:
// The question? We have one Trainline logger. 
// But new requirement is to pass in a different logger.
// We need to refactor the code to pass in one logger: TrainlineLogger and Log4Net
// How do we pass a generic logger whilst maintaining the express signature? 
// Higher Order Function

const express = require('express');
const logger = require('trainline-logger');
const logMiddleware = require('./logMiddleware');

const app = express();

// log
app.use(logMiddleware(logger));

app.get('/get-data', (req, res) => {
  res.json({ data: 100 });
});

// incorrectLogMiddleware.js
const incorrectLogMiddleware = (logger, req, res, next) => { // not respecting express signature
  // hit first
  logger.info(req.headers);
  logger.info(req.body);
  // callback moves onto the next item in the FIFO queue
  next();
}

// logMiddleware.js
const logMiddleware = (logger) => (req, res, next) => {
  // hit first
  logger.info(req.headers);
  logger.info(req.body);
  // callback moves onto the next item in the FIFO queue
  next();
}
