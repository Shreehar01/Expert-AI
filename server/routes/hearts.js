import express from 'express';
import {getHearts, createHeart, updateHeart, deleteHeart} from '../controllers/hearts.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getHearts);
router.post('/', auth, createHeart);
router.patch('/:id', auth, updateHeart);
router.delete('/:id', auth, deleteHeart);

export default router; 