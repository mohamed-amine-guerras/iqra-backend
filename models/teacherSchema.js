const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const { Schema } = mongoose;

const teacherSchema = new Schema(
  {
    lastName: {
      type: String
    },
    firstName: {
      type: String
    },
    isDeleted: {
      type: Boolean,
      default: false
    },
    email: {
      type: String,
      required: [true, "The email is required"],
      unique: true
    },
    password: {
      type: String,
      required: [true, "The password is required"]
    },
    birthday: {
      type: String
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

teacherSchema.index({
  lastname: 1
});
teacherSchema.plugin(mongoosePaginate);
const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = { Teacher };
