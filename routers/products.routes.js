const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');


router.get('/detail', controller.detail);
router.get('/productCart', controller.productCart);
router.get('/create', controller.create);
router.get('/edit', controller.edit);


module.exports = router;