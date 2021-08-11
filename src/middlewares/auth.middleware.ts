// import { createHmac } from 'crypto';
import { NextFunction, Request, Response } from 'express';

export const validTokenNeeded = (req: Request, res: Response, next: NextFunction): Response | void => {
  // guarantee that the keys are filled
  // const currentApiKey = process.env.API_KEY as string;
  // const initialKey = process.env.API_PASSWORD as string;

  // const currentApiKey = req.get('API_KEY') as string;
  const authorization = req.get('Authorization') as string;

  if (authorization.split(' ')[0] === 'Bearer') {
    const currentApiKey = authorization.split(' ')[1];
    if (isValidKey(currentApiKey)) {
      // console.log('You are authorized!' + currentApiKey);
      return next();
    } else {
      return res.status(403).send('Forbidden');
    }
  } else {
    return res.status(401).send('Unauthorized');
  }
};

export const apiKeyNeeded = (_req: Request, res: Response, next: NextFunction): Response | void => {
  // const currentApiKey = process.env.API_KEY;
  // const initialKey = process.env.API_PASSWORD;

  if (!_req.get('Authorization')) {
    // console.log('You got no authorization header bruh');
    return res.status(401).send('Unauthorized');
  }
  // console.log('Authorization header exist');
  return next();
};

const isValidKey = (currentApiKey: string): boolean => {
  // const passwordFields = currentApiKey.split('$');
  // const salt = passwordFields[0];
  // const hash = createHmac('sha512', salt).update(initialKey).digest('base64');
  // console.log('currentApiKey ' + currentApiKey);
  // console.log('.env.API_KEY ' + process.env.API_KEY);
  return currentApiKey === process.env.API_KEY; // string used as API key
};
// API_KEY: (put \ before $ to escape the character)
// G0/wuYeGu4qBu7SlfIbDfg==$nYJyL8qI80dsXUna/iPOOPMpvS/qF0JuFjohuXag6Ir/XUOYBXyw79klM55QsORp/NZfXEFm5abPSQ/IOzsM3g==
