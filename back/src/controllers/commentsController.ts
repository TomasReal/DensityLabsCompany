import { Request, Response } from 'express';
import { DataSource } from 'typeorm';
import { getRepository } from 'typeorm';
import { AppDataSource } from '../dataBase';
import { Comments } from '../entities/comments.entity';

export const createComment = async (req: Request, res: Response) => {
    const { name, comment, email } = req.body;

    const comentRepository = await AppDataSource.getRepository(Comments);

    const newComment = comentRepository.create({ name, comment, email });

    const savedComment = await comentRepository.save(newComment);

    res.status(201).json({
        message: 'Comment created successfully',
        comment: savedComment,
    });
};

export const getAllComments = async (req: Request, res: Response) => {
    try {
        const comentRepository = AppDataSource.getRepository(Comments);

        const comments = await comentRepository.find();

        res.status(200).json({
            message: 'Comments retrieved successfully',
            comments,
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'An error occurred while retrieving comments',
            error: error,
        });
    }
};

export const updateComment = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { email, name, comment } = req.body;

    try {
        const comentRepository = AppDataSource.getRepository(Comments);
        const comentFinding = await comentRepository.findOneBy({ id: id });

        if (!comentFinding) {
            res.status(404).json({ message: `Comment with ${id} not found` });
        }
        await comentRepository.update({ id: id }, { name, email, comment });
        res.status(200).json({ name, id, email, comment });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error updating comment',
            error,
        });
    }
};

export const deleteComment = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const comentRepository = AppDataSource.getRepository(Comments);
        const commentFind = comentRepository.findOneBy({ id: id });

        if (!commentFind) {
            res.status(404).json({ message: `Comment with ${id} not found` });
        }

        await comentRepository.delete({ id: id });
        res.status(200).json({
            message: `Comment with id: ${id} deleted succesfully`,
        });
    } catch (error) {
        console.error(`Error deleting comment`, error);
    }
};
