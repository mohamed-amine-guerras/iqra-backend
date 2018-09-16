const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

const reductionModel = new Schema({
  codeName: String,
  isActive: Boolean,
  deleted: Boolean,
  users: [String],
  source: { center: { longitude: Number, latitude: Number }, rayon: Number },
  destination: { center: { longitude: Number, latitude: Number }, rayon: Number },
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
  usage: Number,
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
