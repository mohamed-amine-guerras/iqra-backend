const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

const reductionModel = new Schema({
  codeName: String,
  isActive: Boolean,
  users: [String],
  source: {
    center: {
      longitude: Number,
      latitude: Number
    },
    rayon: Number
  },
  destination: {
    center: {
      longitude: Number,
      latitude: Number
    },
    rayon: Number
  },
  dateRange: [{
    startDate: Date,
    endDate: Date
  }],
  timeRange: [{
    startHour: Number,
    endHour: Number
  }],
  weekDays: [String],
  maxPersonUsage: Number,
  flatAmount: Number,
  percentage: Number,
  minPriceValue: Number,
  maxReducationValue: Number

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


reductionModel.index({
  users: 1
});
reductionModel.index({
  dateRange: 1
});
reductionModel.plugin(mongoosePaginate)

module.exports =  mongoose.model('Reduction', reductionModel);