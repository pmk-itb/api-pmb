// import { createHmac } from 'crypto';
import { NextFunction, Request, Response } from 'express';

export const validTokenNeeded = (req: Request, res: Response, next: NextFunction): Response | void => {
  // guarantee that the keys are filled
  // const currentApiKey = process.env.API_KEY as string;
  // const initialKey = process.env.API_PASSWORD as string;

  const currentApiKey = req.get('API_KEY') as string;
  console.log('currentApiKey ' + currentApiKey);
  if (isValidKey(currentApiKey)) {
    console.log('You are authorized!' + currentApiKey);
    return next();
  } else {
    return res.status(403).send('Forbidden');
  }
};

export const apiKeyNeeded = (_req: Request, res: Response, next: NextFunction): Response | void => {
  // const currentApiKey = process.env.API_KEY;
  // const initialKey = process.env.API_PASSWORD;

  if (!_req.get('API_KEY')) {
    return res.status(401).send('Unauthorized');
  }
  console.log('API_KEY header exist');
  return next();
};

const isValidKey = (currentApiKey: string): boolean => {
  // const passwordFields = currentApiKey.split('$');
  // const salt = passwordFields[0];
  // const hash = createHmac('sha512', salt).update(initialKey).digest('base64');
  return currentApiKey === 'lorem_ipsum'; // string used as API key
};
