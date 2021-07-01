import express, { Request, Response } from 'express';
import { errorWrap } from '../middleware';

import User from '../models/user';
import { Error404, HTTP_OK } from '../utils/endpoint-utils';

const router = express.Router();

// Retrieves all of the users in the db
router.get(
  '/',
  errorWrap(async (req: Request, res: Response) => {
    const users = await User.find({});
    HTTP_OK(res, 'Successfully retrieved all users', users);
  }),
);

// Retrieves a specific user
router.get(
  '/:id',
  errorWrap(async (req: Request, res: Response) => {
    const user = await User.findById(req.params.id);

    if (user) {
      HTTP_OK(res, 'Successfully retrieved user', user);
      return;
    }

    Error404(res, 'User not found');
  }),
);

// Creates a new user
router.post(
  '/',
  errorWrap(async (req: Request, res: Response) => {
    const user = await User.create(req.body);

    if (user) {
      HTTP_OK(res, 'Successfully created new user', user);
    }
  }),
);

// Updates a user
router.put(
  '/:id',
  errorWrap(async (req: Request, res: Response) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (updatedUser) {
      HTTP_OK(res, 'Successfully updated user', updatedUser);
      return;
    }

    Error404(res, 'User not found');
  }),
);

export default router;
