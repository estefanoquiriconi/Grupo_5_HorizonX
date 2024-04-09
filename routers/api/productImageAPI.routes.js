const express = require('express')
const router = express.Router()

const productImageAPIController = require('../../controllers/api/productImageAPIController')

router.get('/:imageId', productImageAPIController.show)

module.exports = router
