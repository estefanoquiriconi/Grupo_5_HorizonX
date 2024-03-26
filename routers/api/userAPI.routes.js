const express = require('express')
const router = express.Router()

const usersAPIController = require('../../controllers/api/usersAPIController')

router.get('/', usersAPIController.index)
router.get('/last', usersAPIController.last)
router.get('/:id', usersAPIController.show)
router.get('/avatar/:userId', usersAPIController.avatar)

module.exports = router
