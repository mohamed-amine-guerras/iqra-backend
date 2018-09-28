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

const positiveNumberValidator = (number) => {return number >= 0};

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
    validate: {
      validator: function(end) {
        return this.startDate ? end >= this.startDate : true;
      }
    }
  },
  weekDays: {
    type: [String],
    enum:['Sunday', 'Monday', 'Tuesday', 
    'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  flatAmount: {
    type: Number,
    validate:{
      validator: positiveNumberValidator
    }
  },
  percentage: {
    type: Number,
    validate: {
      validator: positiveNumberValidator
    }
  },
  maxPercentAmount: {
    type: Number,
    validate: {
      validator: positiveNumberValidator
    }
  },
  minPrice: {
    type: Number,
    validate: {
      validator: positiveNumberValidator
    }
  },
  maxPrice: {
    type: Number,
    validate: {
      validator: positiveNumberValidator
    }
  },
  maxUsage: {
    type: Number,
    validate: {
      validator: positiveNumberValidator
    }
  },
  maxPersonUsage: {
    type: Number,
    validate: {
      validator: positiveNumberValidator
    }
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
