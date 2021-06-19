import express from 'express';
import {getCredits, createCredit, updateCredit, deleteCredit} from '../controllers/credit.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getCredits);
router.post('/', auth, createCredit);
router.patch('/:id', auth, updateCredit);
router.delete('/:id', auth, deleteCredit);

export default router; 