const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;


const polygonSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Polygon']
  },
  coordinates: {
    type: [[[Number]]], // Array of arrays of arrays of numbers
  }
});


const reductionModel = new Schema({
  codeName: String,
  isActive: Boolean,
  isDeleted: {
    type: Boolean,
    default: false
  },
  users: [String],
  departure: polygonSchema,
  destination: polygonSchema,
  startDate: Date,
  endDate: Date,
  weekDays: [String],
  flatAmount: Number,
  percentage: Number,
  maxPercentAmount: Number,
  minPrice: Number,
  maxPrice: Number,
  maxUsage: Number,
  maxPersonUsage: Number,
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
reductionModel.plugin(mongoosePaginate);
const Reduction = mongoose.model('Reduction', reductionModel);

module.exports = { Reduction, reductionModel };
