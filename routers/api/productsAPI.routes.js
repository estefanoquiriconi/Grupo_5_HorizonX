const express = require('express')
const router = express.Router()

const productsAPIController = require('../../controllers/api/productsAPIController')

router.get('/', productsAPIController.index)
router.get('/:productId', productsAPIController.show)

module.exports = router
