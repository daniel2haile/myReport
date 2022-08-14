const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  // _id: {
  //   type: String,
  // },
  user_id: { type: mongoose.Schema.Types.ObjectId },
  // user_id : {type :String},
  firstname: { type: String, required: true },
  middlename: { type: String },
  lastname: { type: String, required: true },
  current_city: { type: String, required: true },
  phone: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, unique: "Admin" },
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;


class UserCollection {

}

module.exports = UserCollection;

