import Boom from '@hapi/boom';
import { NextFunction, Response, Request } from 'express';
import { detailValidationSchema } from '../../../validation/test.validation';

export const detailBodyValidation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
    await detailValidationSchema.validateAsync(req.body);
    next();
  } catch (err) {
    console.log(err);
    res.status(400).send(Boom.badRequest('Invalid query', err));
    return;
  }
}