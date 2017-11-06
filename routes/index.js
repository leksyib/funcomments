const express = require('express');
const router = express.Router();
const routesController = require('../controllers/routesController.js');

router.get('/', routesController.home);
router.get('/signUp', routesController.signup);
router.get('/login', routesController.login);
router.get('*', routesController.error);
module.exports = router;