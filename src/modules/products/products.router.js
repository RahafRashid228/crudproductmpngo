import {Router} from 'express';
import * as productController from './products.controller.js'
 const router =Router();

router.get('/',productController.getAll);
router.get('/:id',productController.getproduct);
router.put('/:id',productController.updateproduct);
router.delete('/:id',productController.deleteproduct);


export default router;