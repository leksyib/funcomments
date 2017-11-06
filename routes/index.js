const express = require('express');
const router = express.Router();
const controller1 = require('../controllers/controller1.js')

router.get('/', controller1.home);
router.get('/signUp', controller1.signup);
router.get('/login', controller1.login);
module.exports = router;