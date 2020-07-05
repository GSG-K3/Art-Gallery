const express = require('express')
const router = express.Router()
const getArt = require('../controllers/getArt')
const login = require('./logIn')

router.get('/api/get-art', getArt)
router.post('/api/login', login)
module.exports = router
