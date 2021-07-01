import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { User } from 'polario-common';

import { errorWrap } from '../middleware';
import { HTTP_OK } from '../utils/endpoint-utils';

const router = express.Router();

const CALLBACK_ROUTE = '/api/auth/google/callback';

interface IQuery {
  state: any;
}

router.get(
  '/current',
  errorWrap(async (req: Request, res: Response) => {
    if (req.user) {
      HTTP_OK(res, 'Successfully retrieved current user', req.user as User);
      return;
    }

    res.status(401).json({
      message: 'Unauthorized',
      success: false,
    });
  }),
);

router.get(
  '/login',
  errorWrap(async (req: Request, res: Response, next: NextFunction) => {
    const { successRedirect = '/', failureRedirect = '/login' } = req.query;

    const callbackUrl = `${req.protocol}://${req.get('host')}${CALLBACK_ROUTE}`;

    const authState = {
      callbackUrl,
      successRedirect,
      failureRedirect,
    };

    const auth = passport.authenticate('google', {
      scope: ['profile', 'email'],
      state: Buffer.from(JSON.stringify(authState)).toString('base64'),
    });

    auth(req, res, next);
  }),
);

router.get(
  '/google/callback',
  (
    req: Request<unknown, unknown, unknown, IQuery>,
    res: Response,
    next: NextFunction,
  ) => {
    const { state } = req.query;
    const { successRedirect, failureRedirect } = JSON.parse(
      Buffer.from(state, 'base64').toString(),
    );

    const auth = passport.authenticate('google', {
      successRedirect,
      failureRedirect,
    });
    auth(req, res, next);
  },
);

router.post(
  '/logout',
  errorWrap(async (req: Request, res: Response) => {
    if (req.session) {
      req.session = null;
      req.logout();
      HTTP_OK(res, 'Logged out');
      return;
    }

    res.status(403).json({
      message: `Not logged in.`,
      success: false,
    });
  }),
);

export default router;
