const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "lastname required"]
    },
    birthday: {
      type: String
    },
    isDeleted: {
      type: Boolean,
      default: false
    },
    grade: {
      type: Number
    },
    isActive: {
      // to indicate if he is playing
      type: Boolean
    },
    teacher_id: {
      type: String,
      required: [true, 'Teacher "_id" is required']
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

studentSchema.index({
  fullName: 1
});

studentSchema.plugin(mongoosePaginate);
const Student = mongoose.model("Student", studentSchema);

module.exports = { Student };
