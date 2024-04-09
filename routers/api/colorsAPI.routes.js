const express = require("express");
const router = express.Router();

const colorsAPIController = require("../../controllers/api/colorsAPIController");

router.get('/', colorsAPIController.index);

module.exports = router;