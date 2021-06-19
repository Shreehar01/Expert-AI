import express from 'express';
import {getStrokes, createStroke, updateStroke, deleteStroke} from '../controllers/stroke.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getStrokes);
router.post('/', auth, createStroke);
router.patch('/:id', auth, updateStroke);
router.delete('/:id', auth, deleteStroke);

export default router; 