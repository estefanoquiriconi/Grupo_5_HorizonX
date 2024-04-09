const express = require("express");
const router = express.Router();

const brandsAPIController = require("../../controllers/api/brandsAPIController");

router.get('/', brandsAPIController.index);

module.exports = router;