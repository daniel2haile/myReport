const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

exports.authorize = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    console.log("authorization", token);
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      req.user = user;
      if (err) {
        if (err.message.includes("expired")) {
          res.send({
            success: false,
            message: "Token is expired, please login again",
          });
        } else {
          res.status(403).send({ success: false, message: "Forbidden" });
        }
      } else {
        next();
      }
    });
  } else {
    res.status(401).send({ success: false, message: "Unauthenticated" });
  }
};

exports.adminAuthorize = (req, res, next) => {
  if (req.user.role === "Admin") {
    next();
  } else {
    res.send({
      success: false,
      message: "Unauthorized. Only admin can be granted permissions",
    });
  }
};
