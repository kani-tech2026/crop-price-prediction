const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
  cropName: String,
  location: String,
  currentPrice: Number,
  predictedPrice: Number
});

module.exports = mongoose.model("Crop", cropSchema);