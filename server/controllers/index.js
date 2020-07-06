const express = require('express')
const router = express.Router()
const getArt = require('./getArt')
const signup = require('./signup')
const checkEmail = require('../middlewares/checkEmail')

router.get('/api/get-art', getArt)
router.post('/api/signup', checkEmail, signup)

module.exports = router
