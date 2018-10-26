const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;



const teacherSchema = new Schema({
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
  students: [String],
  
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });


teacherSchema.index({
  lastname: 1
});
teacherSchema.plugin(mongoosePaginate);
const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = { Teacher };
