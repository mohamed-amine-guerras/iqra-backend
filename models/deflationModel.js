const mongoose = require('mongoose');

const deflationModel = require('./reductionModel').reductionModel;

module.exports = mongoose.model('Deflation', deflationModel);
