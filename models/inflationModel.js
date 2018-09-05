const mongoose = require('mongoose');

const inflationModel = require('./reductionModel').reductionModel;

module.exports = mongoose.model('Inflation', inflationModel);
