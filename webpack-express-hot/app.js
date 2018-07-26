const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

app.use('/api', require('./routes/api-router'));

app.get('/', (req, res, next) => {
  res.send({ message: 'main page' })
});

module.exports = app;
