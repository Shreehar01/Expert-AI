import express from 'express';
import {getDiabetes, createDiabetes, updateDiabetes, deleteDiabetes} from '../controllers/diabetes.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getDiabetes);
router.post('/', auth, createDiabetes);
router.patch('/:id', auth, updateDiabetes);
router.delete('/:id', auth, deleteDiabetes);

export default router; 