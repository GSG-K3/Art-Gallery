const express = require('express')
const router = express.Router()
const getArt = require('./getArt')
const signup = require('./signup')
const checkEmail = require('../middlewares/checkEmail')
const addArt = require('./postArt')
router.get('/api/get-art', getArt)
router.post('/api/signup', checkEmail, signup)
router.post('/api/add-art', addArt)

module.exports = router
