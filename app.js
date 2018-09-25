const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/ReductionsApp')
  .then(() => debug('Connected Successfully to mongodb'));

const app = express();


const port = process.env.PORT || 3000;
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const reductionRouter = require('./services/reductionRouter');
const inflationRouter = require('./services/inflationRouter');
const deflationRouter = require('./services/deflationRouter');


app.use('/api/reductions', reductionRouter);
app.use('/api/deflations', deflationRouter);
app.use('/api/inflations', inflationRouter);


app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

app.listen(port, () => {
  debug(`Listening on port ${chalk.green(port)}`);
});
