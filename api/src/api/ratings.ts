import express, { Request, Response } from 'express';
import { errorWrap } from '../middleware';

import Rating from '../models/rating';

const router = express.Router();

router.get(
    '/',
    errorWrap(async (req: Request, res: Response) => {
        const rating = await Rating.findOne({ url: req.query.url });

        if (rating) {
            res.status(200).json({
                message: `Successfully retrieved Rating.`,
                success: true,
                result: rating
            });
        } else {
            res.status(400).json({
                message: 'Could not find a rating for this website',
                success: false,
                result: false
            });
        }
    }),
);

export default router;
