const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const { Schema } = mongoose;

const sessionSchema = new Schema(
  {
    sessionName: {
      type: String
    },
    alphabet: {
      type: String
    },
    paragraph: {
      type: String
    },
    question: {
      question: {
        type: String
      },
      answer: {
        type: Number,
        default: 0
      },
      options: {
        type: [String]
      }
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

sessionSchema.index({
  sessionName: 1
});
sessionSchema.plugin(mongoosePaginate);
const Session = mongoose.model("Session", sessionSchema);

module.exports = { Session };
