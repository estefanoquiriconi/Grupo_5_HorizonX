const express = require('express')
const router = express.Router()

const usersAPIController = require('../../controllers/api/usersAPIController')

router.get('/', usersAPIController.index)
router.get('/count', usersAPIController.count)
router.get('/last', usersAPIController.last)
router.get('/mails/', usersAPIController.onlyMails)
router.get('/avatar/:userId', usersAPIController.avatar)
router.get('/:id', usersAPIController.show)


module.exports = router
