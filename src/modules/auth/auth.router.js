import {Router} from 'express';
import * as authController from './auth.controller.js'
 const router =Router();

router.post('/creatingprod',authController.creatingprod);






export default router;