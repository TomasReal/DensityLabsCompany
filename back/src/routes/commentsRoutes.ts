import express, { Router } from 'express';
import {
    createComment,
    deleteComment,
    getAllComments,
    updateComment,
} from '../controllers/commentsController';

const router = Router();

router.post('/', createComment);
router.get('/', getAllComments);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);
export default router;

