const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;


const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point']
  },
  coordinates: {
    type: [Number],
    index:'2dsphere'
  }
});


const reductionModel = new Schema({
  codeName: String,
  isActive: Boolean,
  isDeleted: Boolean,
  users: [String],
  source: { center: pointSchema , radius: Number, address: String },
  destination: { center: pointSchema, radius: Number, address: String },
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
