const express = require("express");
const router = express.Router();

const userController = require("../controllers/reportController");

router.post("/", userController.createReport);
router.get("/", userController.getAll);

module.exports = router;
