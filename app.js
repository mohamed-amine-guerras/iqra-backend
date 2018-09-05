const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/ReductionsApp');


const app = express();


const port = process.env.PORT || 3000;
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const reductionRouter = require('./services/router');

app.use('/api',reductionRouter);

app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

app.listen(port, () => {
  debug(`Listening on port ${chalk.green(port)}`);
});
