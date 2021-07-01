import express from 'express';
import users from './users';
import ratings from './ratings';
import sources from './sources';
import auth from './auth';

const router = express.Router();

router.use('/users', users);
router.use('/ratins', ratings);
router.use('/sources', sources);
router.use('/auth', auth);

export default router;
