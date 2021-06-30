import express, { Request, Response } from 'express';
import { Source as SourceType } from 'polario-common';
import { errorWrap } from '../middleware';

import Source from '../models/source';
import { Error404, HTTP_OK } from '../utils/endpoint-utils';

const router = express.Router();

// Retrieve all sources in the db
router.get(
  '/',
  errorWrap(async (req: Request, res: Response) => {
    const sources = await Source.find({});

    if (sources) {
      HTTP_OK(res, 'Successfully retrieved all sources', sources);
    }
  }),
);

// Retrive a specific source by id
router.get(
  '/:id',
  errorWrap(async (req: Request, res: Response) => {
    const source = await Source.findById(req.params.id);

    if (source) {
      HTTP_OK(res, 'Successfully retrieved source', source);
      return;
    }

    Error404(res, 'Source not found');
  }),
);

// Create a new source
router.post(
  '/',
  errorWrap(async (req: Request, res: Response) => {
    const source = await Source.create(req.body);

    if (source) {
      HTTP_OK(res, 'Successfully created source', source);
      return;
    }
  }),
);

// Loads a json dump into the db
router.post(
  '/dump',
  errorWrap(async (req: Request, res: Response) => {
    const sourceDump: SourceType[] = req.body;

    sourceDump.map(async (source) => {
      await Source.create(source);
    });

    HTTP_OK(res, 'Successfully dumped all sources', []);
  }),
);

// Updates a source
router.put(
  '/:id',
  errorWrap(async (req: Request, res: Response) => {
    const updatedSource = await Source.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );

    if (updatedSource) {
      HTTP_OK(res, 'Successfully updated source', updatedSource);
      return;
    }

    Error404(res, 'Source not found');
  }),
);

export default router;
