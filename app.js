const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.Promise = require('bluebird');

mongoose.connect(process.env.MONGO_URL || 'mongodb://user:password2018@ds143143.mlab.com:43143/iqra', {
  useMongoClient: true
})
  .then(() => debug('Connected Successfully to mongodb'))
  .catch(error => debug(error));

const app = express();


const port = process.env.PORT || 3000;
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const teacherRouter = require('./services/teacherRouter');
const studentRouter = require('./services/studentRouter');



app.use('/api/teachers', teacherRouter);
app.use('/api/students', studentRouter);



app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

app.listen(port, () => {
  debug(`Listening on port ${port}`);
});
