import express from 'express';
const router = express.Router();
import routesController from '../controllers/routesController';

router.get('/', routesController.home);
router.get('/signUp', routesController.signup);
router.get('/login', routesController.login);
router.get('*', routesController.error);

export default router;