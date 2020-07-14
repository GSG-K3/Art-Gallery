const express = require('express');
const router = express.Router();
const addArt = require('./postArt');
const uploadFile = require('./uploadFile');
const login = require('./logIn');
const getArt = require('./getArt');
const signup = require('./signup');
const checkEmail = require('../middlewares/checkEmail');
const recentArt = require('./recentArt');
const checkAccount = require('./checkAccount');

router.get('/api/get-art', getArt);
router.post('/api/signup', checkEmail, signup);
router.post('/api/login', login);
router.post('/api/add-art', addArt);
router.post('/api/uploadFile', uploadFile);
router.post('/api/checkAccount', checkAccount);
router.get('/api/recent', recentArt);

module.exports = router;
