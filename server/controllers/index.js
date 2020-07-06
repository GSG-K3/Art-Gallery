const express = require('express')
const router = express.Router()

const login = require('./logIn')

const getArt = require('./getArt')
const signup = require('./signup')
const checkEmail = require('../middlewares/checkEmail')

router.get('/api/get-art', getArt)
router.post('/api/signup', checkEmail, signup)
router.post('/api/login', login)

module.exports = router
