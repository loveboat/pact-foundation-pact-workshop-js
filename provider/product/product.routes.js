import { Router } from 'express';
import { getAll, getById } from './product.controller.js';

const router = Router();

router.get('/product/:id', getById);
router.get('/products', getAll);

export default router;
