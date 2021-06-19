import express from 'express';
import {getLoans, createLoan, updateLoan, deleteLoan} from '../controllers/loan.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getLoans);
router.post('/', auth, createLoan);
router.patch('/:id', auth, updateLoan);
router.delete('/:id', auth, deleteLoan);

export default router; 