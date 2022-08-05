const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  middlename: { type: String },
  lastname: { type: String, required: true },
  current_city: { type: String, required: true },
  phone: { type: String },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  role: { type: String, required: true, unique: 'Admin' },
});


module.exports = mongoose.model("user", UserSchema);