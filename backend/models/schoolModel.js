const mongoose = require("mongoose");

const SchoolSchema = mongoose.Schema({
  school_name : { type: String, required: true},
  city : { type: String, required: true},

});

module.exports = mongoose.model("school", SchoolSchema);
