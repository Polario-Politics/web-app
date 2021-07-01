import express from 'express';
import users from './users';
import ratings from './ratings';

const router = express.Router();

router.use('/users', users);
router.use('/ratins', ratings);

export default router;
