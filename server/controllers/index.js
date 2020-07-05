const express = require('express')
const router = express.Router()
const getArt = require('./getArt')
const signup = require('./signup')

router.get('/api/get-art', getArt)
router.post('/api/signup', signup)

module.exports = router
