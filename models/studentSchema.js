const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;



const studentSchema = new Schema({
  lastname: {
    type: String,
    required: [true, 'lastname required']
  },
  firstname: {
    type: String,
    required: [true, 'firstname required']
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });


studentSchema.index({
  lastname: 1
});
studentSchema.plugin(mongoosePaginate);
const Student = mongoose.model('Student', studentSchema);

module.exports = { Student };
