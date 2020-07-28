import { get } from 'lodash';
import { Request, Response, NextFunction } from 'express';

import redis from '../redis';
import { config, decryptRequest } from '.';
import { AuthenticationError } from './errors';

export const validateApiKey = (algorithm = config.apiKey.algorithmEncrypt) => async (req: Request, res: Response, next: NextFunction) => {
  const { query = {} } = req.body;
  const apiKey = req.headers['api-key'] as string;
  const { encryptedData, encryptedKey } = query;

  const doValidateApiKey = apiKey && encryptedKey && encryptedData;
  if (doValidateApiKey) {
    const apiKeyData = await redis.get(apiKey);
    if (!apiKeyData) {
      throw new AuthenticationError('Invalid api key');
    }
    const userData = JSON.parse(apiKeyData);
    const publicKey = get(userData, 'account.publicKey');
    const decryptedData = decryptRequest(query, publicKey, algorithm);

    res.locals.doEncryptResponse = true;
    res.locals.apiKey = apiKey;
    req.body.query = decryptedData;
  }

  next();
};
