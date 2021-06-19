import express from 'express';
import {getInsurance, createInsurance, updateInsurance, deleteInsurance} from '../controllers/insurance.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getInsurance);
router.post('/', auth, createInsurance);
router.patch('/:id', auth, updateInsurance);
router.delete('/:id', auth, deleteInsurance);

export default router; 