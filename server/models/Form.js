const mongoose = require("mongoose");

// Single field schema
const fieldSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true, // text, dropdown, radio, checkbox
  },
  options: {
    type: [String], // used for dropdown / radio
    default: [],
  },
});

// Form schema
const formSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  fields: {
    type: [fieldSchema],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Form", formSchema);
