const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  formId: {
    type: String,
    required: true,
  },
  answers: {
    type: Object, // key-value pair (label: value)
    default: {},
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Response", responseSchema);
