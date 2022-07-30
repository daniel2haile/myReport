const mongoose = require("mongoose");

const ReportSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageName: { type: String, required: true },
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, required: true },
  createdBy: { type: String, required: true },
});

module.exports = mongoose.model("report", ReportSchema);
