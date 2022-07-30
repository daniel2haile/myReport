const mongoose = require("mongoose");

const ReportSchema = mongoose.Schema({
  imageName: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model("report", ReportSchema);
