const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  algorithm: {
    type: String,
    required: true,
  },

  array: {
    type: [Number],
    required: true,
  },

  target: {
    type: Number,
  },

  foundIndex: {
    type: Number,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("History", historySchema);