import { Request, Response, NextFunction } from 'express';

import redis from '../redis';
import { encryptResponse } from '.';
import { SchemaNotFoundError } from './errors';

class BaseController {
  action(name: string) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const data = await (this as any)[name](req, res, next);
        if (data.errors) {
          return next(data.errors[0]);
        }
        if (data.data && JSON.stringify(data.data) === '{}') {
          throw new SchemaNotFoundError();
        }
        if (res.locals.doEncryptResponse) {
          const encryptedData = await encryptResponse(redis, data, res.locals.apiKey);
          return res.json(encryptedData);
        }
        res.json(data);
      } catch (err) {
        next(err);
      }
    };
  }
}

export default BaseController;
