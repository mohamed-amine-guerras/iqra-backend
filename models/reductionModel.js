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


function dateValidator (endDate)  {
  if (this.startDate) return this.startDate <= endDate ;
  return true;
  
}

const reductionModel = new Schema({
  codeName: {
    type: String,
    required: [true, 'Codename required']
  },
  isActive: {
    type:Boolean,
    default:true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  users: [String],
  departure: {
    address: String,
    location: polygonSchema
  },
  destination: {
    address: String,
    location: polygonSchema
  },
  startDate: Date,
  endDate: {
    type: Date,
    validate:  [dateValidator, 'End Date must be after Start Date']
  },
  weekDays: {
    type: [String],
    enum:['Sunday', 'Monday', 'Tuesday', 
    'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  flatAmount: {
    type: Number,
    min:0
  },
  percentage: {
    type: Number,
    min: 0
  },
  maxPercentAmount: {
    type: Number,
    min: 0
  },
  minPrice: {
    type: Number,
    min: 0
  },
  maxPrice: {
    type: Number,
    min: 0
  },
  maxUsage: {
    type: Number,
    min: 0
  },
  maxPersonUsage: {
    type: Number,
    min: 0
  },
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });


reductionModel.index({
  codeName: 1
});
reductionModel.plugin(mongoosePaginate);
const Reduction = mongoose.model('Reduction', reductionModel);

module.exports = { Reduction, reductionModel };
