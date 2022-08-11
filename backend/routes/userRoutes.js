const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
// const verifyAdmin = require("../middleware/auth");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/", userController.getAllUsers);
router.get("/:user_id", userController.findUserById);
router.delete("/:user_id", userController.deleteUserById);
router.delete("/", userController.deleteAllUsers);
module.exports = router;
