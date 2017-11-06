const express = require('express');
const router = express.Router();
const controller1 = ('../controllers/controller1.js')

router.get('/', controller1.home);
router.get('/signUp', controller1.signup);

module.exports = router;