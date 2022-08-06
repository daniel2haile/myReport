const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReportSchema = new Schema({

  // _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageName: { type: String, required: true },
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  postedBy: { type: String, required: true },
});

module.exports = mongoose.model("report", ReportSchema);
