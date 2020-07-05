const express = require('express')
const router = express.Router()
const getArt = require('../controllers/getArt')

router.get('/api/get-art', getArt)

module.exports = router
