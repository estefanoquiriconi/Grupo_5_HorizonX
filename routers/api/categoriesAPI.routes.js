const express = require('express')
const router = express.Router()

const categoriesAPIController = require('../../controllers/api/categoriesAPIController')

router.get('/', categoriesAPIController.index)
router.get('/:categoryId', categoriesAPIController.show)

module.exports = router
