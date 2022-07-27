const express = require("express");
const router = express.Router();

const userController = require("../controllers/schoolController");

router.post("/create", userController.createSchool);

module.exports = router;
