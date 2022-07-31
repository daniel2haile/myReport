const mongoose = require("mongoose");

const ReportSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageName: { type: String, required: true },
  images: { type : String, required: true},
  createdAt: { type: Date},
  postedBy: { type: String, required: true },
});

module.exports = mongoose.model("report", ReportSchema);
