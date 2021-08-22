import { createHmac, randomBytes } from 'crypto';

export const hash = (key: string): string => {
  const salt = randomBytes(16).toString('base64');
  const hash = createHmac('sha512', salt).update(key).digest('base64');
  return salt + '$' + hash;
};
