import { createHmac } from 'crypto';
import { NextFunction, Request, Response } from 'express';

export const validTokenNeeded = (req: Request, res: Response, next: NextFunction): Response | void => {
  // guarantee that the keys are filled
  const currentApiKey = process.env.API_KEY as string;
  const initialKey = process.env.API_PASSWORD as string;

  if (req.headers['authorization']) {
    const authorization = req.headers['authorization'].split(' ');
    if (authorization[0] !== 'Bearer') {
      return res.status(401).send();
    } else {
      if (isValidKey(currentApiKey, initialKey)) {
        return next();
      } else {
        return res.status(403).send();
      }
    }
  } else {
    return res.status(403).send();
  }
};

export const apiKeyNeeded = (_req: Request, res: Response, next: NextFunction): Response | void => {
  const currentApiKey = process.env.API_KEY;
  const initialKey = process.env.API_PASSWORD;

  if (!currentApiKey || !initialKey) {
    return res.status(401).send();
  }
  return next();
};

const isValidKey = (currentApiKey: string, initialKey: string): boolean => {
  const passwordFields = currentApiKey.split('$');
  const salt = passwordFields[0];
  const hash = createHmac('sha512', salt).update(initialKey).digest('base64');

  return hash === passwordFields[1];
};
