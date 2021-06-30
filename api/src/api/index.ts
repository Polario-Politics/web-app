import express from 'express';
import users from './users';
import sources from './sources';

const router = express.Router();

router.use('/users', users);
router.use('/sources', sources);

export default router;
