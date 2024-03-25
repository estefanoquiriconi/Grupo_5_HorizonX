const express = require('express')
const router = express.Router()

const categoriesAPIController = require('../../controllers/api/categoriesAPIController')
const categoryValidationMiddleware = require('../../middlewares/categoryValidationMiddleware')

router.get('/', categoriesAPIController.index)
router.post('/', categoryValidationMiddleware, categoriesAPIController.store)
router.get('/:categoryId', categoriesAPIController.show)
router.put('/:categoryId', categoryValidationMiddleware, categoriesAPIController.update)
router.delete('/:categoryId', categoriesAPIController.destroy)

module.exports = router
