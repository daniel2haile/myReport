const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.register = async (req, res, next) => {
  try {
    console.log("req.body.role => ", req.body.role);
    const hashPassword = bcrypt.hashSync(req.body.password, 6);
    const payload = {
      firstname: req.body.firstname,
      middlename: req.body.middlename,
      lastname: req.body.lastname,
      age: req.body.age,
      entry_year: req.body.entry_year,
      profile_pic: req.body.profile_pic,
      current_city: req.body.current_city,
      phone: req.body.phone,
      email: req.body.email,
      password: hashPassword,
      role: req.body.role,
    };


    const user = new UserModel(payload);
    const isEmail = await UserModel.findOne({ email: req.body.email });
    if (isEmail) {
      res.json({
        status: "Error",
        message: "Email already exist...",
      });

    } else if (req.body.password.length < 4) {
      res.json({
        status: "Error",
        message: "Password too short, atleast 4 characters",
      });
    } else {
      await user.save();
      res.json({ status: "success", data: user });
    }
  } catch (err) {
    console.log("Error: ", err.message);
    res.json({ status: "error", message: err.message });
  }
};
